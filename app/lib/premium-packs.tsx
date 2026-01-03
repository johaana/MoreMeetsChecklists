
import type { LucideIcon } from "lucide-react";
import type { ReactElement } from 'react';

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

const franchise_operations_pack: PremiumPack = {
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

const hotels_and_resorts: PremiumPack = {
    id: 'hotels_and_resorts',
    title: "Hotels & Resorts Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/2f377557-d41f-4571-83d3-a52e24ac27dd',
    category: "Hospitality",
    description: "A complete operational toolkit for General Managers and Department Heads to achieve 5-star excellence in every guest experience.",
    icon: "building",
    badgeText: "Most Popular",
    badgeVariant: "default",
    bestseller: true,
    whoIsItFor: ["Hotel Owners", "General Managers", "COOs", "VPs of Operations", "Directors", "Heads of Departments", "GMs", "VPs", "and their teams"],
    sampleItems: [
            { text: "Ensure flawless room presentation with daily readiness and housekeeping verification.", icon: "home" },
            { text: "Uphold world-class food safety with kitchen hygiene (HACCP) and F&B service standards.", icon: "utensils" },
            { text: "Mitigate water-related risks with pool & spa safety protocols and water quality logs.", icon: "life-buoy" },
            { text: "Guarantee guest and staff safety through rigorous fire safety audits and evacuation drills.", icon: "siren" },
            { text: "Control site access and third-party risk with vendor and work permit SOPs.", icon: "hard-hat" },
            { text: "Prevent costly downtime with a proactive preventive maintenance schedule for all critical assets.", icon: "wrench" }
    ],
    checklists: [
        {
            title: "Daily Housekeeping & Room Readiness",
            department: "Housekeeping",
            frequency: "Daily",
            role: "Housekeeping Supervisor",
            summary: "Ensures every guest room meets the highest standards of cleanliness, functionality, and presentation before check-in and during the stay.",
            icon: "bed-double",
            tasks: [
                { id: "HK-DR-01", description: "Verify all vacant rooms are cleaned, sanitized, and inspected as per the 'Room Cleaning Checklist'.", priority: "High", riskLevel: "Medium", consequence: "Negative guest reviews, potential health risks.", proof: "Supervisor's inspection log (digital/physical).", location: "All Vacant Rooms" },
                { id: "HK-DR-02", description: "Check and restock housekeeping carts with all necessary linens, amenities, and cleaning supplies for the day's operations.", priority: "Medium", riskLevel: "Low", consequence: "Delayed room servicing, inconsistent amenity stocking.", proof: "Signed cart checklist.", location: "Housekeeping Pantry" },
                { id: "HK-DR-03", description: "Conduct a morning briefing with housekeeping staff to assign rooms, discuss VIP arrivals, and highlight any special guest requests.", priority: "Medium", riskLevel: "Low", consequence: "Poor team coordination, missed special requests.", proof: "Briefing log or attendance sheet.", location: "Housekeeping Office" },
                { id: "HK-DR-04", description: "Inspect a random sample of 5 'ready' rooms against the 5-star cleaning standard checklist.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent room quality, guest complaints.", proof: "Completed random inspection forms.", location: "Random Guest Rooms" },
                { id: "HK-DR-05", description: "Log all lost and found items with date, time, location, and description.", priority: "Medium", riskLevel: "Low", consequence: "Guest dissatisfaction, potential theft accusations.", proof: "Lost & Found Register.", location: "Housekeeping Office" },
                { id: "HK-DR-06", description: "Check and clear all housekeeping service corridors of trays and linen.", priority: "Low", riskLevel: "Low", consequence: "Fire hazard, untidy appearance.", proof: "Visual check during rounds.", location: "Service Corridors" },
                { id: "HK-DR-07", description: "Report any maintenance issues (e.g., dripping faucet, faulty TV) found during cleaning to Engineering.", priority: "Medium", riskLevel: "Medium", consequence: "Guest complaints, worsening of maintenance problems.", proof: "Copy of maintenance request ticket/log.", location: "Guest Rooms" },
                { id: "HK-DR-08", description: "Ensure all public areas (lobby, hallways, restrooms) are cleaned as per schedule.", priority: "High", riskLevel: "Low", consequence: "Poor first impression, negative guest perception of cleanliness.", proof: "Public area cleaning log.", location: "Public Areas" },
                { id: "HK-DR-09", description: "Verify pest control measures in back-of-house areas are effective.", priority: "Medium", riskLevel: "Medium", consequence: "Pest infestation spreading to guest areas.", proof: "Pest control logbook review.", location: "Back of House" },
                { id: "HK-DR-10", description: "End-of-day reconciliation of room status between Housekeeping and Front Office systems.", priority: "High", riskLevel: "Medium", consequence: "Incorrect room assignments, guest walk-ins being turned away.", proof: "Signed discrepancy report.", location: "Housekeeping/Front Office" }
            ]
        },
        {
            title: "Front Office - Shift Opening & Closing",
            department: "Front Office",
            frequency: "Per Shift",
            role: "Front Office Executive",
            summary: "Ensures a smooth transition between shifts, accurate cash handling, and readiness for guest arrivals/departures.",
            icon: "user",
            tasks: [
                { id: "FO-SC-01", description: "Verify cash float count at the beginning and end of the shift with supervisor signature.", priority: "High", riskLevel: "High", consequence: "Cash discrepancy, theft, financial loss.", proof: "Signed float count form.", location: "Front Desk" },
                { id: "FO-SC-02", description: "Review shift handover log for pending guest requests, complaints, or follow-ups.", priority: "High", riskLevel: "Medium", consequence: "Guest service failures, unresolved issues.", proof: "Initials in handover logbook.", location: "Front Desk" },
                { id: "FO-SC-03", description: "Check PMS for expected arrivals, departures, and VIPs for the upcoming shift.", priority: "High", riskLevel: "Low", consequence: "Unprepared for guest needs, poor first impression.", proof: "PMS review confirmation.", location: "Front Desk" },
                { id: "FO-SC-04", description: "Reconcile all credit card transactions and POS settlements from the shift.", priority: "High", riskLevel: "High", consequence: "Revenue leakage, accounting errors.", proof: "End-of-shift settlement report from PMS/EDC machine.", location: "Front Desk" },
                { id: "FO-SC-05", description: "Ensure all key cards are accounted for and programmed correctly.", priority: "Medium", riskLevel: "Medium", consequence: "Guest security risk, unauthorized access.", proof: "Key card inventory count.", location: "Front Desk" },
                { id: "FO-SC-06", description: "Review and respond to new emails in the general reservations/front office inbox.", priority: "Medium", riskLevel: "Low", consequence: "Delayed response to guest inquiries.", proof: "Email inbox screenshot or log.", location: "Front Office" },
                { id: "FO-SC-07", description: "Check availability and status of meeting rooms and banquet halls.", priority: "Low", riskLevel: "Low", consequence: "Double bookings, incorrect setup for events.", proof: "Review of event management software.", location: "Front Office" },
                { id: "FO-SC-08", description: "Print and prepare registration cards for all expected arrivals.", priority: "Medium", riskLevel: "Low", consequence: "Slow check-in process.", proof: "Stack of prepared registration cards.", location: "Front Desk" },
                { id: "FO-SC-09", description: "Process any pending no-show charges from the previous night.", priority: "Medium", riskLevel: "Medium", consequence: "Loss of revenue from no-shows.", proof: "PMS no-show report.", location: "Front Desk" },
                { id: "FO-SC-10", description: "Ensure the lobby and front desk area are clean, tidy, and well-presented.", priority: "High", riskLevel: "Low", consequence: "Negative first impression on guests.", proof: "Visual inspection by shift leader.", location: "Lobby Area" }
            ]
        },
        {
            title: "F&B - Kitchen Opening Hygiene Checklist (HACCP)",
            department: "Food & Beverage",
            frequency: "Daily",
            role: "Sous Chef / Chef de Partie",
            summary: "Based on HACCP principles, this ensures the kitchen is sanitary and safe before food preparation begins.",
            icon: "utensils-crossed",
            tasks: [
                { id: "FB-KO-01", description: "Check and record temperatures of all refrigerators and freezers. Report any deviations from critical limits.", priority: "High", riskLevel: "High", consequence: "Food spoilage, risk of foodborne illness (bacterial growth).", proof: "Temperature Logbook.", location: "All Kitchen Cold Storage" },
                { id: "FB-KO-02", description: "Verify all food contact surfaces (cutting boards, prep tables) are clean and sanitized.", priority: "High", riskLevel: "High", consequence: "Cross-contamination, food poisoning.", proof: "ATP swab test results (weekly) or visual inspection log (daily).", location: "Kitchen Prep Areas" },
                { id: "FB-KO-03", description: "Ensure staff hygiene: clean uniforms, hairnets, and proper handwashing facilities are stocked and accessible.", priority: "High", riskLevel: "Medium", consequence: "Spread of pathogens from staff to food.", proof: "Supervisor's daily staff inspection sign-off.", location: "Kitchen Entrance" },
                { id: "FB-KO-04", description: "Check for any signs of pests (droppings, gnaw marks) and report immediately.", priority: "High", riskLevel: "High", consequence: "Major health code violation, brand damage, closure by authorities.", proof: "Pest Control Logbook.", location: "Entire Kitchen" },
                { id: "FB-KO-05", description: "Confirm calibration of food thermometers using the ice-point or boiling-point method.", priority: "Medium", riskLevel: "High", consequence: "Inaccurate temperature readings leading to undercooked food.", proof: "Thermometer Calibration Log.", location: "Kitchen" },
                { id: "FB-KO-06", description: "Ensure raw and cooked foods are stored separately to prevent cross-contamination.", priority: "High", riskLevel: "High", consequence: "Serious food poisoning outbreaks.", proof: "Photo of refrigerator storage arrangement.", location: "Cold Storage" },
                { id: "FB-KO-07", description: "Verify that all cleaning chemicals are stored correctly and away from food areas.", priority: "High", riskLevel: "Medium", consequence: "Risk of chemical contamination of food.", proof: "Photo of chemical storage cabinet.", location: "Chemical Store" },
                { id: "FB-KO-08", description: "Check that waste bins are clean, lined, and covered.", priority: "Medium", riskLevel: "Low", consequence: "Pest attraction and odor issues.", proof: "Visual inspection.", location: "Waste Area" },
                { id: "FB-KO-09", description: "Inspect grease traps to ensure they are not overflowing.", priority: "Medium", riskLevel: "Medium", consequence: "Drainage issues, fire hazard, pest attraction.", proof: "Grease trap inspection log.", location: "Kitchen Drains" },
                { id: "FB-KO-10", description: "Review raw material delivery log for any items received outside of safe temperature ranges.", priority: "High", riskLevel: "High", consequence: "Accepting compromised food into inventory.", proof: "Receiving log with temperature records.", location: "Receiving Area" }
            ]
        },
        {
            title: "Hotel Fire Safety & Evacuation Audit",
            department: "Security / Engineering",
            frequency: "Weekly",
            role: "Safety Officer",
            summary: "A weekly audit to ensure all fire safety equipment is functional and evacuation routes are clear.",
            icon: "siren",
            tasks: [
                { id: "SEC-FS-01", description: "Physically check that all fire exit doors are unlocked and unobstructed from both sides.", priority: "High", riskLevel: "High", consequence: "Guests and staff trapped during a fire, leading to injury or death.", proof: "Photo log of checked exits.", location: "All Fire Exits" },
                { id: "SEC-FS-02", description: "Inspect a random sample of fire extinguishers for correct pressure and accessibility.", priority: "High", riskLevel: "High", consequence: "Inability to fight a small fire before it spreads.", proof: "Extinguisher inspection checklist.", location: "Guest Corridors, BOH" },
                { id: "SEC-FS-03", description: "Test a different fire alarm call point each week to verify system functionality.", priority: "High", riskLevel: "High", consequence: "Delayed or failed alarm activation in an emergency.", proof: "Fire Alarm Test Log signed by Engineering.", location: "Varies weekly" },
                { id: "SEC-FS-04", description: "Ensure emergency lighting in stairwells and corridors is functional.", priority: "High", riskLevel: "Medium", consequence: "Panic and injury during evacuation in a power failure.", proof: "Emergency light test log.", location: "Evacuation Routes" },
                { id: "SEC-FS-05", description: "Verify that all fire evacuation plans are clearly posted and legible in guest rooms and common areas.", priority: "Medium", riskLevel: "Low", consequence: "Guest confusion during an evacuation.", proof: "Photo audit of posted plans.", location: "Guest Rooms, Lobbies" },
                { id: "SEC-FS-06", description: "Check sprinkler heads for any obstructions (e.g., decorations, stored items).", priority: "High", riskLevel: "High", consequence: "Sprinkler system failure during a fire.", proof: "Visual inspection.", location: "Guest Rooms, Common Areas" },
                { id: "SEC-FS-07", description: "Ensure kitchen fire suppression system (Ansul) is inspected and certified.", priority: "High", riskLevel: "High", consequence: "Failure to contain a kitchen fire, the most common type of hotel fire.", proof: "Certification tag on system.", location: "Kitchen" },
                { id: "SEC-FS-08", description: "Review log of last fire drill and note any corrective actions needed.", priority: "Medium", riskLevel: "Medium", consequence: "Repeating the same mistakes in a real emergency.", proof: "Fire drill report.", location: "Security Office" },
                { id: "SEC-FS-09", description: "Check that access to fire pump and riser rooms is clear.", priority: "High", riskLevel: "High", consequence: "Fire department cannot access critical equipment.", proof: "Photo of clear access path.", location: "MEP Rooms" },
                { id: "SEC-FS-10", description: "Verify that staff in key roles (e.g., Front Office, Security) are trained on their specific evacuation duties.", priority: "High", riskLevel: "Medium", consequence: "Disorganized evacuation leading to panic.", proof: "Review of training records.", location: "HR/Training" }
            ]
        },
        {
            title: "Preventive Maintenance - MEP Systems",
            department: "Engineering",
            frequency: "Monthly",
            role: "Chief Engineer",
            summary: "Scheduled maintenance for Mechanical, Electrical, and Plumbing systems to prevent failures and ensure guest comfort and safety.",
            icon: "wrench",
            tasks: [
                { id: "ENG-PM-01", description: "Inspect and clean HVAC filters for all major air handling units (AHUs).", priority: "Medium", riskLevel: "Low", consequence: "Poor air quality, increased energy consumption, system failure.", proof: "Maintenance log for each AHU.", location: "Plant Rooms" },
                { id: "ENG-PM-02", description: "Test the automatic transfer switch (ATS) for the backup generator.", priority: "High", riskLevel: "High", consequence: "Complete power loss during a utility outage, compromising all hotel systems.", proof: "Generator test run log.", location: "Generator Room" },
                { id: "ENG-PM-03", description: "Inspect and test sump pumps and drainage systems in basements and critical areas.", priority: "Medium", riskLevel: "High", consequence: "Flooding, water damage to critical equipment.", proof: "Pump test log.", location: "Basements, Pump Rooms" },
                { id: "ENG-PM-04", description: "Perform thermal imaging scan on main electrical panels to detect hotspots.", priority: "High", riskLevel: "High", consequence: "Electrical fire, catastrophic power failure.", proof: "Thermal imaging report.", location: "Electrical Rooms" },
                { id: "ENG-PM-05", description: "Check water pressure and test booster pumps.", priority: "Medium", riskLevel: "Low", consequence: "Poor water pressure in guest rooms, guest complaints.", proof: "Pump performance log.", location: "Pump Rooms" },
                { id: "ENG-PM-06", description: "Inspect elevators for smooth operation, safety features (e.g., phone), and valid certification.", priority: "High", riskLevel: "High", consequence: "Elevator entrapment, guest injury, legal non-compliance.", proof: "Elevator maintenance log and posted certificate.", location: "Elevator Machine Rooms" },
                { id: "ENG-PM-07", description: "Check boiler and hot water systems for leaks, pressure, and temperature.", priority: "High", riskLevel: "Medium", consequence: "No hot water for guests, potential for scalding or explosion.", proof: "Boiler room logbook.", location: "Boiler Room" },
                { id: "ENG-PM-08", description: "Inspect roof for leaks, damage, and clear drainage after any heavy rains.", priority: "Medium", riskLevel: "Medium", consequence: "Water damage to top-floor rooms and building structure.", proof: "Roof inspection report with photos.", location: "Rooftop" },
                { id: "ENG-PM-09", description: "Verify water treatment plant (WTP/STP) is functioning correctly and chemical levels are appropriate.", priority: "Medium", riskLevel: "Medium", consequence: "Environmental compliance issues, unsafe water.", proof: "WTP/STP logbook.", location: "Treatment Plant Area" },
                { id: "ENG-PM-10", description: "Review energy consumption data against benchmarks to identify anomalies.", priority: "Low", riskLevel: "Low", consequence: "Wasted energy, high utility costs.", proof: "Monthly utility bill analysis.", location: "Chief Engineer's Office" }
            ]
        },
        {
            title: "Swimming Pool & Spa Safety",
            department: "Recreation / Engineering",
            frequency: "Daily",
            role: "Pool Attendant",
            summary: "Ensures the pool and spa areas are safe, hygienic, and compliant with health regulations.",
            icon: "life-buoy",
            tasks: [
                { id: "REC-PS-01", description: "Test and record water quality (pH, chlorine/bromine levels) three times daily.", priority: "High", riskLevel: "High", consequence: "Skin/eye irritation, spread of waterborne illness, health dept. closure.", proof: "Water quality logbook.", location: "Poolside" },
                { id: "REC-PS-02", description: "Ensure all safety equipment (life rings, shepherd's crook) is present and accessible.", priority: "High", riskLevel: "High", consequence: "Inability to perform a rescue, leading to drowning.", proof: "Daily safety equipment checklist.", location: "Poolside" },
                { id: "REC-PS-03", description: "Verify all pool drain covers are intact and secure to prevent entrapment.", priority: "High", riskLevel: "High", consequence: "Severe injury or drowning due to suction entrapment.", proof: "Visual inspection log with photo.", location: "Pool Deck" },
                { id: "REC-PS-04", description: "Check that all depth markings and safety signage are clearly visible.", priority: "Medium", riskLevel: "Medium", consequence: "Guest misjudging depth, leading to diving accidents.", proof: "Daily visual check.", location: "Pool Area" },
                { id: "REC-PS-05", description: "Ensure pool deck is clean, free of slip hazards, and furniture is in good repair.", priority: "Medium", riskLevel: "Medium", consequence: "Slip and fall injuries, guest lawsuits.", proof: "Hourly attendant rounds log.", location: "Pool Deck" },
                { id: "REC-PS-06", description: "Confirm emergency phone or alarm at the poolside is functional.", priority: "High", riskLevel: "High", consequence: "Delayed response in a medical emergency.", proof: "Daily test call log.", location: "Poolside" },
                { id: "REC-PS-07", description: "Check spa/hot tub temperatures to ensure they are within safe limits (typically max 104°F/40°C).", priority: "High", riskLevel: "High", consequence: "Risk of hyperthermia, health risks for certain guests.", proof: "Temperature log.", location: "Spa Area" },
                { id: "REC-PS-08", description: "Ensure gate to pool area is self-closing and self-latching.", priority: "High", riskLevel: "High", consequence: "Unsupervised access by children, leading to drowning risk.", proof: "Video of gate function test.", location: "Pool Entrance" },
                { id: "REC-PS-09", description: "Verify chemical storage area is locked, secure, and well-ventilated.", priority: "High", riskLevel: "Medium", consequence: "Chemical spills, unauthorized access, toxic fumes.", proof: "Photo of secured chemical store.", location: "Chemical Storage" },
                { id: "REC-PS-10", description: "Log all incidents, no matter how minor, in the pool incident report book.", priority: "Medium", riskLevel: "Medium", consequence: "Failure to identify recurring safety issues, legal liability.", proof: "Incident report book.", location: "Pool Office" }
            ]
        },
        {
            title: "Security - Daily Shift Briefing & Patrols",
            department: "Security",
            frequency: "Per Shift",
            role: "Security Supervisor",
            summary: "Ensures the security team is briefed, patrols are conducted, and all incidents are properly logged.",
            icon: "shield",
            tasks: [
                { id: "SEC-DB-01", description: "Conduct shift briefing covering previous shift's incidents, VIP movements, and areas of concern.", priority: "High", riskLevel: "Low", consequence: "Lack of situational awareness for incoming shift.", proof: "Shift briefing log.", location: "Security Office" },
                { id: "SEC-DB-02", description: "Verify all security personnel are present, in proper uniform, and equipped (radio, flashlight).", priority: "Medium", riskLevel: "Low", consequence: "Understaffing, unprofessional appearance.", proof: "Duty roster sign-in sheet.", location: "Security Office" },
                { id: "SEC-DB-03", description: "Review CCTV footage for any suspicious activity from the last 24 hours.", priority: "Medium", riskLevel: "Medium", consequence: "Missed security breaches or incidents.", proof: "CCTV review log.", location: "CCTV Control Room" },
                { id: "SEC-DB-04", description: "Ensure all security patrols are completed as per the designated routes and schedule.", priority: "High", riskLevel: "Medium", consequence: "Gaps in security coverage, increased risk of intrusion.", proof: "Patrol log or digital patrol tracking system report.", location: "All Patrol Routes" },
                { id: "SEC-DB-05", description: "Log all incidents, observations, and actions taken during the shift in the security logbook.", priority: "High", riskLevel: "High", consequence: "Poor documentation for investigations, legal liability.", proof: "Security logbook entries.", location: "Security Office" },
                { id: "SEC-DB-06", description: "Test a random duress/panic alarm to ensure it functions and is responded to correctly.", priority: "High", riskLevel: "Medium", consequence: "System failure during a real emergency.", proof: "Alarm test log.", location: "Varies" },
                { id: "SEC-DB-07", description: "Inspect perimeter fencing and lighting for any breaches or dark spots.", priority: "Medium", riskLevel: "Medium", consequence: "Easy access for intruders.", proof: "Perimeter patrol log.", location: "Hotel Perimeter" },
                { id: "SEC-DB-08", description: "Verify that all restricted areas are secure and access control systems are working.", priority: "High", riskLevel: "Medium", consequence: "Unauthorized access to sensitive areas like cash rooms or server rooms.", proof: "Access control system logs.", location: "Restricted Areas" },
                { id: "SEC-DB-09", description: "Check parking area for any abandoned vehicles or suspicious activity.", priority: "Low", riskLevel: "Low", consequence: "Vehicle theft, potential security threats.", proof: "Parking patrol log.", location: "Parking Area" },
                { id: "SEC-DB-10", description: "At end of shift, conduct a thorough handover with the next shift supervisor.", priority: "High", riskLevel: "Low", consequence: "Critical information lost between shifts.", proof: "Signed handover document.", location: "Security Office" }
            ]
        },
        {
            title: "Guest Complaint & Service Recovery",
            department: "Guest Relations",
            frequency: "Per Incident",
            role: "Duty Manager / GR Executive",
            summary: "A structured process to handle guest complaints effectively, turning negative experiences into opportunities for loyalty.",
            icon: "smile-plus",
            tasks: [
                { id: "GR-SR-01", description: "Listen actively to the guest's complaint without interruption (L.A.S.T. - Listen, Apologize, Solve, Thank).", priority: "High", riskLevel: "High", consequence: "Escalation of guest anger, negative online review.", proof: "Complaint form with guest's statement.", location: "Guest Facing" },
                { id: "GR-SR-02", description: "Apologize sincerely for the service failure, regardless of fault.", priority: "High", riskLevel: "Low", consequence: "Guest feels unheard and defensive.", proof: "Manager's report on the incident.", location: "Guest Facing" },
                { id: "GR-SR-03", description: "Log the complaint in the guest feedback system with all details (guest name, room, date, issue).", priority: "High", riskLevel: "Medium", consequence: "Failure to track recurring issues, no data for improvement.", proof: "Entry in PMS or guest feedback software.", location: "Front Office" },
                { id: "GR-SR-04", description: "Empower front-line staff to resolve minor issues immediately with a pre-approved service recovery toolkit (e.g., room change, complimentary drink).", priority: "High", riskLevel: "Medium", consequence: "Slow resolution, guest frustration.", proof: "Service recovery log.", location: "Guest Facing" },
                { id: "GR-SR-05", description: "For major issues, inform the department head and General Manager immediately.", priority: "High", riskLevel: "High", consequence: "Lack of senior management awareness of critical issues.", proof: "Email or message log to senior management.", location: "Office" },
                { id: "GR-SR-06", description: "Follow up with the guest within a specified timeframe (e.g., 30 minutes) to confirm the solution is satisfactory.", priority: "High", riskLevel: "Medium", consequence: "Guest feels forgotten after the initial complaint.", proof: "Log of follow-up call/visit in PMS.", location: "Guest Facing" },
                { id: "GR-SR-07", description: "Document the resolution and any compensation offered in the guest's profile.", priority: "Medium", riskLevel: "Medium", consequence: "Inconsistent compensation, lack of history for future stays.", proof: "Updated guest profile in PMS.", location: "Office" },
                { id: "GR-SR-08", description: "Analyze complaint data weekly to identify trends and root causes.", priority: "Medium", riskLevel: "Low", consequence: "Repeated service failures, failure to make systemic improvements.", proof: "Weekly guest complaint analysis report.", location: "Manager's Meeting" },
                { id: "GR-SR-09", description: "Thank the guest for their feedback and for giving you the opportunity to correct the issue.", priority: "High", riskLevel: "Low", consequence: "Guest leaves feeling like a transaction, not a valued person.", proof: "Manager's final follow-up note.", location: "Guest Facing" },
                { id: "GR-SR-10", description: "Share learnings from significant service failures with the entire team for training purposes.", priority: "Medium", riskLevel: "Low", consequence: "The organization does not learn from its mistakes.", proof: "Minutes of team briefing or training session.", location: "Departmental Meeting" }
            ]
        }
    ]
};

const restaurants: PremiumPack = {
    id: 'restaurants',
    title: "Restaurant Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/ee481c02-cd85-430b-bc21-7a574bfea0cb',
    category: "Hospitality",
    description: "An essential HACCP-based toolkit for restaurant owners focused on food safety, quality, and operational efficiency.",
    icon: "utensils",
    badgeText: "Essential for F&B",
    badgeVariant: "accent",
    whoIsItFor: ["Restaurant Owners", "Head Chefs", "Kitchen Managers", "F&B Directors", "VPs", "GMs", "Directors"],
    sampleItems: [
        { text: "Prevent foodborne illness with kitchen opening & closing hygiene protocols (HACCP).", icon: "shield-check" },
        { text: "Protect your inventory from spoilage with rigorous cold chain and temperature monitoring.", icon: "thermometer" },
        { text: "Safeguard guests with a robust allergen management and menu labeling system.", icon: "file-warning" },
        { text: "Maintain a spotless, pest-free environment with auditable waste segregation and pest control logs.", icon: "bug" },
        { text: "Build a professional team through verifiable staff hygiene and training protocols.", icon: "user-check" },
        { text: "Guarantee food quality from the source with a stringent raw material receiving and QC process.", icon: "package-check" }
    ],
    checklists: [
        {
            title: "Kitchen Opening Checklist",
            department: "F&B",
            frequency: "Daily",
            role: "Head Chef",
            summary: "Ensures the kitchen is safe, sanitary, and ready for service, complying with HACCP principles.",
            icon: "clipboard-check",
            tasks: [
                { id: "KO-01", description: "Check and log temperatures of all refrigerators and freezers.", priority: "High", riskLevel: "High", consequence: "Failure can lead to bacterial growth and foodborne illness outbreaks.", proof: "Temp Log" },
                { id: "KO-02", description: "Ensure separate cutting boards and utensils are used for veg/non-veg prep.", priority: "High", riskLevel: "High", consequence: "Prevents cross-contamination, which can cause severe allergic reactions or food poisoning.", proof: "Visual Audit" },
                { id: "KO-03", description: "Verify all cleaning chemical bottles are correctly labeled.", priority: "High", riskLevel: "Medium", consequence: "Prevents accidental chemical contamination of food, which can be toxic.", proof: "Visual Check" },
                { id: "KO-04", description: "Check that all equipment safety guards are in place and functional.", priority: "High", riskLevel: "High", consequence: "Missing guards can lead to severe injuries, amputations, and regulatory fines.", proof: "Equipment Check Log" },
                { id: "KO-05", description: "Ensure handwash stations are stocked with soap and sanitizer.", priority: "High", riskLevel: "Medium", consequence: "Lack of hand hygiene is a primary cause of foodborne illness transmission.", proof: "Visual Check" },
                { id: "KO-06", description: "Calibrate food thermometers.", priority: "High", riskLevel: "High", consequence: "Inaccurate readings can lead to serving undercooked, unsafe food.", proof: "Calibration Log" },
                { id: "KO-07", description: "Check that exhaust hoods and ventilation are working.", priority: "High", riskLevel: "Medium", consequence: "Poor ventilation is a fire risk and creates an unsafe working environment.", proof: "System Check" },
                { id: "KO-08", description: "Ensure first aid kit is stocked.", priority: "High", riskLevel: "Medium", consequence: "Inability to treat common kitchen injuries like cuts and burns.", proof: "First Aid Kit Log" },
                { id: "KO-09", description: "Check that the fire suppression system is armed and ready.", priority: "High", riskLevel: "High", consequence: "A failed system can lead to a catastrophic kitchen fire.", proof: "System Check" },
                { id: "KO-10", description: "Brief the kitchen team on the day's menu and any specials.", priority: "Medium", riskLevel: "Low", consequence: "Lack of communication leads to inconsistency and errors during service.", proof: "Briefing Notes" }
            ]
        },
        {
            title: "Cold Storage Monitoring SOP",
            department: "F&B",
            frequency: "Daily",
            role: "Kitchen Manager",
            summary: "Ensures all incoming food is safe, from approved suppliers, and stored correctly.",
            icon: "thermometer",
            tasks: [
                { id: "CSM-01", description: "Log cold storage temperatures twice daily.", priority: "High", riskLevel: "High", consequence: "Failure to monitor can lead to thousands of dollars in spoiled inventory.", proof: "Temperature Log" },
                { id: "CSM-02", description: "Verify digital logs if available.", priority: "High", riskLevel: "High", consequence: "Provides a continuous record and helps identify intermittent faults.", proof: "Digital Log Review" },
                { id: "CSM-03", description: "Test temperature alarms weekly.", priority: "High", riskLevel: "High", consequence: "A non-functional alarm means a temperature failure overnight goes unnoticed.", proof: "Alarm Test Log" },
                { id: "CSM-04", description: "Follow escalation procedure for any temperature deviations.", priority: "High", riskLevel: "High", consequence: "A slow response can result in the loss of all stock in the unit.", proof: "Incident Report" },
                { id: "CSM-05", description: "Check for any signs of frost buildup or door seal damage.", priority: "Medium", riskLevel: "Medium", consequence: "Indicates poor efficiency and potential temperature problems.", proof: "Visual Inspection Log" },
                { id: "CSM-06", description: "Ensure cold storage units are clean and organized.", priority: "High", riskLevel: "Medium", consequence: "Disorganization can lead to cross-contamination and wasted food.", proof: "Cleaning Log" },
                { id: "CSM-07", description: "Keep raw and cooked foods stored separately.", priority: "High", riskLevel: "High", consequence: "A primary cause of bacterial cross-contamination.", proof: "Storage Audit" },
                { id: "CSM-08", description: "Ensure all items are labeled with date of receipt.", priority: "High", riskLevel: "Medium", consequence: "Makes it impossible to follow FIFO and increases spoilage.", proof: "Labeling Audit" },
                { id: "CSM-09", description: "Do not overload shelves to allow for proper air circulation.", priority: "High", riskLevel: "Medium", consequence: "Overloading creates hot spots where food can spoil.", proof: "Visual Check" },
                { id: "CSM-10", description: "Report any maintenance issues with the units immediately.", priority: "High", riskLevel: "High", consequence: "Delaying repairs can lead to complete equipment failure.", proof: "Maintenance Request" }
            ]
        },
        {
            title: "Allergen & Special Diet Order Flow",
            department: "Service/Kitchen",
            frequency: "Per Order",
            role: "Server/Chef",
            summary: "A system to prevent cross-contamination and ensure accurate communication of allergens to guests.",
            icon: "file-warning",
            tasks: [
                { id: "ALLERGEN-01", description: "Server to clearly flag allergy on the order ticket (KOT).", priority: "High", riskLevel: "High", consequence: "If the kitchen is not alerted, no special precautions will be taken.", proof: "KOT with Allergy Flag" },
                { id: "ALLERGEN-02", description: "Chef to use designated, sanitized utensils and a separate prep area for the allergy order.", priority: "High", riskLevel: "High", consequence: "Cross-contamination is a primary cause of allergic reactions in restaurants.", proof: "CCTV/Visual Check" },
                { id: "ALLERGEN-03", description: "Manager to double-check the special diet plate against the ticket before it leaves the kitchen.", priority: "High", riskLevel: "High", consequence: "Provides a final, critical safety check to catch any errors.", proof: "Dispatch Log" },
                { id: "ALLERGEN-04", description: "Maintain an up-to-date allergen matrix for all menu items and share with service staff.", priority: "High", riskLevel: "High", consequence: "Servers giving incorrect information to guests can have fatal consequences.", proof: "Allergen Matrix Document" },
                { id: "ALLERGEN-05", description: "Server verbally confirms the special meal with the guest upon delivery to the table.", priority: "High", riskLevel: "High", consequence: "Ensures the correct person receives the specially prepared meal.", proof: "Verbal Confirmation Protocol" },
                { id: "ALLERGEN-06", description: "Change gloves and wash hands before and after handling an allergen-free order.", priority: "High", riskLevel: "High", consequence: "Prevents transfer of allergens from other dishes.", proof: "CCTV/Supervisor Audit" },
                { id: "ALLERGEN-07", description: "Use a special plate or marker for allergy-safe dishes.", priority: "High", riskLevel: "Medium", consequence: "Provides a clear visual cue to all staff and the guest.", proof: "Special Plate Photo" },
                { id: "ALLERGEN-08", description: "Train all FOH and BOH staff on the severity of food allergies.", priority: "High", riskLevel: "High", consequence: "Lack of training leads to a casual attitude and dangerous mistakes.", proof: "Training Log" },
                { id: "ALLERGEN-09", description: "If unsure about an ingredient, always assume it contains the allergen and inform the guest.", priority: "High", riskLevel: "High", consequence: "Guessing can be fatal. The 'if in doubt, leave it out' rule is paramount.", proof: "Policy Document" },
                { id: "ALLERGEN-10", description: "Document any incidents related to allergies for review.", priority: "High", riskLevel: "High", consequence: "Failure to learn from near-misses will eventually lead to a major incident.", proof: "Incident Report" }
            ]
        },
        {
            title: "Sanitation & Deep-Clean Schedule",
            department: "Hygiene",
            frequency: "Daily/Weekly",
            role: "Hygiene Supervisor",
            summary: "Ensures the dining area is perfectly set, staff are briefed, and all financial procedures are followed.",
            icon: "sparkles",
            tasks: [
                { id: "SANIT-01", description: "Log completion of daily surface sanitization.", priority: "High", riskLevel: "High", consequence: "Buildup of bacteria on surfaces can lead to cross-contamination.", proof: "Daily Cleaning Log" },
                { id: "SANIT-02", description: "Perform and log weekly deep clean of kitchen hoods and ducts.", priority: "High", riskLevel: "High", consequence: "Grease buildup in hoods is a major fire hazard.", proof: "Weekly Deep Clean Log" },
                { id: "SANIT-03", description: "Review and file monthly pest control vendor report.", priority: "High", riskLevel: "High", consequence: "Pest infestations can lead to closure by health authorities and massive brand damage.", proof: "Vendor Report" },
                { id: "SANIT-04", description: "Check and clean grease traps weekly.", priority: "High", riskLevel: "Medium", consequence: "Blocked grease traps can cause foul odors and drainage blockages.", proof: "Grease Trap Log" },
                { id: "SANIT-05", description: "Ensure waste bins are emptied and sanitized daily.", priority: "High", riskLevel: "Medium", consequence: "Overflowing bins attract pests and create unsanitary conditions.", proof: "Waste Management Log" },
                { id: "SANIT-06", description: "Sanitize all food contact surfaces between tasks.", priority: "High", riskLevel: "High", consequence: "Prevents cross-contamination between different food types.", proof: "Visual Audit" },
                { id: "SANIT-07", description: "Deep clean floors and drains weekly.", priority: "High", riskLevel: "Medium", consequence: "Dirty floors and drains can harbor bacteria and attract pests.", proof: "Floor Cleaning Log" },
                { id: "SANIT-08", description: "Clean and descale dishwashers monthly.", priority: "High", riskLevel: "Medium", consequence: "Ensures dishes are being sanitized at the correct temperature.", proof: "Dishwasher Log" },
                { id: "SANIT-09", description: "Check that cleaning chemicals are stored safely and correctly.", priority: "High", riskLevel: "High", consequence: "Improper storage can lead to chemical contamination of food.", proof: "Chemical Store Audit" },
                { id: "SANIT-10", description: "Train staff on correct cleaning procedures and chemical use.", priority: "High", riskLevel: "High", consequence: "Improper use of chemicals can be ineffective or dangerous.", proof: "Training Log" }
            ]
        },
        {
            title: "Service Incident Procedure",
            department: "Management",
            frequency: "Per Incident",
            role: "Restaurant Manager",
            summary: "Turns negative experiences into positive ones using the L.A.S.T. method (Listen, Apologize, Solve, Thank).",
            icon: "smile-plus",
            tasks: [
                { id: "INC-REST-01", description: "Document customer complaint in the incident log.", priority: "High", riskLevel: "High", consequence: "Lack of documentation makes it impossible to track trends or defend against legal claims.", proof: "Incident Log" },
                { id: "INC-REST-02", description: "Quarantine and label any suspected contaminated food batch.", priority: "High", riskLevel: "High", consequence: "Failure to quarantine can lead to more customers being affected.", proof: "Quarantine Log & Photo" },
                { id: "INC-REST-03", description: "Notify the local health authority if the incident is severe (e.g., multiple cases of food poisoning).", priority: "High", riskLevel: "High", consequence: "Failure to report can lead to severe legal penalties.", proof: "Notification Record" },
                { id: "INC-REST-04", description: "Offer a resolution to the guest (e.g., refund, complimentary meal) and document it.", priority: "High", riskLevel: "Medium", consequence: "Poor handling of the complaint can escalate the situation.", proof: "Guest Resolution Log" },
                { id: "INC-REST-05", description: "Conduct a root cause analysis of the incident with the kitchen team.", priority: "High", riskLevel: "High", consequence: "Without RCA, the same mistake is likely to happen again.", proof: "RCA Report" },
                { id: "INC-REST-06", description: "Collect contact information from the affected guest for follow-up.", priority: "High", riskLevel: "High", consequence: "Shows accountability and allows for follow-up communication.", proof: "Contact Form" },
                { id: "INC-REST-07", description: "Preserve any food samples for testing if necessary.", priority: "High", riskLevel: "High", consequence: "Crucial evidence for determining the cause of the incident.", proof: "Sample Log" },
                { id: "INC-REST-08", description: "Interview all staff involved in the incident.", priority: "High", riskLevel: "High", consequence: "Helps to understand the sequence of events and identify process gaps.", proof: "Interview Notes" },
                { id: "INC-REST-09", description: "Implement corrective actions to prevent recurrence.", priority: "High", riskLevel: "High", consequence: "Turns a negative incident into a process improvement opportunity.", proof: "CAPA Plan" },
                { id: "INC-REST-10", description: "Review similar incidents to identify trends.", priority: "Medium", riskLevel: "Medium", consequence: "Helps to identify and fix systemic problems.", proof: "Trend Analysis Report" }
            ]
        },
         {
            title: "Raw Material Receiving",
            department: "Stores/Kitchen",
            frequency: "Per Delivery",
            role: "Storekeeper",
            summary: "A strict protocol for accepting deliveries to ensure only safe, high-quality ingredients enter the kitchen.",
            icon: "package-check",
            tasks: [
                { id: "RM-01", description: "Verify vendor FSSAI license is valid.", priority: "High", riskLevel: "High", consequence: "Using ingredients from an unlicensed vendor is a major legal violation.", proof: "Vendor File" },
                { id: "RM-02", description: "Inspect delivery vehicle for cleanliness and temperature control.", priority: "High", riskLevel: "High", consequence: "A dirty or warm truck can contaminate the entire delivery.", proof: "Vehicle Inspection Log" },
                { id: "RM-03", description: "Check temperature of perishable goods upon arrival.", priority: "High", riskLevel: "High", consequence: "Accepting goods outside the safe temperature range is a major food safety risk.", proof: "Temperature Log" },
                { id: "RM-04", description: "Reject and document any items that do not meet quality standards.", priority: "High", riskLevel: "High", consequence: "Accepting sub-par ingredients leads to a sub-par final product.", proof: "Rejection Note" },
                { id: "RM-05", description: "Ensure goods are moved to appropriate storage immediately after receipt.", priority: "High", riskLevel: "Medium", consequence: "Leaving perishable items in the 'danger zone' allows bacteria to grow.", proof: "CCTV review" },
                { id: "RM-06", description: "Check for signs of pests in packaging.", priority: "High", riskLevel: "High", consequence: "Can introduce a pest infestation into your facility.", proof: "Visual Inspection Log" },
                { id: "RM-07", description: "Verify that packaging is intact and not damaged.", priority: "High", riskLevel: "High", consequence: "Damaged packaging can lead to contamination.", proof: "Visual Check" },
                { id: "RM-08", description: "Match the delivery challan with the purchase order.", priority: "High", riskLevel: "High", consequence: "Prevents incorrect deliveries and billing errors.", proof: "Document Match" },
                { id: "RM-09", description: "Check the 'best before' or expiry dates of all products.", priority: "High", riskLevel: "High", consequence: "Accepting near-expiry goods leads to waste and potential safety issues.", proof: "Date Check Log" },
                { id: "RM-10", description: "Record all received goods in the inventory system.", priority: "High", riskLevel: "High", consequence: "Inaccurate receiving leads to incorrect inventory levels.", proof: "System Entry" }
            ]
        },
        {
            title: "Staff Hygiene & Training",
            department: "HR/Hygiene",
            frequency: "Ongoing",
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
        },
        {
            title: "Waste Management & Pest Control",
            department: "Hygiene",
            frequency: "Daily/Weekly",
            role: "Supervisor",
            summary: "A systematic approach to waste management to prevent pest infestations and maintain a clean environment.",
            icon: "bug",
            tasks: [
                { id: "WP-01", description: "Ensure waste is segregated into designated bins (wet, dry, recyclable).", priority: "High", riskLevel: "Medium", consequence: "Required by law in many areas and better for the environment.", proof: "Waste Segregation Audit" },
                { id: "WP-02", description: "Follow a schedule for cleaning and sanitizing all waste bins.", priority: "High", riskLevel: "Medium", consequence: "Dirty bins attract pests and create foul odors.", proof: "Bin Cleaning Log" },
                { id: "WP-03", description: "Inspect pest control traps and bait stations weekly.", priority: "High", riskLevel: "High", consequence: "Allows for early detection of pest activity.", proof: "Pest Trap Log" },
                { id: "WP-04", description: "Review and file the monthly service report from the pest control vendor.", priority: "High", riskLevel: "High", consequence: "Provides a professional assessment and is crucial for health audits.", proof: "Vendor Report" },
                { id: "WP-05", description: "Keep external waste area clean to deter pests.", priority: "High", riskLevel: "High", consequence: "An overflowing external bin is an open invitation for rodents and flies.", proof: "Photo Log" },
                { id: "WP-06", description: "Ensure all drains are clean and free-flowing.", priority: "High", riskLevel: "Medium", consequence: "Blocked drains can harbor bacteria and create pest breeding grounds.", proof: "Drain Cleaning Log" },
                { id: "WP-07", description: "Check for any signs of pest activity (droppings, gnaw marks).", priority: "High", riskLevel: "High", consequence: "Early detection is key to preventing a full-blown infestation.", proof: "Pest Activity Log" },
                { id: "WP-08", description: "Ensure all doors and windows are properly sealed to prevent pest entry.", priority: "High", riskLevel: "High", consequence: "Prevents pests from entering the premises.", proof: "Structural Audit" },
                { id: "WP-09", description: "Train staff on pest awareness and reporting.", priority: "Medium", riskLevel: "Medium", consequence: "Staff are the first line of defense in spotting pest issues.", proof: "Training Log" },
                { id: "WP-10", description: "Dispose of waste in a timely manner to avoid accumulation.", priority: "High", riskLevel: "High", consequence: "Accumulated waste is a primary attractant for pests.", proof: "Waste Disposal Log" }
            ]
        },
        {
            title: "Closing & End-of-Day Procedure",
            department: "Management",
            frequency: "Daily",
            role: "Closing Manager",
            summary: "A checklist to ensure the restaurant is securely closed and ready for the next day.",
            icon: "lock",
            tasks: [
                { id: "EOD-01", description: "Reconcile all cash, card, and digital payments against POS sales.", priority: "High", riskLevel: "High", consequence: "Failure to reconcile can hide theft or major accounting errors.", proof: "Sales Reconciliation Report" },
                { id: "EOD-02", description: "Ensure all kitchen equipment is properly shut down and cleaned.", priority: "High", riskLevel: "High", consequence: "Leaving equipment on overnight is a fire hazard and wastes energy.", proof: "Kitchen Closing Checklist" },
                { id: "EOD-03", description: "Verify that the main gas line to the kitchen is turned off.", priority: "High", riskLevel: "High", consequence: "A gas leak overnight can lead to a catastrophic explosion.", proof: "Gas Valve Check Log" },
                { id: "EOD-04", description: "Secure all doors and windows, and activate the security alarm.", priority: "High", riskLevel: "High", consequence: "Leaving the premises unsecured is an open invitation for burglary.", proof: "Security Log" },
                { id: "EOD-05", description: "Complete the manager's closing report, noting any incidents or issues.", priority: "High", riskLevel: "Medium", consequence: "Loses valuable information for the next day's team.", proof: "Manager Logbook" },
                { id: "EOD-06", description: "Store all perishable food items correctly.", priority: "High", riskLevel: "High", consequence: "Improper storage leads to spoilage and waste.", proof: "Storage Check" },
                { id: "EOD-07", description: "Empty all trash cans and clean the waste area.", priority: "High", riskLevel: "Medium", consequence: "Prevents overnight pest activity and odors.", proof: "Waste Area Log" },
                { id: "EOD-08", description: "Turn off all non-essential lights and electronics.", priority: "High", riskLevel: "Low", consequence: "Wastes energy and increases utility costs.", proof: "Visual Check" },
                { id: "EOD-09", description: "Lock up all alcoholic beverages.", priority: "High", riskLevel: "High", consequence: "Prevents theft of high-value liquor stock.", proof: "Liquor Storage Log" },
                { id: "EOD-10", description: "Check that all restrooms are clean and stocked for the next day.", priority: "Medium", riskLevel: "Low", consequence: "Ensures the restaurant is ready for the first customers of the day.", proof: "Restroom Check" }
            ]
        }
    ]
};

const fashion_and_apparel_retail: PremiumPack = {
    id: 'fashion_and_apparel_retail',
    title: "Fashion & Apparel Retail Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/35c743f7-333a-4fe6-9866-3334172e144b',
    category: "Retail",
    description: "A specialized toolkit for fashion retailers to manage seasonal inventory, optimize visual merchandising, and prevent shrinkage.",
    icon: "shirt",
    badgeText: "New!",
    badgeVariant: "accent",
    whoIsItFor: ["Fashion Retail Owners", "Store Managers", "Merchandisers", "Heads of Retail", "Head of Visual Merchandising", "COO"],
    sampleItems: [
        { text: "Streamline inventory turnover with a seasonal stock & markdown management system.", icon: "recycle" },
        { text: "Create stunning, brand-aligned stores with visual merchandising and display audits.", icon: "gallery-vertical" },
        { text: "Reduce theft with secure fitting room operations and security protocols.", icon: "door-closed" },
        { text: "Master modern retail with seamless omni-channel operations (Click-and-Collect, Returns).", icon: "link" },
        { text: "Protect your assets through rigorous store safety and loss prevention audits.", icon: "shield" },
        { text: "Ensure financial accuracy with daily cash handling and POS reconciliation procedures.", icon: "banknote" }
    ],
    checklists: [
        {
            title: "Opening Checklist",
            department: "Operations",
            frequency: "Daily",
            role: "Store Manager",
            summary: "Ensures the store is ready for customers and operations.",
            icon: "clipboard-check",
            tasks: [
                { id: "FA-OPEN-01", description: "Boot up POS systems and verify connectivity.", priority: "High", riskLevel: "Medium", consequence: "Inability to process sales at opening, leading to customer frustration and lost revenue.", proof: "POS Login Screen" },
                { id: "FA-OPEN-02", description: "Verify and log the opening cash float.", priority: "High", riskLevel: "High", consequence: "Can lead to cash discrepancies and makes it difficult to track theft or errors.", proof: "Float Log" },
                { id: "FA-OPEN-03", description: "Check CCTV system is recording and all cameras are operational.", priority: "High", riskLevel: "High", consequence: "A non-functional camera creates a security blind spot, making the store vulnerable to theft and providing no evidence for incidents.", proof: "CCTV Monitor" },
                { id: "FA-OPEN-04", description: "Check store displays against the current Visual Merchandising planogram.", priority: "High", riskLevel: "Low", consequence: "Inconsistent branding and missed promotional opportunities, leading to lower sales.", proof: "Visual Check" },
                { id: "FA-OPEN-05", description: "Ensure fitting rooms are clean and clear of merchandise.", priority: "High", riskLevel: "Medium", consequence: "A messy fitting room creates a poor customer experience and can be a hiding place for stolen items.", proof: "Visual Check" },
                { id: "FA-OPEN-06", description: "Turn on all lights and music.", priority: "Medium", riskLevel: "Low", consequence: "A dark or silent store is uninviting to customers.", proof: "Visual Check" },
                { id: "FA-OPEN-07", description: "Ensure all staff are in position for store opening.", priority: "High", riskLevel: "Low", consequence: "Lack of staff on the floor leads to poor customer service at opening.", proof: "Staff Roster Check" },
                { id: "FA-OPEN-08", description: "Brief staff on daily targets and promotions.", priority: "High", riskLevel: "Medium", consequence: "Uninformed staff cannot effectively sell promotions or work towards targets.", proof: "Briefing Notes" },
                { id: "FA-OPEN-09", description: "Check that all signage is correct and in place.", priority: "High", riskLevel: "Medium", consequence: "Incorrect pricing or promotional signs can lead to customer disputes.", proof: "Signage Audit" },
                { id: "FA-OPEN-10", description: "Unlock all necessary doors for customer access.", priority: "High", riskLevel: "High", consequence: "Failure to open on time leads to lost sales and customer frustration.", proof: "Physical Check" },
            ]
        },
        {
            title: "VM & Display Audit",
            department: "Merchandising",
            frequency: "Weekly",
            role: "Visual Merchandiser",
            summary: "Ensures store displays are attractive, on-brand, and effective at driving sales.",
            icon: "gallery-vertical",
            tasks: [
                { id: "VM-AUDIT-01", description: "Ensure all mannequins are styled according to the weekly VM guide.", priority: "High", riskLevel: "Low", consequence: "Poor styling makes the product look unappealing and hurts sales.", proof: "Photo of Mannequins" },
                { id: "VM-AUDIT-02", description: "Check all display lighting is functional and correctly focused.", priority: "High", riskLevel: "Medium", consequence: "Poor lighting can make expensive merchandise look cheap.", proof: "Lighting Audit" },
                { id: "VM-AUDIT-03", description: "Verify all promotional and price signage is accurate and in good condition.", priority: "High", riskLevel: "Medium", consequence: "Incorrect prices lead to customer disputes and legal compliance issues.", proof: "Signage Check" },
                { id: "VM-AUDIT-04", description: "Inspect all fixtures for safety, ensuring no loose parts or sharp edges.", priority: "High", riskLevel: "High", consequence: "A broken fixture can cause injury to a customer or staff member, leading to a lawsuit.", proof: "Fixture Safety Log" },
                { id: "VM-AUDIT-05", description: "Ensure window displays are clean and compelling.", priority: "High", riskLevel: "Low", consequence: "The window display is the store's primary advertisement; a poor display loses customers.", proof: "Photo of Window" },
                { id: "VM-AUDIT-06", description: "Check that merchandise is folded or hung correctly.", priority: "High", riskLevel: "Low", consequence: "A messy store looks unprofessional and makes it hard for customers to shop.", proof: "Visual Check" },
                { id: "VM-AUDIT-07", description: "Ensure sizing information is clearly visible.", priority: "High", riskLevel: "Low", consequence: "Customers get frustrated if they cannot easily find their size.", proof: "Sizing Check" },
                { id: "VM-AUDIT-08", description: "Replenish stock on displays as needed.", priority: "High", riskLevel: "Medium", consequence: "Empty displays mean lost sales opportunities.", proof: "Replenishment Log" },
                { id: "VM-AUDIT-09", description: "Rotate displays to keep the store looking fresh.", priority: "Medium", riskLevel: "Low", consequence: "A static store layout becomes boring for regular customers.", proof: "Rotation Schedule" },
                { id: "VM-AUDIT-10", description: "Get feedback from the store manager on the displays.", priority: "Medium", riskLevel: "Low", consequence: "Missed opportunity to align VM efforts with sales data and store traffic.", proof: "Feedback Form" },
            ]
        },
        {
            title: "Inventory Reconciliation SOP",
            department: "Inventory",
            frequency: "Scheduled",
            role: "Inventory Manager",
            summary: "A systematic process to ensure inventory accuracy and minimize shrinkage.",
            icon: "clipboard-check",
            tasks: [
                { id: "INV-RECON-01", description: "Perform daily cycle counts on designated high-value items.", priority: "High", riskLevel: "High", consequence: "Failure to count high-value items daily can allow major theft to go unnoticed for weeks.", proof: "Daily Count Sheet" },
                { id: "INV-RECON-02", description: "Conduct scheduled weekly cycle counts for other categories.", priority: "High", riskLevel: "Medium", consequence: "Less frequent counts lead to larger discrepancies and harder investigations.", proof: "Weekly Count Sheet" },
                { id: "INV-RECON-03", description: "Investigate any count variances within 24 hours.", priority: "High", riskLevel: "High", consequence: "The longer the delay, the harder it is to find the root cause of the discrepancy (theft, damage, or mis-shipment).", proof: "Variance Report" },
                { id: "INV-RECON-04", description: "Process inventory adjustments only with supervisor sign-off.", priority: "High", riskLevel: "High", consequence: "Unauthorized adjustments can be used to cover up theft.", proof: "Signed Adjustment Form" },
                { id: "INV-RECON-05", description: "Analyze shrinkage report monthly to identify trends.", priority: "High", riskLevel: "High", consequence: "Without analysis, you cannot identify patterns of theft or process errors to fix them.", proof: "Shrinkage Analysis" },
                { id: "INV-RECON-06", description: "Conduct a full stock take bi-annually.", priority: "High", riskLevel: "High", consequence: "A necessary step for accurate financial reporting and identifying systemic issues.", proof: "Stock Take Report" },
                { id: "INV-RECON-07", description: "Reconcile physical stock with system stock after a full count.", priority: "High", riskLevel: "High", consequence: "The final step to ensure inventory data is accurate for financial accounting.", proof: "Reconciliation Report" },
                { id: "INV-RECON-08", description: "Implement corrective actions to address shrinkage issues.", priority: "High", riskLevel: "High", consequence: "Identified problems will persist and continue to cause losses.", proof: "CAPA Plan" },
                { id: "INV-RECON-09", description: "Train staff on correct inventory handling procedures.", priority: "High", riskLevel: "Medium", consequence: "Untrained staff are a major source of inventory errors.", proof: "Training Log" },
                { id: "INV-RECON-10", description: "Secure the stockroom and restrict access.", priority: "High", riskLevel: "High", consequence: "An open stockroom is a major opportunity for theft.", proof: "Access Log" },
            ]
        },
        {
            title: "Trial Room Procedure",
            department: "Sales/Security",
            frequency: "Ongoing",
            role: "Sales Associate",
            summary: "A process to provide a good customer experience while preventing theft from trial rooms.",
            icon: "door-closed",
            tasks: [
                { id: "TRIAL-01", description: "Limit customers to a set number of items per trial.", priority: "High", riskLevel: "High", consequence: "Allowing too many items at once makes it easy for thieves to conceal unpaid merchandise.", proof: "Policy Signage" },
                { id: "TRIAL-02", description: "Staff to be present at fitting room entrance to monitor items.", priority: "High", riskLevel: "High", consequence: "An unmanned fitting room is a prime target for theft.", proof: "Staff Roster" },
                { id: "TRIAL-03", description: "Check and sanitize each trial room after use.", priority: "High", riskLevel: "Medium", consequence: "Creates a poor, unhygienic experience for the next customer.", proof: "Cleaning Log" },
                { id: "TRIAL-04", description: "Log any lost property found in the trial rooms.", priority: "Medium", riskLevel: "Low", consequence: "Failure to log lost property makes it difficult to return items to their owners.", proof: "Lost Property Log" },
                { id: "TRIAL-05", description: "Inspect rooms for hidden tags or security device tampering.", priority: "High", riskLevel: "High", consequence: "Missed opportunity to detect theft attempts in progress.", proof: "Inspection Log" },
                { id: "TRIAL-06", description: "Count items before and after the customer uses the trial room.", priority: "High", riskLevel: "High", consequence: "The most effective way to prevent items from being stolen from the fitting room.", proof: "Item Count Log" },
                { id: "TRIAL-07", description: "Handle returned items from the trial room correctly (re-hang, return to floor).", priority: "High", riskLevel: "Low", consequence: "A pile of unhandled clothes looks messy and makes items unavailable for sale.", proof: "Visual Check" },
                { id: "TRIAL-08", description: "Report any suspicious behavior to security.", priority: "High", riskLevel: "High", consequence: "Allows potential thieves to continue operating without challenge.", proof: "Incident Report" },
                { id: "TRIAL-09", description: "Ensure fitting rooms are well-lit and mirrors are clean.", priority: "Medium", riskLevel: "Low", consequence: "A poor fitting room experience can discourage a customer from buying.", proof: "Visual Check" },
                { id: "TRIAL-10", description: "Provide assistance to customers in the fitting rooms.", priority: "High", riskLevel: "Low", consequence: "Good service in the fitting room can significantly increase the chances of a sale.", proof: "Customer Feedback" },
            ]
        },
        {
            title: "Return & Exchange SOP",
            department: "Customer Service",
            frequency: "Per Transaction",
            role: "Store Manager",
            summary: "A structured process for handling returns to prevent fraud and ensure a good customer experience.",
            icon: "recycle",
            tasks: [
                { id: "RETURN-01", description: "Verify original receipt and SKU for all returns/exchanges.", priority: "High", riskLevel: "High", consequence: "Accepting returns without proof of purchase can lead to fraudulent returns of stolen goods.", proof: "Receipt Check" },
                { id: "RETURN-02", description: "Inspect returned product for wear, damage, or tag removal.", priority: "High", riskLevel: "High", consequence: "Accepting worn or damaged goods results in a direct financial loss.", proof: "Inspection Log" },
                { id: "RETURN-03", description: "Require manager approval for returns above a specified value.", priority: "High", riskLevel: "High", consequence: "Prevents junior staff from being pressured into accepting a large, fraudulent return.", proof: "Manager Sign-off" },
                { id: "RETURN-04", description: "Take photo evidence for any suspicious or high-value returns.", priority: "Medium", riskLevel: "High", consequence: "Lack of evidence makes it hard to prove fraud later.", proof: "Photo Log" },
                { id: "RETURN-05", description: "Process refund/exchange in POS system accurately.", priority: "High", riskLevel: "High", consequence: "Errors can lead to financial loss or customer disputes.", proof: "POS Transaction ID" },
                { id: "RETURN-06", description: "Handle defective items correctly.", priority: "High", riskLevel: "High", consequence: "Defective items need to be tracked for vendor claims and quality control.", proof: "Defective Item Log" },
                { id: "RETURN-07", description: "Inform customers of the return policy clearly.", priority: "High", riskLevel: "Low", consequence: "Ambiguity leads to arguments and customer dissatisfaction.", proof: "Policy Signage" },
                { id: "RETURN-08", description: "Handle returns from online purchases according to the omni-channel policy.", priority: "High", riskLevel: "High", consequence: "Inconsistent policies between online and offline create customer confusion.", proof: "Omni-channel SOP" },
                { id: "RETURN-09", description: "Quarantine returned items before placing them back on the floor.", priority: "High", riskLevel: "Medium", consequence: "Ensures items are clean and properly retagged before being resold.", proof: "Quarantine Log" },
                { id: "RETURN-10", description: "Train staff on handling difficult return situations.", priority: "High", riskLevel: "Medium", consequence: "Untrained staff can escalate a simple dispute into a major customer service failure.", proof: "Training Log" },
            ]
        },
        {
            title: "Loss Prevention & Security",
            department: "Security",
            frequency: "Daily",
            role: "Security Supervisor",
            summary: "A daily routine to secure the store against theft and other losses.",
            icon: "shield",
            tasks: [
                { id: "LP-01", description: "Test Electronic Article Surveillance (EAS) gates at opening.", priority: "High", riskLevel: "High", consequence: "A non-functional EAS system means a key layer of theft detection is missing.", proof: "EAS Test Log" },
                { id: "LP-02", description: "Review CCTV footage for blind spots or camera tampering.", priority: "High", riskLevel: "High", consequence: "Thieves actively look for and exploit camera blind spots.", proof: "CCTV Review Log" },
                { id: "LP-03", description: "Audit high-value items to ensure security tags are correctly attached.", priority: "High", riskLevel: "High", consequence: "An untagged high-value item is a prime target for theft.", proof: "Tag Audit" },
                { id: "LP-04", description: "Train staff on identifying and reporting suspicious behavior.", priority: "High", riskLevel: "Medium", consequence: "Alert staff are the best defense against theft.", proof: "Training Log" },
                { id: "LP-05", description: "Secure all fire exits and staff entrances.", priority: "High", riskLevel: "High", consequence: "Unsecured exits are a common method for organized retail crime.", proof: "Exit Check Log" },
                { id: "LP-06", description: "Conduct bag checks for staff leaving the store.", priority: "High", riskLevel: "High", consequence: "A necessary deterrent against internal theft.", proof: "Bag Check Log" },
                { id: "LP-07", description: "Monitor fitting rooms for theft.", priority: "High", riskLevel: "High", consequence: "Fitting rooms are the #1 location for tag removal and merchandise concealment.", proof: "Fitting Room Log" },
                { id: "LP-08", description: "Have a clear protocol for handling a theft incident.", priority: "High", riskLevel: "High", consequence: "An inconsistent or unsafe response can lead to staff injury or legal issues.", proof: "Theft Protocol" },
                { id: "LP-09", description: "Work with local law enforcement on organized retail crime.", priority: "Medium", riskLevel: "High", consequence: "Sharing intelligence helps prevent future incidents.", proof: "Police Liaison Log" },
                { id: "LP-10", description: "Analyze shrinkage data to identify patterns.", priority: "High", riskLevel: "High", consequence: "Data analysis can reveal if a specific item or area of the store is being targeted.", proof: "Shrinkage Report" },
            ]
        },
        {
            title: "Cash Handling & Reconciliation",
            department: "Finance/Operations",
            frequency: "Daily",
            role: "Head Cashier",
            summary: "Ensures all cash and payments are handled securely and reconciled accurately.",
            icon: "banknote",
            tasks: [
                { id: "CH-01", description: "Reconcile cash drawer against POS report at end of shift.", priority: "High", riskLevel: "High", consequence: "Unreconciled drawers can hide cash theft or major accounting errors.", proof: "Shift Reconciliation Form" },
                { id: "CH-02", description: "Prepare and log daily cash deposits for bank.", priority: "High", riskLevel: "High", consequence: "Delays in deposits increase the risk of theft from the store.", proof: "Deposit Slip" },
                { id: "CH-03", description: "Use counterfeit detection methods for all large bills.", priority: "High", riskLevel: "High", consequence: "Accepting fake currency is a direct financial loss.", proof: "Counterfeit Check" },
                { id: "CH-04", description: "Store cash securely in a locked safe.", priority: "High", riskLevel: "High", consequence: "Leaving cash unsecured is a major theft risk.", proof: "Safe Access Log" },
                { id: "CH-05", description: "Manager to verify and sign off on all daily cash reports.", priority: "High", riskLevel: "High", consequence: "Provides a second layer of accountability for all cash handling.", proof: "Signed Report" },
                { id: "CH-06", description: "Limit the amount of cash kept in the POS drawer.", priority: "High", riskLevel: "High", consequence: "Minimizes the potential loss during a till snatch or robbery.", proof: "Cash Limit Policy" },
                { id: "CH-07", description: "Handle credit card transactions securely according to PCI DSS standards.", priority: "High", riskLevel: "High", consequence: "Non-compliance can lead to massive fines and loss of ability to accept cards.", proof: "PCI Compliance Audit" },
                { id: "CH-08", description: "Process gift card transactions correctly.", priority: "High", riskLevel: "Medium", consequence: "Errors can lead to customer disputes and financial loss.", proof: "Gift Card Log" },
                { id: "CH-09", description: "Train cashiers on all payment handling procedures.", priority: "High", riskLevel: "High", consequence: "Untrained cashiers are more likely to make errors or fall victim to scams.", proof: "Training Log" },
                { id: "CH-10", description: "Investigate any cash shortages or overages immediately.", priority: "High", riskLevel: "High", consequence: "Uninvestigated discrepancies can be a sign of ongoing theft.", proof: "Investigation Report" },
            ]
        },
        {
            title: "Seasonal Inventory Management",
            department: "Merchandising",
            frequency: "Seasonal",
            role: "Merchandiser",
            summary: "A plan to manage the transition between seasons, clear old stock, and introduce new collections.",
            icon: "calendar-days",
            tasks: [
                { id: "SIM-01", description: "Plan storage space for incoming seasonal collections.", priority: "High", riskLevel: "Medium", consequence: "Lack of planning leads to a cluttered and inefficient stockroom.", proof: "Storage Plan" },
                { id: "SIM-02", description: "Implement scheduled markdowns for end-of-season items.", priority: "High", riskLevel: "Medium", consequence: "Failure to mark down stock in time leads to deep discounts later or total write-offs.", proof: "Markdown Schedule" },
                { id: "SIM-03", description: "Consolidate last-season stock to a designated sale area.", priority: "High", riskLevel: "Low", consequence: "Mixing sale items with full-price items can devalue the new collection.", proof: "Photo of Sale Area" },
                { id: "SIM-04", description: "Analyze sell-through rates to inform future buying.", priority: "High", riskLevel: "Medium", consequence: "Leads to repeating buying mistakes season after season.", proof: "Sell-Through Report" },
                { id: "SIM-05", description: "Process returns to vendor for any unsold guaranteed stock.", priority: "High", riskLevel: "Medium", consequence: "A missed RTV deadline means the store is stuck with unwanted inventory.", proof: "Vendor Return Forms" },
                { id: "SIM-06", description: "Plan marketing campaigns for seasonal sales.", priority: "High", riskLevel: "Medium", consequence: "Without marketing, even discounted stock may not sell.", proof: "Marketing Plan" },
                { id: "SIM-07", description: "Update visual merchandising for new seasons.", priority: "High", riskLevel: "Low", consequence: "The store looks stale and outdated.", proof: "VM Plan" },
                { id: "SIM-08", description: "Train staff on the key features of the new collection.", priority: "High", riskLevel: "Medium", consequence: "Staff cannot effectively sell products they don't understand.", proof: "Training Log" },
                { id: "SIM-09", description: "Clear old stock from the stockroom to make space.", priority: "High", riskLevel: "Medium", consequence: "A cluttered stockroom leads to inefficiency and damaged goods.", proof: "Stockroom Audit" },
                { id: "SIM-10", description: "Donate or write off any remaining unsold stock.", priority: "Medium", riskLevel: "Low", consequence: "A necessary final step to clear the books and stockroom.", proof: "Donation/Write-off Form" },
            ]
        },
        {
            title: "Omni-Channel Operations",
            department: "Operations",
            frequency: "Daily",
            role: "Store Manager",
            summary: "Manages 'Click & Collect', online returns, and other in-store-online integrations.",
            icon: "link",
            tasks: [
                { id: "OC-01", description: "Check system for new Click & Collect orders every hour.", priority: "High", riskLevel: "Medium", consequence: "Delayed order picking leads to long customer wait times at pickup.", proof: "System Log" },
                { id: "OC-02", description: "Pick and pack orders within the defined SLA.", priority: "High", riskLevel: "Medium", consequence: "Breaching the SLA leads to a poor customer experience.", proof: "Picking Ticket" },
                { id: "OC-03", description: "Process online returns according to the return policy.", priority: "High", riskLevel: "High", consequence: "Inconsistent return policies frustrate customers and can lead to financial loss.", proof: "Return Transaction Log" },
                { id: "OC-04", description: "Manage inventory for store-fulfilled online orders to avoid stockouts.", priority: "High", riskLevel: "High", consequence: "Selling an item online that is not actually in stock creates a very poor customer experience.", proof: "Inventory Sync Report" },
                { id: "OC-05", description: "Train staff on all omni-channel processes.", priority: "High", riskLevel: "Medium", consequence: "Untrained staff can give incorrect information or process transactions incorrectly.", proof: "Training Log" },
                { id: "OC-06", description: "Communicate with customers about the status of their orders.", priority: "High", riskLevel: "Medium", consequence: "Lack of communication leads to customer anxiety and support calls.", proof: "Communication Log" },
                { id: "OC-07", description: "Have a designated area for Click & Collect pickups.", priority: "High", riskLevel: "Low", consequence: "A disorganized pickup process creates a chaotic in-store experience.", proof: "Visual Check" },
                { id: "OC-08", description: "Handle packaging and shipping for store-fulfilled orders.", priority: "High", riskLevel: "Medium", consequence: "Poor packaging can lead to items being damaged in transit.", proof: "Shipping Log" },
                { id: "OC-09", description: "Reconcile omni-channel sales with store sales.", priority: "High", riskLevel: "High", consequence: "Leads to inaccurate financial reporting.", proof: "Reconciliation Report" },
                { id: "OC-10", description: "Gather customer feedback on the omni-channel experience.", priority: "Medium", riskLevel: "Low", consequence: "Missed opportunity to improve a critical and growing part of the business.", proof: "Feedback Survey" },
            ]
        }
    ]
};

const jewelry_and_luxury_retail: PremiumPack = {
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

const electronics_showroom_pack: PremiumPack = {
    id: 'electronics_showroom_pack',
    title: "Electronics Showroom Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/a05cb9ef-51b3-454a-a389-609b314b8338',
    category: "Retail",
    description: "A comprehensive operational pack for electronics retailers to ensure safety, asset security, and a superior customer experience.",
    icon: "tv",
    whoIsItFor: ["Electronics Store Owners", "Showroom Managers", "Heads of Retail Operations", "Asset Protection Managers"],
    sampleItems: [
        { text: "Prevent fires and damage with meticulous demo unit safety and electrical load audits.", icon: "zap" },
        { text: "Secure high-value assets with serialized tagging, warranty management, and inventory control.", icon: "barcode" },
        { text: "Ensure environmental compliance with a formal e-waste handling and disposal process.", icon: "recycle" },
        { text: "Protect customer data and prevent fraud with PCI-DSS compliant payment security.", icon: "shield-check" },
        { text: "Enhance customer trust through a standardized and professional demo and returns process.", icon: "user-check" },
        { text: "Optimize your back-of-house with safe and efficient stockroom organization checklists.", icon: "package" }
    ],
    checklists: [
        {
            title: "Demo Unit Pre-Opening Checklist",
            department: "Sales/Operations",
            frequency: "Daily",
            role: "Floor Manager",
            summary: "Ensures all demo units are safe, functional, and presentable before the store opens.",
            icon: "clipboard-check",
            tasks: [
                { id: "DEMO-01", description: "Check all power cables for frays or damage.", priority: "High", riskLevel: "High", consequence: "Prevents electrical shorts and potential fire hazards.", proof: "Visual Inspection Log" },
                { id: "DEMO-02", description: "Ensure all demo units are connected via surge protectors.", priority: "High", riskLevel: "Medium", consequence: "Protects expensive demo units from power surges, reducing equipment loss.", proof: "Visual Check" },
                { id: "DEMO-03", description: "Verify all wiring is neatly concealed to prevent trip hazards.", priority: "High", riskLevel: "Medium", consequence: "Prevents customer or staff injuries and potential lawsuits.", proof: "Visual Check" },
                { id: "DEMO-04", description: "Check that all demo devices have the latest firmware and demo content loaded.", priority: "High", riskLevel: "Low", consequence: "Ensures a consistent and positive customer experience with the latest features.", proof: "Firmware Version Check" },
                { id: "DEMO-05", description: "Ensure all security straps and covers for demo units are intact.", priority: "High", riskLevel: "High", consequence: "Deters theft of high-value demo merchandise.", proof: "Security Device Log" },
                { id: "DEMO-06", description: "Clean screens and surfaces of all demo units.", priority: "Medium", riskLevel: "Low", consequence: "A dirty display looks unprofessional and can deter customers.", proof: "Cleaning Log" },
                { id: "DEMO-07", description: "Verify all demo units are powered on and functional.", priority: "High", riskLevel: "Medium", consequence: "A non-working demo unit is a lost sales opportunity.", proof: "Functionality Check" },
                { id: "DEMO-08", description: "Check for any signs of overheating on charging stations.", priority: "High", riskLevel: "High", consequence: "Overheating is a major fire risk, especially with lithium-ion batteries.", proof: "Thermal Check" },
                { id: "DEMO-09", description: "Ensure all pricing and feature labels are correct and visible.", priority: "High", riskLevel: "Low", consequence: "Incorrect information can mislead customers and cause disputes.", proof: "Label Audit" },
                { id: "DEMO-10", description: "Report any faulty demo units for immediate replacement.", priority: "High", riskLevel: "Medium", consequence: "A broken demo unit reflects poorly on the brand and the store.", proof: "Fault Report" },
            ]
        },
        {
            title: "Electrical Safety & PAT Testing",
            department: "Facilities/Safety",
            frequency: "Scheduled",
            role: "Safety Officer",
            summary: "A recurring checklist for ensuring all electrical systems and appliances are safe and compliant.",
            icon: "zap",
            tasks: [
                { id: "ELEC-01", description: "Conduct scheduled Portable Appliance Testing (PAT) for all plug-in devices.", priority: "High", riskLevel: "High", consequence: "Identifies faulty electrical equipment that could cause shocks or fires.", proof: "PAT Test Report" },
                { id: "ELEC-02", description: "Perform quarterly earth leakage circuit breaker (ELCB) tests.", priority: "High", riskLevel: "High", consequence: "A faulty ELCB will not trip during an electrical fault, a major life-safety risk.", proof: "ELCB Test Log" },
                { id: "ELEC-03", description: "Maintain records of all electrical grounding tests and certifications.", priority: "High", riskLevel: "High", consequence: "Proper grounding is essential for preventing electrical shocks.", proof: "Grounding Test Records" },
                { id: "ELEC-04", description: "Check load on all circuits to prevent overloading.", priority: "High", riskLevel: "High", consequence: "Overloaded circuits are a primary cause of electrical fires.", proof: "Load Test Report" },
                { id: "ELEC-05", description: "Ensure fire extinguishers are suitable for electrical fires (Class C).", priority: "High", riskLevel: "High", consequence: "Using the wrong type of extinguisher on an electrical fire can be fatal.", proof: "Extinguisher Inspection Log" },
                { id: "ELEC-06", description: "Inspect all extension cords and power strips for damage.", priority: "High", riskLevel: "High", consequence: "Damaged cords are a common cause of electrical fires.", proof: "Cord Inspection Log" },
                { id: "ELEC-07", description: "Ensure all electrical panels are accessible and not blocked.", priority: "High", riskLevel: "High", consequence: "In an emergency, access to the panel is critical to shut off power.", proof: "Visual Check" },
                { id: "ELEC-08", description: "Train staff on basic electrical safety and how to report issues.", priority: "High", riskLevel: "Medium", consequence: "Untrained staff may not recognize or report dangerous electrical hazards.", proof: "Training Log" },
                { id: "ELEC-09", description: "Use only certified electricians for any repair work.", priority: "High", riskLevel: "High", consequence: "Improper electrical work can create hidden fire hazards.", proof: "Vendor Certification" },
                { id: "ELEC-10", description: "Conduct an annual thermal imaging audit of electrical panels.", priority: "High", riskLevel: "High", consequence: "Identifies 'hot spots' that are invisible to the naked eye but indicate a potential fire risk.", proof: "Thermal Imaging Report" },
            ]
        },
        {
            title: "Asset Tagging & Inventory",
            department: "Inventory",
            frequency: "Ongoing",
            role: "Inventory Manager",
            summary: "A process for tracking every high-value item from receipt to sale, minimizing shrinkage.",
            icon: "barcode",
            tasks: [
                { id: "ASSET-01", description: "Record the unique serial number of every item at goods receipt.", priority: "High", riskLevel: "High", consequence: "Without serial numbers, it is impossible to track individual units, making theft easy to conceal.", proof: "GRN Log" },
                { id: "ASSET-02", description: "Apply a unique asset tag to each display and stock item.", priority: "High", riskLevel: "High", consequence: "Provides a clear, scannable identity for each piece of inventory.", proof: "Asset Tagging Log" },
                { id: "ASSET-03", description: "Perform daily high-value item inventory verification.", priority: "High", riskLevel: "High", consequence: "Allows for immediate detection of theft of the most expensive items.", proof: "High-Value Count Sheet" },
                { id: "ASSET-04", description: "Implement an immediate escalation process for any missing items.", priority: "High", riskLevel: "High", consequence: "A delay in reporting allows thieves to get away and evidence to be lost.", proof: "Escalation SOP" },
                { id: "ASSET-05", description: "Reconcile physical inventory with system records monthly.", priority: "High", riskLevel: "High", consequence: "Catches discrepancies and helps maintain accurate stock levels for ordering.", proof: "Monthly Stock Take Report" },
                { id: "ASSET-06", description: "Use barcode scanners for accurate inventory counts.", priority: "High", riskLevel: "High", consequence: "Manual counting is slow and highly prone to human error.", proof: "Scan Logs" },
                { id: "ASSET-07", description: "Secure the stockroom with restricted access.", priority: "High", riskLevel: "High", consequence: "An open stockroom is the number one source of inventory shrinkage.", proof: "Access Log" },
                { id: "ASSET-08", description: "Track items sent for repair or to other locations.", priority: "High", riskLevel: "High", consequence: "Items can easily get 'lost' in transit without a clear chain of custody.", proof: "Movement Log" },
                { id: "ASSET-09", description: "Investigate root causes of inventory discrepancies.", priority: "High", riskLevel: "High", consequence: "Failing to investigate means the underlying problem (theft, process error) will continue.", proof: "Investigation Report" },
                { id: "ASSET-10", description: "Manager to sign off on all inventory adjustments.", priority: "High", riskLevel: "High", consequence: "Prevents fraudulent adjustments to cover up theft.", proof: "Signed Adjustment Form" },
            ]
        },
        {
            title: "POS & Payment Reconciliation",
            department: "Finance",
            frequency: "Daily",
            role: "Head Cashier",
            summary: "Daily financial checks to ensure all transactions are accurate and secure.",
            icon: "circle-dollar-sign",
            tasks: [
                { id: "POS-RECON-01", description: "Perform end-of-day reconciliation of cash, card, and digital payments against POS reports.", priority: "High", riskLevel: "High", consequence: "Unreconciled tills can hide cash theft or payment processing errors.", proof: "Reconciliation Report" },
                { id: "POS-RECON-02", description: "Check payment terminals daily for signs of tampering.", priority: "High", riskLevel: "High", consequence: "Criminals can install skimmers to steal customer card data.", proof: "Device Inspection Log" },
                { id: "POS-RECON-03", description: "Verify CCTV cameras at billing lanes are operational and have a clear view.", priority: "High", riskLevel: "High", consequence: "Provides crucial evidence in case of cash disputes or fraudulent transactions.", proof: "CCTV Check Log" },
                { id: "POS-RECON-04", description: "Require dual approval from a manager for all refunds.", priority: "High", riskLevel: "High", consequence: "A common method for internal fraud is processing fake refunds.", proof: "Refund Approval Log" },
                { id: "POS-RECON-05", description: "Securely store and transport daily cash deposits.", priority: "High", riskLevel: "High", consequence: "Reduces the risk of robbery or internal theft of cash.", proof: "Cash Deposit Log" },
                { id: "POS-RECON-06", description: "Reconcile gift card and voucher sales.", priority: "High", riskLevel: "Medium", consequence: "Prevents fraud related to gift card issuance and redemption.", proof: "Voucher Log" },
                { id: "POS-RECON-07", description: "Verify cashier logins and logouts for each shift.", priority: "High", riskLevel: "Medium", consequence: "Ensures accountability for all transactions processed on a specific till.", proof: "Shift Log" },
                { id: "POS-RECON-08", description: "Report any cash discrepancies immediately.", priority: "High", riskLevel: "High", consequence: "A small discrepancy could be a test for a larger theft.", proof: "Discrepancy Report" },
                { id: "POS-RECON-09", description: "Follow PCI DSS guidelines for all card transactions.", priority: "High", riskLevel: "High", consequence: "Non-compliance can lead to massive fines and reputational damage.", proof: "PCI Compliance Certificate" },
                { id: "POS-RECON-10", description: "Use counterfeit detection on all cash transactions.", priority: "High", riskLevel: "High", consequence: "Accepting fake currency is a direct financial loss.", proof: "Counterfeit Check" },
            ]
        },
        {
            title: "E-waste Handling SOP",
            department: "Compliance",
            frequency: "As needed",
            role: "Compliance Officer",
            summary: "A compliant process for managing and disposing of electronic waste.",
            icon: "recycle",
            tasks: [
                { id: "EWaste-01", description: "Maintain segregated and clearly labeled bins for e-waste.", priority: "High", riskLevel: "Medium", consequence: "Mixing e-waste with general waste is an environmental and legal violation.", proof: "Visual Check" },
                { id: "EWaste-02", description: "Use only authorized, certified e-waste disposal vendors.", priority: "High", riskLevel: "High", consequence: "Using an uncertified vendor can lead to illegal dumping and fines for your company.", proof: "Vendor Contract" },
                { id: "EWaste-03", description: "Maintain a detailed log of all e-waste disposals.", priority: "High", riskLevel: "High", consequence: "Provides a legal audit trail to prove compliant disposal.", proof: "Disposal Log" },
                { id: "EWaste-04", description: "Obtain and file disposal/destruction certificates from the vendor.", priority: "High", riskLevel: "High", consequence: "This is the legal proof that your e-waste was handled correctly.", proof: "Disposal Certificates" },
                { id: "EWaste-05", description: "Train staff on identifying and segregating e-waste correctly.", priority: "Medium", riskLevel: "Medium", consequence: "Untrained staff may incorrectly dispose of hazardous materials.", proof: "Training Log" },
                { id: "EWaste-06", description: "Securely wipe data from all devices before disposal.", priority: "High", riskLevel: "High", consequence: "Failure to wipe data can lead to major data breaches from discarded hard drives.", proof: "Data Wipe Log" },
                { id: "EWaste-07", description: "Store e-waste in a secure, designated area.", priority: "High", riskLevel: "Medium", consequence: "Prevents theft or scavenging of discarded electronics.", proof: "Storage Area Check" },
                { id: "EWaste-08", description: "Follow all local environmental regulations for e-waste.", priority: "High", riskLevel: "High", consequence: "Non-compliance can result in large fines and brand damage.", proof: "Regulatory Checklist" },
                { id: "EWaste-09", description: "Schedule regular pickups with the e-waste vendor.", priority: "High", riskLevel: "Medium", consequence: "Prevents accumulation of hazardous materials on site.", proof: "Pickup Schedule" },
                { id: "EWaste-10", description: "Audit the e-waste process annually for compliance.", priority: "High", riskLevel: "High", consequence: "Ensures the process remains compliant with changing regulations.", proof: "Annual Audit Report" },
            ]
        },
        {
            title: "Warranty & Repair Management",
            department: "Customer Service",
            frequency: "Per Case",
            role: "Service Manager",
            summary: "Manages customer repairs and warranty claims efficiently and professionally.",
            icon: "wrench",
            tasks: [
                { id: "IT-POS-01", description: "Log every repair request with customer details and item serial number.", priority: "High", riskLevel: "High", consequence: "Poor record-keeping can lead to lost items or disputes with customers.", proof: "Repair Log" },
                { id: "IT-POS-02", description: "Track the status of all items sent to authorized service centers.", priority: "High", riskLevel: "Medium", consequence: "Inability to provide customers with updates on their repair status.", proof: "Service Center Tracking Sheet" },
                { id: "IT-POS-03", description: "Process warranty claims with manufacturers according to their policies.", priority: "High", riskLevel: "High", consequence: "Failure to follow policy can lead to claim rejection and financial loss.", proof: "Warranty Claim Forms" },
                { id: "IT-POS-04", description: "Communicate repair status updates to customers.", priority: "High", riskLevel: "Medium", consequence: "Lack of communication is a major source of customer dissatisfaction.", proof: "Communication Log" },
                { id: "IT-POS-05", description: "Inspect repaired items before returning them to the customer.", priority: "High", riskLevel: "High", consequence: "Returning an item that is still faulty creates a very poor customer experience.", proof: "Final Inspection Checklist" },
                { id: "IT-POS-06", description: "Obtain customer sign-off upon collection of repaired item.", priority: "High", riskLevel: "Medium", consequence: "Protects against later claims that the item was not returned or was still faulty.", proof: "Collection Form" },
                { id: "IT-POS-07", description: "Manage inventory of spare parts for common repairs.", priority: "High", riskLevel: "Medium", consequence: "Lack of spares leads to longer repair times.", proof: "Spare Parts Inventory" },
                { id: "IT-POS-08", description: "Provide customer with a clear timeline for repairs.", priority: "High", riskLevel: "Low", consequence: "Unclear timelines lead to customer frustration and repeated follow-up calls.", proof: "Repair Estimate Form" },
                { id: "IT-POS-09", description: "Process payment for repairs accurately.", priority: "High", riskLevel: "Medium", consequence: "Billing errors can lead to disputes.", proof: "Invoice" },
                { id: "IT-POS-10", description: "Log all repair details for warranty and history purposes.", priority: "High", riskLevel: "Medium", consequence: "Provides a valuable service history for the item.", proof: "Service History" }
            ]
        }
    ]
};

const supermarket_grocery_retail_pack: PremiumPack = {
    id: 'supermarket_grocery_retail_pack',
    title: "Supermarket & Grocery Retail Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/d6d4dd85-3fb9-4c26-8ec3-cb021ddebfdc',
    category: "Retail",
    description: "An all-in-one operations and compliance pack for supermarkets, hypermarkets, and grocery retail chains, ensuring food safety, quality, and operational efficiency across outlets.",
    icon: "shopping-basket",
    badgeText: "New!",
    badgeVariant: "accent",
    whoIsItFor: ["Supermarket Owners", "Grocery Store Proprietors", "Heads of Retail Operations", "Store Directors", "Department Heads (Fresh Food, Dairy)", "3PL Partners"],
    sampleItems: [
        { text: "Prevent spoilage and foodborne illness with robust cold chain and perishables temperature management.", icon: "thermometer" },
        { text: "Minimize waste and ensure freshness with a daily FIFO rotation and expiry date sweep process.", icon: "recycle" },
        { text: "Maintain a safe and inviting store with checklists for hygiene, cleaning, and rapid spill response.", icon: "spray-can" },
        { text: "Protect your revenue through rigorous point-of-sale security and cash reconciliation.", icon: "dollar-sign" },
        { text: "Guarantee food quality from the source with a stringent raw material receiving and QC process.", icon: "package-check" },
        { text: "Ensure compliance and fair trade with weighing scale calibration and Legal Metrology checks.", icon: "scale" }
    ],
    checklists: [
        {
            title: "Cold Chain & Perishables Management",
            department: "Fresh Produce/Dairy",
            frequency: "Daily",
            role: "Department Manager",
            summary: "Ensures the freshness and safety of all temperature-sensitive products.",
            icon: "thermometer",
            tasks: [
                { id: "SC-COLD-01", description: "Log temperatures of all refrigerators and freezers twice daily.", priority: "High", riskLevel: "High", consequence: "Failure to monitor can lead to bacterial growth and foodborne illness outbreaks.", proof: "Temperature Log" },
                { id: "SC-COLD-02", description: "Verify functionality of temperature alarms weekly.", priority: "High", riskLevel: "High", consequence: "A non-functional alarm means a temperature failure can go unnoticed for hours, leading to catastrophic inventory loss.", proof: "Alarm Test Log" },
                { id: "SC-COLD-03", description: "Check door seals on all refrigerated units daily.", priority: "High", riskLevel: "Medium", consequence: "Damaged seals lead to energy waste and make it harder to maintain safe temperatures, increasing operational costs and spoilage risk.", proof: "Visual Inspection" },
                { id: "SC-COLD-04", description: "Ensure backup power for cold storage is tested weekly.", priority: "High", riskLevel: "High", consequence: "During a power outage, failure of backup power can result in the loss of all perishable inventory, a major financial blow.", proof: "Generator Test Log" },
                { id: "SC-COLD-05", description: "Document any temperature excursions and the corrective actions taken.", priority: "High", riskLevel: "High", consequence: "Lack of documentation makes it impossible to prove due diligence during a health inspection or trace the cause of a spoilage event.", proof: "Corrective Action Report" },
                { id: "SC-COLD-06", description: "Ensure goods are moved to cold storage immediately upon receipt.", priority: "High", riskLevel: "High", consequence: "Delays break the cold chain, promoting bacterial growth.", proof: "Receiving Log" },
                { id: "SC-COLD-07", description: "Clean and sanitize all refrigerated units weekly.", priority: "High", riskLevel: "Low", consequence: "Poor air quality, increased energy consumption, system failure.", proof: "Public area cleaning log." },
                { id: "SC-COLD-08", description: "Do not overload refrigerated units to allow for proper air circulation.", priority: "High", riskLevel: "Medium", consequence: "Overloading creates 'hot spots' where food can spoil.", proof: "Pump performance log." },
                { id: "SC-COLD-09", description: "Train staff on cold chain management procedures.", priority: "High", riskLevel: "Medium", consequence: "Poor performance log.", proof: "Photo of refrigerator storage arrangement." },
                { id: "SC-COLD-10", description: "Calibrate thermometers quarterly.", priority: "High", riskLevel: "High", consequence: "Inaccurate thermometers give a false sense of safety.", proof: "Thermometer Calibration Log." }
            ]
        },
        {
            title: "FIFO & Expiry Sweep SOP",
            department: "Inventory",
            frequency: "Daily",
            role: "Floor Staff",
            summary: "A process to ensure freshness, reduce waste, and prevent the sale of expired goods.",
            icon: "recycle",
            tasks: [
                { id: "SC-FIFO-01", description: "Conduct daily expiry sweeps for high-risk items like dairy and bread.", priority: "High", riskLevel: "High", consequence: "Selling expired food is a major health risk and can lead to severe legal penalties.", proof: "Sweep Log" },
                { id: "SC-FIFO-02", description: "Ensure First-In, First-Out (FIFO) rotation during shelf replenishment.", priority: "High", riskLevel: "High", consequence: "Failure to rotate stock is a primary cause of food wastage and selling expired products.", proof: "Supervisor Audit" },
                { id: "SC-FIFO-03", description: "Follow markdown or quarantine procedures for near-expiry items.", priority: "High", riskLevel: "Medium", consequence: "Reduces financial loss from unsold expired goods.", proof: "Markdown Log" },
                { id: "SC-FIFO-04", description: "Remove and log all expired products from shelves immediately.", priority: "High", riskLevel: "High", consequence: "Leaving expired products on shelves poses a direct risk to consumer health.", proof: "Expired Goods Log" },
                { id: "SC-FIFO-05", description: "Train staff on how to read and interpret expiry date codes.", priority: "High", riskLevel: "Medium", consequence: "Staff may misinterpret codes and leave expired products on the shelf.", proof: "Training Log" },
                { id: "SC-FIFO-06", description: "Donate or dispose of expired goods according to policy.", priority: "High", riskLevel: "Medium", consequence: "Improper disposal can lead to legal issues or brand damage.", proof: "Donation/Disposal Log" },
                { id: "SC-FIFO-07", description: "Audit stockroom for FIFO compliance weekly.", priority: "High", riskLevel: "High", consequence: "Ensures older stock is moved to the front line.", proof: "Stockroom Audit Log" },
                { id: "SC-FIFO-08", description: "Review reports on expired goods to identify purchasing issues.", priority: "High", riskLevel: "Medium", consequence: "Helps to adjust order quantities and prevent future over-ordering.", proof: "Analysis Report" },
                { id: "SC-FIFO-09", description: "Ensure near-expiry items are clearly marked for customers.", priority: "High", riskLevel: "Low", consequence: "Provides transparency to customers and helps sell items faster.", proof: "Signage Check" },
                { id: "SC-FIFO-10", description: "Manager to sign off on all expired goods disposal.", priority: "High", riskLevel: "High", consequence: "Prevents unauthorized removal of stock under the guise of \"expiry\".", proof: "Signed Disposal Form" }
            ]
        },
        {
            title: "Store Cleaning & Spill Response",
            department: "Hygiene",
            frequency: "Hourly",
            role: "Housekeeping Staff",
            summary: "A protocol to maintain a clean, safe, and welcoming store environment.",
            icon: "sparkles",
            tasks: [
                { id: "SC-CLEAN-01", description: "Perform and log hourly checks of all aisles for spills or hazards.", priority: "High", riskLevel: "High", consequence: "A liquid spill is a major slip-and-fall hazard, leading to customer injuries and lawsuits.", proof: "Aisle Check Log" },
                { id: "SC-CLEAN-02", description: "Deploy \"Wet Floor\" signs immediately for any spills.", priority: "High", riskLevel: "High", consequence: "Failure to warn customers is a major point of legal liability.", proof: "CCTV Footage" },
                { id: "SC-CLEAN-03", description: "Log all spill incidents with time, location, and cleanup action.", priority: "High", riskLevel: "Medium", consequence: "Provides a legal record of due diligence in case of a lawsuit.", proof: "Spill Incident Log" },
                { id: "SC-CLEAN-04", description: "Inspect and clean restrooms hourly.", priority: "High", riskLevel: "Medium", consequence: "Dirty restrooms are a major source of customer complaints and reflect poorly on the store.", proof: "Restroom Cleaning Log" },
                { id: "SC-CLEAN-05", description: "Ensure cleaning equipment is sanitized and stored correctly.", priority: "Medium", riskLevel: "Low", consequence: "Equipment check log.", proof: "Thermal imaging report." },
                { id: "SC-CLEAN-06", description: "Deep clean floors and drains weekly.", priority: "High", riskLevel: "Medium", consequence: "Blocked grease traps can cause foul odors and drainage blockages.", proof: "Manager's report on the incident." },
                { id: "SC-CLEAN-07", description: "Check and empty all trash bins regularly.", priority: "High", riskLevel: "Medium", consequence: "Pest attraction and odor issues.", proof: "Pest Control Logbook." },
                { id: "SC-CLEAN-08", description: "Sanitize shopping carts and baskets daily.", priority: "High", riskLevel: "Medium", consequence: "Risk of chemical contamination of food.", proof: "Photo of chemical storage cabinet." },
                { id: "SC-CLEAN-09", description: "Use correct cleaning chemicals for different surfaces.", priority: "High", riskLevel: "Medium", consequence: "Untrained staff can escalate a simple dispute into a major customer service failure.", proof: "Customer's statement." },
                { id: "SC-CLEAN-10", description: "Train staff on spill response procedures.", priority: "High", riskLevel: "High", consequence: "The organization does not learn from its mistakes.", proof: "Minutes of team briefing or training session." }
            ]
        },
        {
            title: "Inbound Supplier QC",
            department: "Receiving",
            frequency: "Per Delivery",
            role: "Storekeeper",
            summary: "A checklist to ensure all incoming goods meet quality and safety standards.",
            icon: "package-check",
            tasks: [
                { id: "RM-01", description: "Verify vendor FSSAI license is valid.", priority: "High", riskLevel: "High", consequence: "Using ingredients from an unlicensed vendor is a major legal violation.", proof: "Vendor File" },
                { id: "RM-02", description: "Inspect delivery vehicle for cleanliness and temperature control.", priority: "High", riskLevel: "High", consequence: "A dirty or warm truck can contaminate the entire delivery.", proof: "Vehicle Inspection Log" },
                { id: "RM-03", description: "Check temperature of perishable goods upon arrival.", priority: "High", riskLevel: "High", consequence: "Accepting goods outside the safe temperature range is a major food safety risk.", proof: "Temperature Log" },
                { id: "RM-04", description: "Reject and document any items that do not meet quality standards.", priority: "High", riskLevel: "High", consequence: "Accepting sub-par ingredients leads to a sub-par final product.", proof: "Rejection Note" },
                { id: "RM-05", description: "Ensure goods are moved to appropriate storage immediately after receipt.", priority: "High", riskLevel: "Medium", consequence: "Leaving perishable items in the 'danger zone' allows bacteria to grow.", proof: "CCTV review" },
                { id: "RM-06", description: "Check for signs of pests in packaging.", priority: "High", riskLevel: "High", consequence: "Can introduce a pest infestation into your facility.", proof: "Visual Inspection Log" },
                { id: "RM-07", description: "Verify that packaging is intact and not damaged.", priority: "High", riskLevel: "High", consequence: "Damaged packaging can lead to contamination.", proof: "Visual Check" },
                { id: "RM-08", description: "Match the delivery challan with the purchase order.", priority: "High", riskLevel: "High", consequence: "Prevents incorrect deliveries and billing errors.", proof: "Document Match" },
                { id: "RM-09", description: "Check the 'best before' or expiry dates of all products.", priority: "High", riskLevel: "High", consequence: "Accepting near-expiry goods leads to waste and potential safety issues.", proof: "Date Check Log" },
                { id: "RM-10", description: "Record all received goods in the inventory system.", priority: "High", riskLevel: "High", consequence: "Inaccurate receiving leads to incorrect inventory levels.", proof: "System Entry" }
            ]
        },
        {
            title: "POS Security & Reconciliation",
            department: "Cash/Finance",
            frequency: "Daily",
            role: "Head Cashier",
            summary: "A checklist for secure and accurate point-of-sale operations.",
            icon: "circle-dollar-sign",
            tasks: [
                { id: "SC-POS-01", description: "Ensure all POS receipts have a clear timestamp.", priority: "High", riskLevel: "Medium", consequence: "Required for handling customer disputes and returns accurately.", proof: "Sample Receipt" },
                { id: "SC-POS-02", description: "Require manager sign-off for all voided transactions or high-value refunds.", priority: "High", riskLevel: "High", consequence: "A key control to prevent internal theft through fraudulent voids/refunds.", proof: "Void/Refund Log" },
                { id: "SC-POS-03", description: "Verify CCTV cameras at billing lanes are operational and have a clear view.", priority: "High", riskLevel: "High", consequence: "Provides crucial evidence in case of cash disputes, theft, or scams.", proof: "CCTV Check Log" },
                { id: "SC-POS-04", description: "Reconcile each cash drawer at the end of every shift.", priority: "High", riskLevel: "High", consequence: "The only way to accurately track cash and identify shortages or overages.", proof: "Shift Reconciliation Report" },
                { id: "SC-POS-05", description: "Check for any signs of tampering on card payment devices.", priority: "High", riskLevel: "High", consequence: "Criminals can install skimmers to steal customer card data.", proof: "Device Inspection Log" },
                { id: "SC-POS-06", description: "Securely store cash in a safe.", priority: "High", riskLevel: "High", consequence: "Leaving cash in the till overnight is a major theft risk.", proof: "Safe Log" },
                { id: "SC-POS-07", description: "Use counterfeit detection for all large cash transactions.", priority: "High", riskLevel: "High", consequence: "Accepting fake currency is a direct financial loss.", proof: "Counterfeit Check" },
                { id: "SC-POS-08", description: "Train cashiers on fraud prevention techniques.", priority: "High", riskLevel: "High", consequence: "Untrained cashiers are easy targets for common retail scams.", proof: "Training Records" },
                { id: "SC-POS-09", description: "Limit cash in drawers to a minimum amount.", priority: "High", riskLevel: "High", consequence: "Minimizes the potential loss during a till snatch or robbery.", proof: "Cash Limit Policy" },
                { id: "SC-POS-10", description: "Investigate any cash shortages or overages immediately.", priority: "High", riskLevel: "High", consequence: "A small discrepancy could be an indicator of a larger, ongoing theft problem.", proof: "Investigation Report" }
            ]
        },
        {
            title: "Bakery & Hot Food Safety",
            department: "F&B",
            frequency: "Daily",
            role: "Bakery/Kitchen Head",
            summary: "HACCP-based checks for in-store bakeries and hot food counters.",
            icon: "utensils",
            tasks: [
                { id: "REST-10", description: "Log completion of daily surface sanitization.", priority: "High", riskLevel: "High", consequence: "Buildup of bacteria on surfaces can lead to cross-contamination.", proof: "Daily Cleaning Log" },
                { id: "WP-09", description: "Perform and log weekly deep clean of kitchen hoods and ducts.", priority: "High", riskLevel: "High", consequence: "Grease buildup in hoods is a major fire hazard.", proof: "Weekly Deep Clean Log" },
                { id: "WP-08", description: "Review and file monthly pest control vendor report.", priority: "High", riskLevel: "High", consequence: "Pest infestations can lead to closure by health authorities and massive brand damage.", proof: "Vendor Report" },
                { id: "WP-07", description: "Check and clean grease traps weekly.", priority: "High", riskLevel: "Medium", consequence: "Blocked grease traps can cause foul odors and drainage blockages.", proof: "Grease Trap Log" },
                { id: "WP-06", description: "Ensure waste bins are emptied and sanitized daily.", priority: "High", riskLevel: "Medium", consequence: "Overflowing bins attract pests and create unsanitary conditions.", proof: "Waste Management Log" },
                { id: "WP-05", description: "Sanitize all food contact surfaces between tasks.", priority: "High", riskLevel: "High", consequence: "Prevents cross-contamination between different food types.", proof: "Visual Audit" },
                { id: "WP-04", description: "Deep clean floors and drains weekly.", priority: "High", riskLevel: "Medium", consequence: "Dirty floors and drains can harbor bacteria and attract pests.", proof: "Floor Cleaning Log" },
                { id: "WP-03", description: "Clean and descale dishwashers monthly.", priority: "High", riskLevel: "Medium", consequence: "Ensures dishes are being sanitized at the correct temperature.", proof: "Dishwasher Log" },
                { id: "WP-02", description: "Check that cleaning chemicals are stored safely and correctly.", priority: "High", riskLevel: "High", consequence: "Improper storage can lead to chemical contamination of food.", proof: "Chemical Store Audit" },
                { id: "WP-01", description: "Train staff on correct cleaning procedures and chemical use.", priority: "High", riskLevel: "High", consequence: "Improper use of chemicals can be ineffective or dangerous.", proof: "Training Log" }
            ]
        }
    ]
};

const facility_management_blueprint: PremiumPack = {
    id: 'facility_management_blueprint',
    title: "Facility Management Blueprint (Enterprise Edition)",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/ab64c7a0-4341-40a8-bb54-871074a22d10',
    category: "Corporate & Tech",
    description: "An enterprise-grade toolkit for COOs and Heads of Corporate Real Estate to manage large-scale facilities like IT campuses, business parks, and corporate offices.",
    icon: "building-2",
    whoIsItFor: ["COOs", "Heads of Corporate Real Estate", "Directors of Facilities", "VPs of Administration", "Data Center Managers"],
    sampleItems: [
        { text: "Implement a daily facility walkthrough for proactive issue identification.", icon: "user-check" },
        { text: "Master vendor performance with preventive maintenance planning and SLA tracking.", icon: "wrench" },
        { text: "Ensure a pristine and safe environment with housekeeping, hygiene, and pest control audits.", icon: "sparkles" },
        { text: "Secure your premises with robust visitor management and access control protocols.", icon: "key-round" },
        { text: "Optimize costs and sustainability through a utilities, energy, and water management system.", icon: "zap" },
        { text: "Guarantee business continuity with critical systems (UPS, HVAC) and redundancy testing.", icon: "cog" }
    ],
    checklists: [
        {
            title: "Daily Facility Walkthrough",
            department: "Facilities",
            frequency: "Daily",
            role: "Facility Manager",
            summary: "A proactive daily patrol to identify and rectify issues before they become major problems.",
            icon: "clipboard-check",
            tasks: [
                { id: "FMB-DFW-01", description: "Check all common areas (lobbies, receptions) for cleanliness and order.", priority: "High", riskLevel: "Low", consequence: "Negative impression on visitors and employees.", proof: "Walkthrough log." },
                { id: "FMB-DFW-02", description: "Inspect all restrooms for cleanliness, functionality, and stock levels.", priority: "High", riskLevel: "Medium", consequence: "Major source of employee complaints.", proof: "Restroom inspection log." },
                { id: "FMB-DFW-03", description: "Verify temperature and air quality in all zones are comfortable.", priority: "Medium", riskLevel: "Low", consequence: "Reduced employee productivity and comfort.", proof: "BMS (Building Management System) reading." },
                { id: "FMB-DFW-04", description: "Check for any safety hazards (e.g., slip/trip hazards, blocked fire exits).", priority: "High", riskLevel: "High", consequence: "Employee/visitor injury, legal liability.", proof: "Hazard report log." },
                { id: "FMB-DFW-05", description: "Inspect exterior of the building for cleanliness, damage, or security concerns.", priority: "Medium", riskLevel: "Medium", consequence: "Poor curb appeal, potential security breaches.", proof: "Exterior inspection log." },
                { id: "FMB-DFW-06", description: "Check functionality of a random sample of access control doors.", priority: "High", riskLevel: "Medium", consequence: "Security system failure.", proof: "Access control system event log." },
                { id: "FMB-DFW-07", description: "Ensure all meeting rooms are tidy and equipment (projectors, phones) is functional.", priority: "Medium", riskLevel: "Low", consequence: "Meeting disruptions, lost productivity.", proof: "Meeting room checklist." },
                { id: "FMB-DFW-08", description: "Check pantries/cafeterias for cleanliness and functioning appliances.", priority: "Medium", riskLevel: "Low", consequence: "Employee dissatisfaction, hygiene risks.", proof: "Pantry inspection log." },
                { id: "FMB-DFW-09", description: "Raise work orders for all identified issues in the CMMS/ticketing system.", priority: "High", riskLevel: "Low", consequence: "Issues are not tracked and resolved.", proof: "Copies of new work orders." },
                { id: "FMB-DFW-10", description: "Follow up on critical open work orders from the previous day.", priority: "High", riskLevel: "Medium", consequence: "Critical failures are not resolved promptly.", proof: "Updated notes in CMMS." }
            ]
        },
        {
            title: "Preventive Maintenance (MEP)",
            department: "Engineering",
            frequency: "Weekly/Monthly",
            role: "Chief Engineer",
            summary: "Scheduled maintenance for Mechanical, Electrical, and Plumbing systems to prevent failures and ensure guest comfort and safety.",
            icon: "wrench",
            tasks: [
                { id: "FMB-MEP-01", description: "Inspect and clean HVAC filters for all major air handling units (AHUs).", priority: "High", riskLevel: "Medium", consequence: "Poor air quality, increased energy costs, system failure.", proof: "Signed maintenance log for each AHU." },
                { id: "FMB-MEP-02", description: "Test backup generator under load for at least 30 minutes.", priority: "High", riskLevel: "High", consequence: "Business shutdown during a power outage.", proof: "Generator test log with load readings." },
                { id: "FMB-MEP-03", description: "Electrical: Test UPS systems and verify battery health.", priority: "High", riskLevel: "High", consequence: "Data corruption/loss in data centers during power flicker.", proof: "UPS test report." },
                { id: "FMB-MEP-04", description: "Plumbing: Check and test all water pumps (booster, transfer, sump).", priority: "Medium", riskLevel: "Medium", consequence: "No water supply, flooding.", proof: "Pump test log." },
                { id: "FMB-MEP-05", description: "Fire Safety: Test a sample of fire alarm call points, sprinklers (flow switch), and smoke detectors.", priority: "High", riskLevel: "High", consequence: "Fire detection/suppression system failure.", proof: "Fire alarm test report." },
                { id: "FMB-MEP-06", description: "Lifts: Perform a monthly safety and performance check (leveling, doors, emergency phone).", priority: "High", riskLevel: "High", consequence: "Elevator entrapment, guest injury.", proof: "Internal lift check log." },
                { id: "FMB-MEP-07", description: "Water Treatment: Check WTP/STP operation and water quality reports.", priority: "High", riskLevel: "Medium", consequence: "Environmental non-compliance, unsafe water.", proof: "Water quality test reports." },
                { id: "FMB-MEP-08", description: "Electrical: Conduct thermal imaging of main electrical panels to detect hotspots (Quarterly).", priority: "High", riskLevel: "High", consequence: "Electrical fire.", proof: "Thermal imaging report." },
                { id: "FMB-MEP-09", description: "Building Management System: Verify all critical system alarms are reporting correctly to the BMS.", priority: "Medium", riskLevel: "Medium", consequence: "Silent failures of critical equipment.", proof: "BMS alarm test log." },
                { id: "FMB-MEP-10", description: "Review and update the schedule of all OEM/vendor Annual Maintenance Contracts (AMCs).", priority: "High", riskLevel: "Low", consequence: "Lapse in critical equipment servicing.", proof: "AMC tracker spreadsheet." }
            ]
        },
        {
            title: "Housekeeping & Hygiene Audit",
            department: "Soft Services",
            frequency: "Weekly",
            role: "Housekeeping Manager",
            summary: "Ensures the highest standards of cleanliness and hygiene across the facility.",
            icon: "sparkles",
            tasks: [
                { id: "FMB-HHA-01", description: "Restroom Audit: Check for cleanliness, odors, fixture functionality, and stock levels.", priority: "High", riskLevel: "Medium", consequence: "Major source of employee complaints.", proof: "Scored restroom audit form." },
                { id: "FMB-HHA-02", description: "Workstation Area: Check for dust on surfaces, clean carpets/floors, and empty bins.", priority: "Medium", riskLevel: "Low", consequence: "Untidy work environment.", proof: "Zone inspection checklist." },
                { id: "FMB-HHA-03", description: "Pantry/Cafeteria: Check for food debris, clean appliances (microwaves, etc.), and sanitized tables.", priority: "High", riskLevel: "Medium", consequence: "Hygiene risk, pest attraction.", proof: "Pantry audit form." },
                { id: "FMB-HHA-04", description: "Glass & Facade: Check for clean windows and facade, especially in public-facing areas.", priority: "Low", riskLevel: "Low", consequence: "Poor corporate image.", proof: "Visual inspection." },
                { id: "FMB-HHA-05", description: "Waste Management: Check for proper segregation and timely disposal of waste.", priority: "Medium", riskLevel: "Medium", consequence: "Environmental non-compliance, odors.", proof: "Waste area inspection log." },
                { id: "FMB-HHA-06", description: "Pest Control: Review pest control logbook and check bait stations.", priority: "High", riskLevel: "High", consequence: "Infestation.", proof: "Pest control vendor's service report." },
                { id: "FMB-HHA-07", description: "Stock Check: Verify inventory of cleaning supplies and consumables.", priority: "Medium", riskLevel: "Low", consequence: "Running out of essential supplies.", proof: "Stock register." },
                { id: "FMB-HHA-08", description: "Staff Uniform & PPE: Check that all housekeeping staff are in clean uniforms and using correct PPE.", priority: "Medium", riskLevel: "Low", consequence: "Unprofessionalism, safety risk to staff.", proof: "Staff inspection notes." },
                { id: "FMB-HHA-09", description: "Review cleaning equipment for functionality and cleanliness.", priority: "Medium", riskLevel: "Low", consequence: "Ineffective cleaning.", proof: "Equipment check log." },
                { id: "FMB-HHA-10", description: "Follow up on any housekeeping-related complaints from the previous week.", priority: "High", riskLevel: "Medium", consequence: "Recurring service failures.", proof: "Complaint tracker update." }
            ]
        },
        {
            title: "Physical Security & Access Control",
            department: "Security",
            frequency: "Weekly",
            role: "Security Manager",
            summary: "An audit to ensure the physical security of the facility is robust and uncompromised.",
            icon: "shield-check",
            tasks: [
                { id: "FMB-PSA-01", description: "Perimeter Audit: Walk the entire facility perimeter to check for breaches in fences/walls.", priority: "High", riskLevel: "High", consequence: "Unauthorized entry.", proof: "Perimeter patrol log." },
                { id: "FMB-PSA-02", description: "CCTV Audit: Verify all cameras are recording, have clear views, and adequate storage.", priority: "High", riskLevel: "High", consequence: "Inability to investigate incidents.", proof: "CCTV health check report." },
                { id: "FMB-PSA-03", description: "Access Control Audit: Review access logs for sensitive areas (e.g., server rooms) for unauthorized entries.", priority: "High", riskLevel: "High", consequence: "Data theft, sabotage.", proof: "Access control log audit report." },
                { id: "FMB-PSA-04", description: "Visitor Management: Audit visitor logs to ensure all visitors were signed in, issued a badge, and escorted.", priority: "Medium", riskLevel: "Medium", consequence: "Unauthorized individuals on premises.", proof: "Sample audit of visitor logs." },
                { id: "FMB-PSA-05", description: "Key Management: Audit the key register to ensure all keys are accounted for.", priority: "High", riskLevel: "High", consequence: "Lost keys can compromise entire facility.", proof: "Key register audit sign-off." },
                { id: "FMB-PSA-06", description: "Lighting Check: Conduct a nighttime audit of all exterior and parking lot lighting.", priority: "Medium", riskLevel: "Medium", consequence: "Dark spots provide cover for criminals.", proof: "Night patrol report." },
                { id: "FMB-PSA-07", description: "Alarm System Test: Test a sample of door alarms, motion detectors, and panic buttons.", priority: "High", riskLevel: "High", consequence: "System failure during a real emergency.", proof: "Alarm test log." },
                { id: "FMB-PSA-08", description: "Guard Tour Verification: Check that guard patrol tours are being completed on schedule.", priority: "High", riskLevel: "Medium", consequence: "Gaps in security coverage.", proof: "Guard tour system report." },
                { id: "FMB-PSA-09", description: "Review incident reports from the past week for any trends or required actions.", priority: "Medium", riskLevel: "Low", consequence: "Failure to learn from security incidents.", proof: "Incident report summary." },
                { id: "FMB-PSA-10", description: "Check that security staff have up-to-date licenses and training certifications.", priority: "High", riskLevel: "Medium", consequence: "Non-compliant or untrained security force.", proof: "Review of HR training records." }
            ]
        },
        {
            title: "Vendor & Contract Management",
            department: "Administration",
            frequency: "Monthly",
            role: "Admin Manager",
            summary: "Ensures all vendors are meeting their SLAs and contracts are up-to-date.",
            icon: "handshake",
            tasks: [
                { id: "FMB-VCM-01", description: "Review performance of critical vendors (e.g., housekeeping, security, M&E) against their SLAs.", priority: "High", riskLevel: "Medium", consequence: "Paying for sub-par service.", proof: "Monthly vendor performance scorecard." },
                { id: "FMB-VCM-02", description: "Verify all vendor invoices against work orders or service reports before processing payment.", priority: "High", riskLevel: "High", consequence: "Paying for work not done or over-billing.", proof: "Signed-off invoices." },
                { id: "FMB-VCM-03", description: "Ensure all vendors have submitted required compliance documents (e.g., insurance, licenses).", priority: "High", riskLevel: "High", consequence: "Liability risk from non-compliant vendors.", proof: "Vendor compliance file audit." },
                { id: "FMB-VCM-04", description: "Track all contract renewal dates and start renewal process 90 days in advance.", priority: "High", riskLevel: "Medium", consequence: "Lapse in critical services.", proof: "Contract management tracker." },
                { id: "FMB-VCM-05", description: "Conduct a monthly meeting with key vendor account managers.", priority: "Medium", riskLevel: "Low", consequence: "Poor relationship, unresolved issues fester.", proof: "Minutes of meeting." },
                { id: "FMB-VCM-06", description: "Issue formal non-conformance reports for any SLA failures.", priority: "Medium", riskLevel: "Medium", consequence: "SLA failures are not officially documented and penalized.", proof: "Copies of non-conformance reports." },
                { id: "FMB-VCM-07", description: "Onboard new vendors with a formal induction on site rules, safety, and procedures.", priority: "High", riskLevel: "Medium", consequence: "Vendors creating safety or security risks.", proof: "Signed vendor induction form." },
                { id: "FMB-VCM-08", description: "Review and approve all vendor work permits before allowing work to start.", priority: "High", riskLevel: "High", consequence: "Unsafe or disruptive work being carried out.", proof: "Signed work permit." }
            ]
        }
    ]
};

const corporate_legal_compliance_starter_kit: PremiumPack = {
    id: 'corporate_legal_compliance_starter_kit',
    title: "Corporate Legal & Compliance Starter Kit",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/721ef593-433a-4d89-b72b-7d4aac27363f',
    category: "Corporate & Tech",
    description: "An essential toolkit for founders and managers to embed basic legal and compliance checks into core business operations, reducing risk without needing a law degree.",
    icon: "file-lock",
    whoIsItFor: ["Founders & CEOs", "HR Managers", "Operations Heads", "Non-lawyer Managers", "Directors"],
    sampleItems: [
        { text: "Never miss a deadline with a master statutory filing calendar and automated reminders.", icon: "calendar-days" },
        { text: "Ensure company policies are consistently enforced with a robust management and employee acknowledgement system.", icon: "user-check" },
        { text: "Minimize legal risk with a structured contract lifecycle management process and clause checklist.", icon: "file-check" },
        { text: "Proactively identify and fix compliance gaps with an internal audit and remediation (CAPA) workflow.", icon: "bug" },
        { text: "Foster a safe and ethical workplace with a formal whistleblowing and investigation process.", icon: "siren" },
        { text: "Improve corporate governance with a professional system for board meeting preparation and minute taking.", icon: "briefcase-business" }
    ],
    checklists: [
        {
            title: "Statutory Filing Calendar",
            department: "Legal/Compliance",
            frequency: "Monthly",
            role: "Compliance Officer",
            summary: "Tracks all mandatory government filings to ensure deadlines are never missed.",
            icon: "calendar-days",
            tasks: [
                { id: "CLC-SFC-01", description: "Update calendar with all ROC filing deadlines for the quarter.", priority: "High", riskLevel: "High", consequence: "Penalties, company strike-off.", proof: "Updated calendar file." },
                { id: "CLC-SFC-02", description: "Update calendar with all Income Tax filing deadlines (TDS, Advance Tax, etc.).", priority: "High", riskLevel: "High", consequence: "Interest and penalties.", proof: "Updated calendar file." },
                { id: "CLC-SFC-03", description: "Update calendar with all GST filing deadlines (GSTR-1, 3B, etc.).", priority: "High", riskLevel: "High", consequence: "Penalties, loss of input tax credit.", proof: "Updated calendar file." },
                { id: "CLC-SFC-04", description: "Update calendar with all Labour Law filing deadlines (PF, ESI, PT).", priority: "High", riskLevel: "Medium", consequence: "Penalties, employee disputes.", proof: "Updated calendar file." },
                { id: "CLC-SFC-05", description: "Assign responsibility for each filing to a specific person.", priority: "High", riskLevel: "Low", consequence: "Lack of ownership, missed deadlines.", proof: "Updated calendar file with owner names." },
                { id: "CLC-SFC-06", description: "Send reminders 15 days and 3 days before each deadline.", priority: "Medium", riskLevel: "Low", consequence: "Deadlines forgotten.", proof: "Copies of reminder emails." },
                { id: "CLC-SFC-07", description: "Track and confirm completion of each filing.", priority: "High", riskLevel: "Medium", consequence: "Assuming a filing is done when it is not.", proof: "Filing acknowledgement receipts." },
                { id: "CLC-SFC-08", description: "Conduct a quarterly review of the calendar for any changes in laws or dates.", priority: "Medium", riskLevel: "Medium", consequence: "Using an outdated compliance calendar.", proof: "Minutes of quarterly review meeting." }
            ]
        },
        {
            title: "Policy Management Lifecycle",
            department: "HR/Compliance",
            frequency: "Per Policy",
            role: "HR Manager",
            summary: "A framework for drafting, approving, and rolling out company policies.",
            icon: "file-text",
            tasks: [
                { id: "CLC-PML-01", description: "Draft new policy with clear objectives, scope, and procedures.", priority: "High", riskLevel: "Medium", consequence: "Unclear policy causes confusion.", proof: "Draft policy document." },
                { id: "CLC-PML-02", description: "Review draft policy with legal and management for approval.", priority: "High", riskLevel: "High", consequence: "Policy has legal flaws or is operationally unfeasible.", proof: "Email approvals from department heads." },
                { id: "CLC-PML-03", description: "Communicate the new/updated policy to all employees via email and company portal.", priority: "High", riskLevel: "Medium", consequence: "Employees are unaware of new rules.", proof: "Copy of announcement email." },
                { id: "CLC-PML-04", description: "Obtain digital or physical acknowledgement from every employee.", priority: "High", riskLevel: "High", consequence: "Inability to prove an employee was aware of the policy, legal risk.", proof: "Signed acknowledgement forms or digital log." },
                { id: "CLC-PML-05", description: "Conduct training sessions for significant policy changes.", priority: "Medium", riskLevel: "Medium", consequence: "Employees do not understand the nuances of the policy.", proof: "Training attendance sheets." },
                { id: "CLC-PML-06", description: "Schedule an annual review for every policy to ensure it is still relevant and compliant.", priority: "High", riskLevel: "Medium", consequence: "Outdated policies expose the company to new risks.", proof: "Policy review schedule." }
            ]
        },
        {
            title: "Contract Lifecycle Management",
            department: "Legal",
            frequency: "Per Contract",
            role: "Legal Counsel",
            summary: "Manages a contract from drafting to renewal or termination, minimizing risk.",
            icon: "file-check",
            tasks: [
                { id: "CLC-CLM-01", description: "Draft contract using approved company templates.", priority: "High", riskLevel: "High", consequence: "Using unvetted clauses, legal exposure.", proof: "Draft contract." },
                { id: "CLC-CLM-02", description: "Review contract with business owner for commercial terms.", priority: "High", riskLevel: "Medium", consequence: "Commercial terms do not match business needs.", proof: "Email approval from business owner." },
                { id: "CLC-CLM-03", description: "Negotiate terms with the other party, keeping a log of all changes.", priority: "High", riskLevel: "High", consequence: "Unfavorable terms, future disputes.", proof: "Version history of the contract document." },
                { id: "CLC-CLM-04", description: "Obtain final approvals from all required internal stakeholders before signing.", priority: "High", riskLevel: "High", consequence: "Unauthorized person agrees to a contract.", proof: "Final approval email chain." },
                { id: "CLC-CLM-05", description: "Execute the contract (signing by authorized signatories).", priority: "High", riskLevel: "Low", consequence: "Contract is not legally binding.", proof: "Scanned copy of the fully signed contract." },
                { id: "CLC-CLM-06", description: "Store the executed contract in a central, secure repository.", priority: "High", riskLevel: "Medium", consequence: "Inability to find contract when needed, lost documents.", proof: "Entry in contract management system." },
                { id: "CLC-CLM-07", description: "Abstract key dates (renewal, termination notice) and obligations into a tracking system.", priority: "High", riskLevel: "High", consequence: "Accidental auto-renewal of an unwanted contract, missed obligations.", proof: "Screenshot from tracking system." },
                { id: "CLC-CLM-08", description: "Review contract performance before renewal.", priority: "Medium", riskLevel: "Medium", consequence: "Renewing a bad contract.", proof: "Performance review notes." }
            ]
        }
    ]
};

const enterprise_risk_cybersecurity_pack: PremiumPack = {
    id: 'enterprise_risk_cybersecurity_pack',
    title: "Enterprise Risk & Cybersecurity Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/6418c3d7-2101-4433-a337-2d4314c4059a',
    category: "Corporate & Tech",
    description: "An advanced toolkit for CISOs and compliance officers to manage modern enterprise risks, from AI governance and data privacy to cloud security and incident response.",
    icon: "shield-check",
    whoIsItFor: ["CISOs", "CTOs", "Data Protection Officers (DPOs)", "Heads of Risk & Compliance", "IT Directors"],
    sampleItems: [
        { text: "Enforce the principle of least privilege with quarterly user access reviews.", icon: "key-round" },
        { text: "Stay ahead of threats with a structured workflow for vulnerability scanning and patch management.", icon: "bug" },
        { text: "Build resilience with proven playbooks for Business Continuity and Disaster Recovery (BC/DR) drills.", icon: "database-zap" },
        { text: "Master crisis management with step-by-step incident response and digital forensics playbooks.", icon: "siren" },
        { text: "Prevent costly data leaks by continuously monitoring and correcting your cloud security posture (CSPM).", icon: "cloud" },
        { text: "De-risk your supply chain with a formal security assessment process for all third-party vendors.", icon: "handshake" }
    ],
    checklists: [
        {
            title: 'User Access Review',
            department: 'IT Security',
            frequency: 'Quarterly',
            role: 'IT Security Manager',
            summary: 'A quarterly review to enforce the principle of least privilege and remove unnecessary access rights.',
            icon: 'users',
            tasks: [
                {id: 'ERC-UAR-01', description: 'Generate a list of all active users with access to critical systems.', priority: 'High', riskLevel: 'High', consequence: 'Unauthorized access goes undetected.', proof: 'User access report from Active Directory/Okta.'},
                {id: 'ERC-UAR-02', description: 'Send access lists to respective department managers for review and approval.', priority: 'High', riskLevel: 'Medium', consequence: 'Managers are unaware of their team\'s access levels.', proof: 'Email sent to managers with access lists.'},
                {id: 'ERC-UAR-03', description: 'Verify that all user access is justified by current job role.', priority: 'High', riskLevel: 'High', consequence: 'Ex-employees or transferred staff retain sensitive access.', proof: 'Manager-signed access review forms.'},
                {id: 'ERC-UAR-04', description: 'Review and validate all privileged/administrator accounts.', priority: 'High', riskLevel: 'High', consequence: 'Compromise of an admin account can be catastrophic.', proof: 'Privileged access review report.'},
                {id: 'ERC-UAR-05', description: 'Revoke all unnecessary or unapproved access within 48 hours.', priority: 'High', riskLevel: 'High', consequence: 'Known unnecessary access is not removed promptly.', proof: 'Service desk tickets showing access revocation.'},
                {id: 'ERC-UAR-06', description: 'Audit third-party vendor access to internal systems.', priority: 'High', riskLevel: 'High', consequence: 'A vendor breach becomes an internal breach.', proof: 'Vendor access review checklist.'},
                {id: 'ERC-UAR-07', description: 'Ensure all terminated employee accounts were disabled on their last day of employment.', priority: 'High', riskLevel: 'High', consequence: 'Disgruntled ex-employees retain access.', proof: 'Cross-reference termination list with HR.'},
                {id: 'ERC-UAR-08', description: 'Document the completion of the access review cycle.', priority: 'Medium', riskLevel: 'Low', consequence: 'No audit trail for compliance.', proof: 'Signed summary report of the access review.'}
            ]
        },
        {
            title: 'Vulnerability & Patch Management',
            department: 'IT Operations',
            frequency: 'Weekly',
            role: 'System Administrator',
            summary: 'A structured workflow to identify, prioritize, and remediate security vulnerabilities in systems and software.',
            icon: 'bug',
            tasks: [
                {id: 'ERC-VPM-01', description: 'Run authenticated vulnerability scans on all servers and workstations.', priority: 'High', riskLevel: 'High', consequence: 'Unknown vulnerabilities leave systems exposed to attack.', proof: 'Vulnerability scan report (e.g., Nessus, Qualys).'},
                {id: 'ERC-VPM-02', description: 'Review and prioritize all new "Critical" and "High" severity vulnerabilities.', priority: 'High', riskLevel: 'High', consequence: 'Focusing on low-risk issues while critical ones remain open.', proof: 'Prioritized vulnerability list.'},
                {id: 'ERC-VPM-03', description: 'Create change requests/tickets for patching all critical vulnerabilities.', priority: 'High', riskLevel: 'Medium', consequence: 'No formal tracking of remediation work.', proof: 'Service desk tickets for patching.'},
                {id: 'ERC-VPM-04', description: 'Test patches in a non-production environment before deploying to production.', priority: 'Medium', riskLevel: 'Medium', consequence: 'Patches breaking critical applications.', proof: 'Patch test results document.'},
                {id: 'ERC-VPM-05', description: 'Deploy patches for critical vulnerabilities within the defined SLA (e.g., 14 days).', priority: 'High', riskLevel: 'High', consequence: 'Leaving a known critical entry point open for too long.', proof: 'Patch deployment logs.'},
                {id: 'ERC-VPM-06', description: 'Run a follow-up scan to verify that patches were successfully applied.', priority: 'High', riskLevel: 'Medium', consequence: 'Assuming a patch was successful when it failed.', proof: 'Post-patch verification scan report.'},
                {id: 'ERC-VPM-07', description: 'Document any exceptions where a patch cannot be applied and implement mitigating controls.', priority: 'High', riskLevel: 'High', consequence: 'Unpatched legacy systems without any other protection.', proof: 'Risk acceptance form signed by CISO.'},
                {id: 'ERC-VPM-08', description: 'Report on patching status and vulnerability trends to management.', priority: 'Medium', riskLevel: 'Low', consequence: 'Lack of visibility into the security posture.', proof: 'Monthly patch compliance report.'}
            ]
        }
    ]
};

const healthcare_and_hospital_operations: PremiumPack = {
    id: 'healthcare_and_hospital_operations',
    title: "Healthcare & Hospital Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_OfhYpYqLzL0zZz',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/129cb25a-b177-4a6d-a1bf-d8fafc24a09d',
    category: "Healthcare",
    description: "A comprehensive NABH & JCI-aligned toolkit for hospital administrators to ensure patient safety, clinical quality, and operational excellence.",
    icon: "hospital",
    badgeText: "Clinical Grade",
    badgeVariant: "destructive",
    bestseller: true,
    whoIsItFor: ["Hospital COOs & CEOs", "Medical Directors", "Quality Assurance Heads", "Nursing Superintendents"],
    sampleItems: [
        { text: "Prevent 'never events' with a WHO-aligned Surgical Safety Checklist.", icon: "stethoscope" },
        { text: "Combat hospital-acquired infections (HAIs) with rigorous infection control and sterilization (CSSD) audits.", icon: "syringe" },
        { text: "Eliminate medication errors using SOPs for high-alert medication dispensing and administration.", icon: "pill" },
        { text: "Enhance patient safety with a robust protocol for patient identification at every touchpoint.", icon: "user-check" },
        { text: "Ensure regulatory compliance with a systematic process for biomedical waste management.", icon: "recycle" },
        { text: "Prepare for any crisis with emergency code management and mock drill scenarios.", icon: "ambulance" }
    ],
    checklists: [
        {
            title: "Patient Identification Protocol",
            department: "All Clinical",
            frequency: "Per Interaction",
            role: "All Clinical Staff",
            summary: "Ensures correct patient identification before any procedure, medication, or test to prevent 'never events'. Aligned with JCI & NABH standards.",
            icon: "user-check",
            tasks: [
                { id: "HCO-PID-01", description: "Use at least two patient identifiers (e.g., full name and MRN/hospital number). Do not use room number.", priority: "High", riskLevel: "High", consequence: "Wrong-patient procedure or medication error.", proof: "Verbal confirmation documented in notes." },
                { id: "HCO-PID-02", description: "Ask the patient to state their full name and date of birth (if able). Do not ask leading questions like 'Are you Mr. Smith?'", priority: "High", riskLevel: "High", consequence: "Treating the wrong patient due to patient confirmation bias.", proof: "Patient verbal confirmation noted in chart." },
                { id: "HCO-PID-03", description: "Cross-reference patient identifiers with the patient's wristband before any intervention.", priority: "High", riskLevel: "High", consequence: "Failure to catch an identification error at the last moment.", proof: "Visual check documented in chart (e.g., 'Wristband verified')." },
                { id: "HCO-PID-04", description: "Verify patient ID before administering any medication, including IV fluids.", priority: "High", riskLevel: "High", consequence: "Medication error, adverse drug reaction, potential fatality.", proof: "MAR (Medication Administration Record) sign-off with witness for high-alert meds." },
                { id: "HCO-PID-05", description: "Verify patient ID before drawing blood or collecting any other laboratory specimen.", priority: "High", riskLevel: "High", consequence: "Misdiagnosis, incorrect treatment based on wrong lab results.", proof: "Specimen label cross-checked and signed/initialed by phlebotomist." },
                { id: "HCO-PID-06", description: "Verify patient ID before any diagnostic procedure (e.g., X-ray, CT scan, endoscopy).", priority: "High", riskLevel: "High", consequence: "Performing a procedure on the wrong patient.", proof: "Technician's log with patient verification check." },
                { id: "HCO-PID-07", description: "Label all specimens in the presence of the patient, before leaving the bedside.", priority: "High", riskLevel: "High", consequence: "Specimen mix-up, incorrect lab results, potentially catastrophic treatment decisions.", proof: "Labeled specimen tube/container verified against wristband." },
                { id: "HCO-PID-08", description: "Use barcode scanning for patient ID, medication, and specimen administration where available.", priority: "High", riskLevel: "Medium", consequence: "Reduces human error in identification, but does not replace verbal checks.", proof: "System log of barcode scan." }
            ]
        },
        {
            title: "Surgical Safety Checklist (WHO Aligned)",
            department: "Surgery/OT",
            frequency: "Per Procedure",
            role: "Surgical Team",
            summary: "A three-phase checklist (Sign In, Time Out, Sign Out) to prevent common surgical errors and improve teamwork.",
            icon: "file-check",
            tasks: [
                { id: "HCO-SSC-01", description: "SIGN IN (Before Induction): Confirm patient identity, procedure, site, and consent form.", priority: "High", riskLevel: "High", consequence: "Wrong-patient or wrong-site surgery.", proof: "Signed checklist." },
                { id: "HCO-SSC-02", description: "SIGN IN: Mark the surgical site (must be done by the operating surgeon).", priority: "High", riskLevel: "High", consequence: "Wrong-site surgery.", proof: "Visual confirmation of surgical mark on patient." },
                { id: "HCO-SSC-03", description: "SIGN IN: Anesthesia safety check (machine, medications, airway equipment) completed.", priority: "High", riskLevel: "High", consequence: "Anesthetic complications, patient harm.", proof: "Anesthesiologist confirmation on checklist." },
                { id: "HCO-SSC-04", description: "TIME OUT (Before Incision): All team members introduce themselves by name and role.", priority: "Medium", riskLevel: "Low", consequence: "Poor team communication and situational awareness.", proof: "Verbal confirmation." },
                { id: "HCO-SSC-05", description: "TIME OUT: Entire team verbally confirms patient name, procedure, and incision site.", priority: "High", riskLevel: "High", consequence: "Final opportunity to prevent a catastrophic error.", proof: "Verbal confirmation documented by circulating nurse." },
                { id: "HCO-SSC-06", description: "TIME OUT: Review of critical events, anticipated blood loss, and antibiotic prophylaxis.", priority: "High", riskLevel: "Medium", consequence: "Team unprepared for complications or known patient risks.", proof: "Surgeon and Anesthesiologist verbal briefing." },
                { id: "HCO-SSC-07", description: "SIGN OUT (Before Patient Leaves OR): Nurse verbally confirms instrument, sponge, and needle counts are correct.", priority: "High", riskLevel: "High", consequence: "Retained surgical item, requiring re-operation.", proof: "Count sheet verified and signed by two nurses." },
                { id: "HCO-SSC-08", description: "Confirm specimen labeling (specimen name, patient name).", priority: "High", riskLevel: "High", consequence: "Incorrect diagnosis, wrong post-op treatment.", proof: "Visual confirmation of labeled specimen by surgeon and nurse." },
                { id: "HCO-SSC-09", description: "SIGN OUT: Discuss key concerns for recovery and post-operative care.", priority: "Medium", riskLevel: "Medium", consequence: "Poor handover to recovery team, post-op complications.", proof: "Surgeon/Anesthesiologist debrief documented." }
            ]
        },
        {
            title: "High-Alert Medication Protocol",
            department: "Pharmacy/Nursing",
            frequency: "Per Administration",
            role: "Duty Manager / GR Executive",
            summary: "A structured process to handle guest complaints effectively, turning negative experiences into opportunities for loyalty.",
            icon: "pill",
            tasks: [
                { id: "HCO-HAM-01", description: "Independent Double-Check: Two qualified staff members must separately check the medication, dose, and patient ID before administration.", priority: "High", riskLevel: "High", consequence: "Potentially fatal medication error.", proof: "Dual signature on the MAR." },
                { id: "HCO-HAM-02", description: "Use standardized concentrations and labeling for all high-alert infusions.", priority: "High", riskLevel: "High", consequence: "Calculation errors leading to massive overdose.", proof: "Pharmacy compounding log and final product label." },
                { id: "HCO-HAM-03", description: "Separate/segregate high-alert medications from other drugs in storage (e.g., dedicated shelf, 'High-Alert' sticker).", priority: "Medium", riskLevel: "Medium", consequence: "Look-alike/sound-alike errors during drug retrieval.", proof: "Photo of segregated storage." },
                { id: "HCO-HAM-04", description: "Use 'smart' infusion pumps with dose error reduction software (DERS) and hard limits enabled.", priority: "High", riskLevel: "High", consequence: "Programming errors leading to incorrect infusion rates.", proof: "Pump programming log/screenshot." },
                { id: "HCO-HAM-05", description: "Provide enhanced patient and family education on their high-alert medication, including side effects to watch for.", priority: "Medium", riskLevel: "Medium", consequence: "Patient non-compliance or failure to report side effects.", proof: "Signed patient education form." },
                { id: "HCO-HAM-06", description: "Clearly label all high-alert medication lines from pump to patient to avoid misconnections.", priority: "High", riskLevel: "High", consequence: "Accidental bolus or mixing of incompatible drugs via IV lines.", proof: "Visual check of labeled IV lines by two nurses." }
            ]
        },
        {
            title: "Infection Control (Hand Hygiene Audit)",
            department: "Quality/Infection Control",
            frequency: "Weekly",
            role: "Duty Manager / GR Executive",
            summary: "A structured process to handle guest complaints effectively, turning negative experiences into opportunities for loyalty.",
            icon: "shield",
            tasks: [
                { id: "HCO-HC-01", description: "Observe a sample of 20 staff members for hand hygiene compliance before touching a patient.", priority: "High", riskLevel: "High", consequence: "Transmission of environmental pathogens to patients.", proof: "Hand hygiene audit tool entries." },
                { id: "HCO-HC-02", description: "Observe compliance before a clean/aseptic procedure (e.g., IV insertion, wound dressing).", priority: "High", riskLevel: "High", consequence: "Introduction of infection into a sterile site.", proof: "Hand hygiene audit tool entries." },
                { id: "HCO-HC-03", description: "Observe compliance after body fluid exposure risk.", priority: "High", riskLevel: "High", consequence: "Self-contamination of healthcare worker.", proof: "Hand hygiene audit tool entries." },
                { id: "HCO-HC-04", description: "Observe compliance after touching a patient.", priority: "High", riskLevel: "High", consequence: "Spread of patient's flora to the environment.", proof: "Hand hygiene audit tool entries." },
                { id: "HCO-HC-05", description: "Observe compliance after touching patient surroundings.", priority: "High", riskLevel: "High", consequence: "Contamination of the healthcare environment and other patients.", proof: "Hand hygiene audit tool entries." },
                { id: "HCO-HC-06", description: "Check that alcohol-based hand rub dispensers are available, functional, and not expired at all points of care.", priority: "High", riskLevel: "Medium", consequence: "Staff unable to perform hand hygiene easily, leading to non-compliance.", proof: "Audit checklist of dispenser locations." },
                { id: "HCO-HC-07", description: "Ensure staff are 'bare below the elbows' (no watches, rings with stones) in all clinical areas.", priority: "Medium", riskLevel: "Medium", consequence: "Jewelry harbors microorganisms and impedes effective hand hygiene.", proof: "Direct observation during audit." },
                { id: "HCO-HC-08", description: "Calculate and post hand hygiene compliance rates for each ward to provide feedback.", priority: "Medium", riskLevel: "Low", consequence: "Lack of feedback and accountability for wards.", proof: "Posted compliance dashboard/report." }
            ]
        },
        {
            title: "Emergency Code Management (Code Blue)",
            department: "Emergency/All",
            frequency: "Daily (Checks) / Monthly (Drills)",
            role: "Duty Manager / GR Executive",
            summary: "A structured process to handle guest complaints effectively, turning negative experiences into opportunities for loyalty.",
            icon: "heart-pulse",
            tasks: [
                { id: "SEC-FS-01", description: "Check crash cart daily: defibrillator charge, medication expiry, and integrity of all equipment.", priority: "High", riskLevel: "High", consequence: "Life-saving equipment fails during an emergency, leading to patient death.", proof: "Daily crash cart checklist signed by nurse." },
                { id: "SEC-FS-02", description: "Conduct monthly mock Code Blue drills in different hospital locations (e.g., ward, cafeteria, lobby).", priority: "High", riskLevel: "High", consequence: "Disorganized response, delayed CPR/defibrillation in a real event.", proof: "Mock drill debriefing report with timings and corrective actions." },
                { id: "SEC-FS-03", description: "Verify that all clinical staff hold a valid Basic Life Support (BLS) and/or Advanced Cardiac Life Support (ACLS) certification.", priority: "High", riskLevel: "High", consequence: "Inability to initiate immediate and effective CPR.", proof: "Review of staff training records in HR." },
                { id: "SEC-FS-04", description: "During a code, team leader clearly assigns roles (e.g., compressor, airway manager, recorder, medication nurse).", priority: "High", riskLevel: "Medium", consequence: "Chaotic scene, missed interventions, poor team dynamics.", proof: "Post-code debrief form." },
                { id: "SEC-FS-05", description: "Document all events, medications, timings, and vital signs on the official Code Blue record.", priority: "High", riskLevel: "Medium", consequence: "Inaccurate record for clinical review and medico-legal purposes.", proof: "Completed Code Blue record sheet." },
                { id: "SEC-FS-06", description: "Ensure crowd control is implemented and the patient's family is managed compassionately by a designated person.", priority: "Medium", riskLevel: "Low", consequence: "Added distress to family, interference with medical team.", proof: "Notes from social worker/security in the patient file." }
            ]
        },
        {
            title: "Biomedical Waste Management",
            department: "Housekeeping/Infection Control",
            frequency: "Daily",
            role: "Duty Manager / GR Executive",
            summary: "A structured process to handle guest complaints effectively, turning negative experiences into opportunities for loyalty.",
            icon: "recycle",
            tasks: [
                { id: "LOTO-01", description: "Verify waste is correctly segregated into color-coded bins (Yellow, Red, Blue, White) at the point of generation.", priority: "High", riskLevel: "High", consequence: "Needlestick injury, environmental contamination, severe legal penalties.", proof: "Daily round checklist with photos of bins." },
                { id: "LOTO-02", description: "Ensure all waste bags are sealed securely (e.g., with a zip-tie) when 3/4 full.", priority: "Medium", riskLevel: "Medium", consequence: "Spillage during transport, exposure risk to staff.", proof: "Visual check during collection rounds." },
                { id: "LOTO-03", description: "Check that sharps containers are not overfilled (below the marked line) and are properly sealed for disposal.", priority: "High", riskLevel: "High", consequence: "High risk of needlestick injuries to housekeeping staff.", proof: "Daily round checklist." },
                { id: "LOTO-04", description: "Transport waste in dedicated, covered trolleys along designated routes and service elevators.", priority: "High", riskLevel: "Medium", consequence: "Contamination of public areas and elevators.", proof: "CCTV review of waste transport." },
                { id: "LOTO-05", description: "Weigh and log all waste bags by category before handing over to the disposal vendor.", priority: "High", riskLevel: "Medium", consequence: "Inability to track waste generation, non-compliance with regulatory reporting.", proof: "BMW disposal logbook signed by vendor." },
                { id: "LOTO-06", description: "Verify that the central BMW storage area is secure, locked, clean, and accessible only to authorized personnel.", priority: "High", riskLevel: "High", consequence: "Unauthorized access, pest infestation, public health risk.", proof: "Photo of secure storage area." },
                { id: "LOTO-07", description: "Ensure all staff handling waste wear appropriate Personal Protective Equipment (PPE), including heavy-duty gloves, masks, and boots.", priority: "High", riskLevel: "High", consequence: "Occupational exposure to infectious agents and injuries.", proof: "Direct observation during audit." }
            ]
        },
        {
            title: "Central Sterile Supply Dept (CSSD) Audit",
            department: "CSSD/Infection Control",
            frequency: "Weekly",
            role: "CSSD Supervisor",
            summary: "Ensures surgical instruments are properly cleaned, disinfected, sterilized, and stored to prevent Surgical Site Infections (SSIs).",
            icon: "gear",
            tasks: [
                { id: "HSE-01", description: "Verify washer-disinfector performance with daily cleaning efficacy tests (e.g., TOSI strips).", priority: "High", riskLevel: "High", consequence: "Bioburden remains on instruments, sterilization failure.", proof: "Test results logbook." },
                { id: "HSE-02", description: "Check autoclave performance using daily Bowie-Dick tests (for pre-vacuum sterilizers) and weekly biological indicators.", priority: "High", riskLevel: "High", consequence: "Catastrophic sterilization failure, high risk of SSIs.", proof: "Autoclave logbook with attached test strips/results." },
                { id: "HSE-03", description: "Ensure sterile packs are correctly wrapped, sealed, and labeled with sterilizer number, cycle number, and expiry date.", priority: "High", riskLevel: "Medium", consequence: "Compromised sterility, inability to trace a faulty batch.", proof: "Audit of sterile packs in storage." },
                { id: "HSE-04", description: "Maintain strict one-way workflow from dirty (decontamination) to clean (assembly) to sterile (storage) zones.", priority: "High", riskLevel: "High", consequence: "Cross-contamination of sterile instruments.", proof: "Observation of staff movement and workflow." },
                { id: "HSE-05", description: "Inspect instruments under magnification for cleanliness and damage before packing.", priority: "High", riskLevel: "Medium", consequence: "Using damaged or dirty instruments in surgery.", proof: "QC check log at packing station." },
                { id: "HSE-06", description: "Ensure staff in decontamination area wear full PPE (fluid-resistant gown, gloves, face shield).", priority: "High", riskLevel: "High", consequence: "Staff exposure to bloodborne pathogens.", proof: "Direct observation during audit." }
            ]
        }
    ]
};

const school_operations_pack: PremiumPack = {
    id: 'school_operations_pack',
    title: "School Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/e74bd8ac-23cb-4993-bdeb-bac9dbe9cd67',
    category: "Education",
    description: "A comprehensive safety and compliance toolkit for school principals and administrators to ensure a secure and well-managed learning environment.",
    icon: "school",
    whoIsItFor: ["School Principals", "Vice-Principals", "Heads of Administration", "School Trustees", "Operations Managers"],
    sampleItems: [
        { text: "Ensure student safety with robust bus transport, drop-off, and pickup SOPs.", icon: "bus" },
        { text: "Prevent unauthorized access with a strict visitor management and gate security protocol.", icon: "key-round" },
        { text: "Maintain a safe campus with daily playground, classroom, and facility safety audits.", icon: "shield" },
        { text: "Prepare for emergencies with comprehensive fire safety drills and first-aid response plans.", icon: "siren" },
        { text: "Protect students with a legally compliant staff background verification and hiring process.", icon: "user-check" },
        { text: "Ensure a smooth and fair admissions process with a standardized enrolment checklist.", icon: "user-plus" },
        { text: "Safeguard academic integrity with a secure examination and report card generation process.", icon: "graduation-cap" }
    ],
    checklists: [
        {
            title: "Student Transport & Bus Safety",
            department: "Transport",
            frequency: "Daily",
            role: "Transport Manager",
            summary: "Ensures the safe transportation of students to and from school.",
            icon: "bus",
            tasks: [
                { id: "SOP-ST-01", description: "Driver performs pre-trip inspection of the bus (tires, lights, brakes).", priority: "High", riskLevel: "High", consequence: "Accident due to mechanical failure.", proof: "Signed pre-trip inspection log." },
                { id: "SOP-ST-02", description: "Verify that the GPS tracker and CCTV cameras on the bus are operational.", priority: "High", riskLevel: "Medium", consequence: "Inability to monitor bus location or incidents.", proof: "System dashboard check." },
                { id: "SOP-ST-03", description: "Ensure a female attendant is on board for all routes with female students (as per regulations).", priority: "High", riskLevel: "High", consequence: "Regulatory non-compliance, student safety risk.", proof: "Attendant duty roster." },
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
};

const university_college_ops: PremiumPack = {
    id: 'university_college_ops',
    title: "University & College Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/14108350-9e78-4fbc-87cf-a41b9e4ae207',
    category: "Education",
    description: "A comprehensive compliance and safety pack for managing large educational campuses, from hostels and labs to transport and events.",
    icon: "graduation-cap",
    whoIsItFor: ["Deans & Directors", "Registrars", "Heads of Administration", "Chief Wardens", "Campus Security Heads"],
    sampleItems: [
        { text: "Ensure student safety with hostel entry/exit protocols and room inspections.", icon: "home" },
        { text: "Prevent accidents and misuse with rigorous lab safety, chemical handling, and equipment audits.", icon: "test-tube" },
        { text: "Safeguard campus events with protocols for crowd management, permissions, and emergency response.", icon: "theater" },
        { text: "Maintain a compliant campus with audits for fire safety, accessibility (Divyangjan), and infrastructure.", icon: "building-2" },
        { text: "Mitigate foodborne illness risks in large messes with HACCP-aligned kitchen hygiene SOPs.", icon: "utensils" },
        { text: "Protect against cyber threats with IT policies for network access, data privacy, and acceptable use.", icon: "shield" }
    ],
    checklists: [
        {
            title: "Hostel Security & Entry Protocol",
            department: "Hostel/Security",
            frequency: "Daily",
            role: "Chief Warden",
            summary: "Ensures student safety, hostel security, and room maintenance.",
            icon: "home",
            tasks: [
                { id: "UCO-HR-01", description: "Maintain a log of all entries and exits from the hostel.", priority: "High", riskLevel: "High", consequence: "Inability to track who is in the building during an emergency or security incident.", proof: "Entry/Exit Register." },
                { id: "UCO-HR-02", description: "Verify the identity of all guests and ensure they sign in.", priority: "High", riskLevel: "High", consequence: "Allows unauthorized individuals to gain access, posing a security risk to students.", proof: "Guest Register." },
                { id: "UCO-HR-03", description: "Conduct surprise room checks for prohibited items (e.g., heaters, drugs).", priority: "High", riskLevel: "High", consequence: "Failure to curb prohibited items can lead to fire hazards or illegal activities.", proof: "Room Check Log." },
                { id: "UCO-HR-04", description: "Have a clear protocol for handling medical emergencies or disturbances.", priority: "High", riskLevel: "High", consequence: "A chaotic response can delay medical care or escalate a conflict.", proof: "Emergency SOP." },
                { id: "UCO-HR-05", description: "Ensure all security cameras in common areas are functional.", priority: "High", riskLevel: "High", consequence: "Provides crucial evidence for investigations into theft, ragging, or other incidents.", proof: "CCTV Health Check." },
                { id: "UCO-HR-06", description: "Check fire extinguishers and emergency exits in the hostel.", priority: "High", riskLevel: "High", consequence: "A blocked exit or faulty extinguisher can be fatal in a fire.", proof: "Fire Safety Log." },
                { id: "UCO-HR-07", description: "Ensure all hostel staff are trained in emergency procedures.", priority: "High", riskLevel: "High", consequence: "Untrained staff can worsen an emergency situation.", proof: "Training Records." },
                { id: "UCO-HR-08", description: "Secure the hostel premises at a designated time each night.", priority: "High", riskLevel: "High", consequence: "An unsecured hostel is vulnerable to intruders.", proof: "Lock-up Log." },
                { id: "UCO-HR-09", description: "Monitor for and prevent ragging incidents.", priority: "High", riskLevel: "High", consequence: "Failure to prevent ragging can lead to severe physical and psychological harm, and major legal liability.", proof: "Anti-Ragging Patrol Log." },
                { id: "UCO-HR-10", description: "Maintain an emergency contact list for all resident students.", priority: "High", riskLevel: "High", consequence: "Inability to contact parents during a medical emergency.", proof: "Contact List." }
            ]
        },
        {
            title: "Lab Safety & Chemical Handling",
            department: "Academics/Labs",
            frequency: "Daily/Per Lab",
            role: "Lab Technician",
            summary: "Ensures a safe environment in science and engineering labs.",
            icon: "test-tube",
            tasks: [
                { id: "UCO-LS-01", description: "Ensure all students and staff wear appropriate Personal Protective Equipment (PPE).", priority: "High", riskLevel: "High", consequence: "The most basic failure, leading to chemical splashes, burns, or eye injuries.", proof: "PPE Audit." },
                { id: "UCO-LS-02", description: "Maintain an up-to-date inventory of all chemicals with MSDS sheets.", priority: "High", riskLevel: "High", consequence: "In a spill or fire, inability to provide crucial safety information to first responders.", proof: "Chemical Inventory." },
                { id: "UCO-LS-03", description: "Check that fume hoods and ventilation systems are working correctly.", priority: "High", riskLevel: "High", consequence: "Exposure of students and staff to toxic fumes.", proof: "Fume Hood Test Log." },
                { id: "UCO-LS-04", description: "Follow correct procedures for chemical and biological waste disposal.", priority: "High", riskLevel: "High", consequence: "Improper disposal can cause environmental damage and lead to heavy regulatory fines.", proof: "Waste Disposal Log." },
                { id: "UCO-LS-05", description: "Ensure emergency showers and eyewash stations are accessible and functional.", priority: "High", riskLevel: "High", consequence: "In a chemical splash, a non-functional eyewash station can lead to permanent eye damage.", proof: "Emergency Equipment Log." },
                { id: "UCO-LS-06", description: "Inspect lab equipment for any damage or malfunction before use.", priority: "High", riskLevel: "High", consequence: "Using faulty equipment can lead to inaccurate results or dangerous failures (e.g., glassware cracking).", proof: "Equipment Check Log." },
                { id: "UCO-LS-07", description: "Provide safety training to all new lab users.", priority: "High", riskLevel: "High", consequence: "Untrained users are a danger to themselves and others.", proof: "Training Records." },
                { id: "UCO-LS-08", description: "Label all chemicals and solutions clearly.", priority: "High", riskLevel: "High", consequence: "An unlabeled chemical is an unknown hazard and can lead to dangerous mix-ups.", proof: "Label Audit." },
                { id: "UCO-LS-09", description: "Have a spill response kit ready and accessible.", priority: "High", riskLevel: "High", consequence: "A small spill can become a major incident without the right response materials.", proof: "Spill Kit Check." },
                { id: "UCO-LS-10", description: "Restrict access to the lab to authorized personnel only.", priority: "High", riskLevel: "High", consequence: "Unauthorized individuals can cause accidents or interfere with experiments.", proof: "Access Log." }
            ]
        },
        {
            title: "Campus Event Management",
            department: "Student Affairs",
            frequency: "Per Event",
            role: "Event Coordinator",
            summary: "A checklist to safely plan and execute campus events like festivals and concerts.",
            icon: "theater",
            tasks: [
                { id: "EVENT-01", description: "Obtain all necessary internal and external permissions for the event.", priority: "High", riskLevel: "High", consequence: "An unapproved event can be shut down by authorities, causing reputational damage.", proof: "Permission Documents." },
                { id: "EVENT-02", description: "Develop a detailed crowd management and security plan.", priority: "High", riskLevel: "High", consequence: "Failure to manage crowds can lead to stampedes and mass casualty incidents.", proof: "Crowd Management Plan." },
                { id: "EVENT-03", description: "Arrange for on-site emergency medical support (ambulance, first-aid).", priority: "High", riskLevel: "High", consequence: "Delayed medical response to an injury or illness can be fatal.", proof: "Medical Support Contract." },
                { id: "EVENT-04", description: "Coordinate with campus security and local police if required.", priority: "High", riskLevel: "High", consequence: "A lack of coordination can lead to a chaotic and ineffective emergency response.", proof: "Security Coordination Plan." },
                { id: "EVENT-05", description: "Inspect the event venue for safety hazards before the event.", priority: "High", riskLevel: "High", consequence: "Unidentified hazards (e.g., exposed wiring) can cause accidents.", proof: "Venue Inspection Log." },
                { id: "EVENT-06", description: "Ensure clear signage for entries, exits, and emergency routes.", priority: "High", riskLevel: "High", consequence: "Confused crowds can create blockages and panic during an evacuation.", proof: "Signage Plan." },
                { id: "EVENT-07", description: "Have a communication plan for attendees in case of an emergency.", priority: "High", riskLevel: "High", consequence: "Lack of clear communication leads to rumors and panic.", proof: "Communication Plan." },
                { id: "EVENT-08", description: "Manage sound levels to comply with local regulations.", priority: "Medium", riskLevel: "Low", consequence: "Can lead to noise complaints and fines.", proof: "Sound Level Log." },
                { id: "EVENT-09", description: "Ensure adequate sanitation facilities are available.", priority: "High", riskLevel: "Medium", consequence: "Poor sanitation can be a public health issue for large gatherings.", proof: "Facility Check." },
                { id: "EVENT-10", description: "Plan and execute post-event cleanup.", priority: "High", riskLevel: "Low", consequence: "Leaving a venue messy reflects poorly on the institution.", proof: "Cleanup Log." }
            ]
        },
        {
            title: "Campus Infrastructure & Safety Audit",
            department: "Facilities/Admin",
            frequency: "Quarterly",
            role: "Admin Head",
            summary: "A quarterly audit to ensure all campus infrastructure is safe, compliant, and well-maintained.",
            icon: "building-2",
            tasks: [
                { id: "CISA-01", description: "Conduct a quarterly audit of building structural integrity.", priority: "High", riskLevel: "High", consequence: "Missing signs of structural distress can lead to a building collapse.", proof: "Structural Audit Report." },
                { id: "CISA-02", description: "Inspect all fire safety equipment and evacuation routes.", priority: "High", riskLevel: "High", consequence: "The most critical life-safety system; failure is not an option.", proof: "Fire Safety Audit." },
                { id: "CISA-03", description: "Audit campus accessibility for disabled persons (ramps, lifts, restrooms).", priority: "High", riskLevel: "Medium", consequence: "Non-compliance can lead to legal action and denies equal access to education.", proof: "Accessibility Audit." },
                { id: "CISA-04", description: "Check for any electrical hazards across the campus.", priority: "High", riskLevel: "High", consequence: "Faulty wiring is a leading cause of fires.", proof: "Electrical Safety Audit." },
                { id: "CISA-05", description: "Ensure all campus lighting is functional, especially at night.", priority: "High", riskLevel: "Medium", consequence: "Poorly lit areas are a major security and safety risk.", proof: "Lighting Audit." },
                { id: "CISA-06", description: "Inspect water supply and sanitation systems.", priority: "High", riskLevel: "High", consequence: "Contaminated water or poor sanitation can cause widespread illness.", proof: "Water & Sanitation Audit." },
                { id: "CISA-07", description: "Check road conditions and signage within the campus.", priority: "High", riskLevel: "Medium", consequence: "Poor roads or signage can lead to traffic accidents.", proof: "Road Safety Audit." },
                { id: "CISA-08", description: "Maintain records of all maintenance and repair work.", priority: "High", riskLevel: "Medium", consequence: "Provides a legal record of due diligence and helps track recurring issues.", proof: "Maintenance Log." },
                { id: "CISA-09", description: "Manage waste disposal and recycling programs.", priority: "High", riskLevel: "Medium", consequence: "Improper waste management is an environmental and health hazard.", proof: "Waste Management Audit." },
                { id: "CISA-10", description: "Address any safety concerns raised by students or staff.", priority: "High", riskLevel: "High", consequence: "Ignoring safety concerns creates a culture of negligence.", proof: "Concern Resolution Log." }
            ]
        },
        {
            title: "Mess/Canteen Food Safety (HACCP)",
            department: "Hospitality/Admin",
            frequency: "Daily",
            role: "Mess Manager",
            summary: "Ensures food served in campus messes is safe, hygienic, and of good quality.",
            icon: "utensils-crossed",
            tasks: [
                { id: "MESS-01", description: "Log temperatures of all refrigerators, freezers, and hot holding units.", priority: "High", riskLevel: "High", consequence: "Food held below 60°C can enter the temperature \"danger zone\" and grow harmful bacteria.", proof: "Temperature Log." },
                { id: "MESS-02", description: "Check all raw material deliveries for quality and expiry.", priority: "High", riskLevel: "High", consequence: "Accepting goods outside the safe temperature range is a major food safety risk.", proof: "Temperature Log." },
                { id: "MESS-03", description: "Ensure proper segregation of raw, cooked, vegetarian, and non-vegetarian food.", priority: "High", riskLevel: "High", consequence: "Separate cutting boards and utensils are used for veg/non-veg prep.", proof: "Separate Cutting Board." },
                { id: "MESS-04", description: "Verify hygiene of all food handlers (uniform, nails, health).", priority: "High", riskLevel: "High", consequence: "Cleaning Chemical Bottles are correctly labeled.", proof: "Visual Inspection" },
                { id: "MESS-05", description: "Check that the fire suppression system is armed and ready.", priority: "High", riskLevel: "High", consequence: "Missing guards can lead to severe injuries, amputations, and regulatory fines.", proof: "Equipment Check Log" },
                { id: "MESS-06", description: "Calibrate food thermometers.", priority: "High", riskLevel: "High", consequence: "Lack of hand hygiene is a primary cause of foodborne illness transmission.", proof: "Calibration Log" },
                { id: "MESS-07", description: "Check that exhaust hoods and ventilation are working.", priority: "High", riskLevel: "Medium", consequence: "The delivery vehicle is clean and temperature-controlled.", proof: "System Check" },
                { id: "MESS-08", description: "Ensure that the restaurant is clean to minimize pests.", priority: "High", riskLevel: "High", consequence: "Inaccurate receiving leads to incorrect inventory levels.", proof: "Vendor File" },
                { id: "MESS-09", description: "Check the 'best before' or expiry dates of all products.", priority: "High", riskLevel: "High", consequence: "Inaccurate receiving leads to incorrect inventory levels.", proof: "PR Approval Form" },
                { id: "MESS-10", description: "Record all received goods in the inventory system.", priority: "High", riskLevel: "Medium", consequence: "Poor personal hygiene can lead to food contamination.", proof: "System Entry" }
            ]
        },
        {
            title: "IT & Network Acceptable Use Policy",
            department: "IT",
            frequency: "Ongoing",
            role: "IT Administrator",
            summary: "A framework for managing campus IT resources securely and effectively.",
            icon: "wifi",
            tasks: [
                { id: "IT-AUP-01", description: "Enforce strong password policies for all network users.", priority: "High", riskLevel: "High", consequence: "Different versions can lead to data inconsistencies and security vulnerabilities.", proof: "Software Version Report" },
                { id: "IT-AUP-02", description: "Block access to malicious or inappropriate websites on the campus network.", priority: "High", riskLevel: "High", consequence: "Unprotected systems are vulnerable to malware and ransomware.", proof: "Security Software Dashboard" },
                { id: "IT-AUP-03", description: "Monitor network for unusual activity or security threats.", priority: "High", riskLevel: "High", consequence: "Internal fraud can go undetected, leading to significant financial loss.", proof: "POS Exception Report" },
                { id: "IT-AUP-04", description: "Ensure franchisees are compliant with data privacy and payment security (PCI DSS) standards.", priority: "High", riskLevel: "High", consequence: "Non-compliance can result in massive fines and loss of payment processing ability.", proof: "Compliance Audit" },
                { id: "IT-AUP-05", description: "Provide a centralized IT helpdesk for franchisee support.", priority: "High", riskLevel: "Medium", consequence: "Inaccurate temperature readings leading to undercooked food.", proof: "Helpdesk SLA Report" },
                { id: "IT-AUP-06", description: "Manage user access controls for all corporate systems.", priority: "High", riskLevel: "High", consequence: "Use of unapproved suppliers can lead to quality control issues and brand damage.", proof: "User Access Review" },
                { id: "IT-AUP-07", description: "Ensure regular data backups are being performed.", priority: "High", riskLevel: "High", consequence: "Under-reported sales directly lead to loss of royalty revenue for the franchisor.", proof: "Backup Logs" },
                { id: "IT-AUP-08", description: "Manage the rollout of any new software or hardware to the network.", priority: "High", riskLevel: "High", consequence: "Leads to brand dilution and a fragmented brand identity.", proof: "Rollout Plan" },
                { id: "IT-AUP-09", description: "Audit franchisees for use of unauthorized software.", priority: "High", riskLevel: "High", consequence: "Inconsistent operations from day one, leading to brand dilution.", proof: "Software Audit Report" },
                { id: "IT-AUP-10", description: "Provide a disaster recovery plan for IT systems.", priority: "High", riskLevel: "High", consequence: "A poor location is a primary cause of franchise failure.", proof: "DR Plan" }
            ]
        }
    ]
};

const film_production_pack: PremiumPack = {
    id: 'film_production_pack',
    title: "Film & OTT Production Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/a17569cb-01d1-4dda-b2e4-c4669fe90d94',
    category: "Entertainment & Events",
    description: "An end-to-end production toolkit for film and OTT producers to manage everything from legal clearances and location permits to on-set safety and post-production workflows.",
    icon: "film",
    whoIsItFor: ["Film Producers", "Line Producers", "Production Managers", "Heads of Production (OTT)"],
    sampleItems: [
        { text: "Secure your project legally with pre-production checklists for script clearance, life rights, and chain-of-title.", icon: "file-lock" },
        { text: "Streamline location management with SOPs for scouting, permits, and on-location logistics.", icon: "map" },
        { text: "Manage your cast and crew effectively with standardized contracts, call sheets, and travel coordination.", icon: "users" },
        { text: "Ensure a safe set with protocols for stunt coordination, equipment safety, and incident reporting.", icon: "siren" },
        { text: "Keep your budget on track with checklists for cost reporting, vendor payments, and cash flow management.", icon: "banknote" },
        { text: "Create a seamless post-production workflow with SOPs for dailies, editing, VFX handovers, and final delivery.", icon: "scissors" }
    ],
    checklists: [
        {
            title: "Pre-Production & Legal Clearance",
            department: "Legal/Production",
            frequency: "Per Project",
            role: "Line Producer",
            summary: "Ensures all legal and creative rights are secured before principal photography begins.",
            icon: "file-lock",
            tasks: [
                { id: "FP-PPL-01", description: "Script Clearance: Final script reviewed for potential defamation, privacy, or copyright issues.", priority: "High", riskLevel: "High", consequence: "Lawsuits, injunctions halting production.", proof: "Script clearance report from legal counsel." },
                { id: "FP-PPL-02", description: "Chain of Title: Verify and document complete ownership history of the underlying work (book, script).", priority: "High", riskLevel: "High", consequence: "Inability to secure distribution, ownership disputes.", proof: "Chain of Title summary document." },
                { id: "FP-PPL-03", description: "Life Rights: Secure signed agreements if the story is based on a living person.", priority: "High", riskLevel: "High", consequence: "Lawsuits for misappropriation of likeness.", proof: "Signed life rights agreement." },
                { id: "FP-PPL-04", description: "Cast & Crew Contracts: All key cast and crew have signed contracts.", priority: "High", riskLevel: "High", consequence: "Key personnel leaving mid-project, disputes over pay/credit.", proof: "Executed contracts." },
                { id: "FP-PPL-05", description: "E&O Insurance: Errors & Omissions insurance policy is in place.", priority: "High", riskLevel: "High", consequence: "Uncovered legal costs from copyright/defamation claims.", proof: "Certificate of Insurance." },
                { id: "FP-PPL-06", description: "Music Rights: Plan for music clearance (pre-records, score) is established.", priority: "Medium", riskLevel: "Medium", consequence: "Costly post-production music replacement.", proof: "Music budget and clearance plan." },
                { id: "FP-PPL-07", description: "Child Actor Permits: All necessary permits and tutoring plans are in place for minor actors.", priority: "High", riskLevel: "High", consequence: "Violation of labor laws, fines, production shutdown.", proof: "Copies of permits." },
                { id: "FP-PPL-08", description: "Final Budget & Schedule: Final shooting budget and schedule approved by all stakeholders.", priority: "High", riskLevel: "Medium", consequence: "Financial overruns, production chaos.", proof: "Signed budget and schedule documents." }
            ]
        },
        {
            title: "Location Management",
            department: "Production",
            frequency: "Per Location",
            role: "Location Manager",
            summary: "Manages the scouting, permitting, and logistics of all filming locations.",
            icon: "map",
            tasks: [
                { id: "FP-LM-01", description: "Scouting: Potential locations scouted, photographed, and presented to director.", priority: "High", riskLevel: "Low", consequence: "Creative vision not met.", proof: "Location scouting reports." },
                { id: "FP-LM-02", description: "Permits: All required filming permits from local authorities (police, municipal, etc.) are secured.", priority: "High", riskLevel: "High", consequence: "Production shut down by authorities, fines.", proof: "Copies of all permits." },
                { id: "FP-LM-03", description: "Location Agreement: Signed agreement with property owner, outlining terms, conditions, and fees.", priority: "High", riskLevel: "High", consequence: "Disputes with property owner, unexpected costs.", proof: "Signed location agreement." },
                { id: "FP-LM-04", description: "Logistics Plan: Plan for parking, power, catering, and restrooms is in place.", priority: "Medium", riskLevel: "Medium", consequence: "On-set delays, crew dissatisfaction.", proof: "Location logistics plan." },
                { id: "FP-LM-05", description: "Risk Assessment: Site-specific risk assessment conducted (e.g., trip hazards, public safety).", priority: "High", riskLevel: "High", consequence: "Accidents, injuries.", proof: "Signed risk assessment form." },
                { id: "FP-LM-06", description: "Resident Notification: Notify all nearby residents/businesses of filming schedule and potential disruption.", priority: "Medium", riskLevel: "Medium", consequence: "Complaints, disruption of filming.", proof: "Copy of notification letter." },
                { id: "FP-LM-07", description: "Post-Shoot Cleanup: Location is returned to its original condition after filming.", priority: "High", riskLevel: "Medium", consequence: "Disputes with property owner, loss of security deposit.", proof: "Post-shoot location photos signed off by owner." }
            ]
        },
        {
            title: "On-Set Safety (EHS)",
            department: "Production/Safety",
            frequency: "Daily",
            role: "Safety Officer/1st AD",
            summary: "Ensures a safe working environment for all cast and crew during filming.",
            icon: "siren",
            tasks: [
                { id: "FP-SS-01", description: "Conduct a daily safety briefing (toolbox talk) before start of shooting.", priority: "High", riskLevel: "Medium", consequence: "Crew unaware of daily risks.", proof: "Safety briefing attendance sheet." },
                { id: "FP-SS-02", description: "Ensure first aid station is stocked and a certified medic is present on set.", priority: "High", riskLevel: "High", consequence: "Delayed medical response to injuries.", proof: "Medic's sign-in sheet." },
                { id: "FP-SS-03", description: "Check that all fire extinguishers are accessible and inspected.", priority: "High", riskLevel: "High", consequence: "Inability to control a small fire.", proof: "Fire extinguisher inspection log." },
                { id: "FP-SS-04", description: "Verify all electrical wiring and distribution boxes are safe and not overloaded.", priority: "High", riskLevel: "High", consequence: "Electrical shock, fire.", proof: "Gaffer's daily sign-off." },
                { id: "FP-SS-05", description: "Ensure all walkways and emergency exits are clear of equipment and cables.", priority: "High", riskLevel: "High", consequence: "Trip hazards, blocked evacuation routes.", proof: "Dated photo of clear walkways." },
                { id: "FP-SS-06", description: "Stunt Safety: Review stunt plan and risk assessment with stunt coordinator before the scene.", priority: "High", riskLevel: "High", consequence: "Stunt-related injury or fatality.", proof: "Signed stunt safety briefing." },
                { id: "FP-SS-07", description: "Weapons Handling: All prop weapons are controlled, logged, and handled by the designated armorer.", priority: "High", riskLevel: "High", consequence: "Accidental discharge, serious injury or death.", proof: "Armorer's log." },
                { id: "FP-SS-08", description: "Log and investigate all on-set injuries and near-misses.", priority: "High", riskLevel: "Medium", consequence: "Failure to learn from incidents, repeating unsafe practices.", proof: "Incident report forms." }
            ]
        },
        {
            title: "Post-Production Workflow",
            department: "Post-Production",
            frequency: "Daily/Weekly",
            role: "Post-Production Supervisor",
            summary: "Manages the flow of data and creative work from set to final delivery.",
            icon: "scissors",
            tasks: [
                { id: "FP-PP-01", description: "Dailies/Rushes: All footage from the previous day is ingested, backed up, and transcoded for editorial.", priority: "High", riskLevel: "High", consequence: "Loss of original camera footage, editorial delays.", proof: "Dailies report." },
                { id: "FP-PP-02", description: "Data Backup: A minimum of two copies of all original camera files (OCF) exist on separate physical media.", priority: "High", riskLevel: "High", consequence: "Catastrophic data loss.", proof: "Backup verification log." },
                { id: "FP-PP-03", description: "Editorial: Editor's cut of scenes are reviewed by the director on schedule.", priority: "High", riskLevel: "Low", consequence: "Creative process falls behind schedule.", proof: "Editorial review schedule." },
                { id: "FP-PP-04", description: "VFX Turnover: Shots for VFX are identified, logged, and turned over to the VFX vendor with all necessary data.", priority: "High", riskLevel: "Medium", consequence: "VFX delays, incorrect work.", proof: "VFX turnover sheet." },
                { id: "FP-PP-05", description: "Sound Design & Mix: Audio is synced, edited, and prepared for sound design and mixing.", priority: "Medium", riskLevel: "Low", consequence: "Post-production sound delays.", proof: "Audio turnover to sound department." },
                { id: "FP-PP-06", description: "Color Grading: Picture lock is achieved and files are prepared for color grading.", priority: "High", riskLevel: "Low", consequence: "Color grading cannot start on time.", proof: "Picture lock sign-off." },
                { id: "FP-PP-07", description: "QC & Delivery: Final master file undergoes a full technical Quality Control check before delivery.", priority: "High", riskLevel: "High", consequence: "Delivery rejected by broadcaster/distributor.", proof: "Final QC report." }
            ]
        }
    ]
};

const ott_platform_pack: PremiumPack = {
    id: 'ott_platform_pack',
    title: "OTT Streaming Platform Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/a5c556c2-51d9-4d6f-812f-359a795fd971',
    category: "Entertainment & Events",
    description: "A comprehensive toolkit for OTT platform operations, covering content ingestion, quality control, live streaming, and infrastructure management.",
    icon: "monitor-play",
    whoIsItFor: ["OTT Platform Owners", "Heads of Content Operations", "Chief Technology Officers (CTOs)", "SRE & DevOps Leads"],
    sampleItems: [
        { text: "Ensure a flawless user experience with a robust content ingestion, transcoding, and QC workflow.", icon: "video" },
        { text: "Guarantee uptime during major events with a live streaming readiness and disaster recovery playbook.", icon: "zap" },
        { text: "Protect your platform with cybersecurity SOPs for DRM, access control, and vulnerability management.", icon: "shield" },
        { text: "Optimize performance with checklists for CDN configuration, cache management, and infrastructure monitoring.", icon: "cloud" },
        { text: "Stay compliant with a structured process for content rating, subtitling, and legal clearances.", icon: "file-check" },
        { text: "Improve user engagement with a data-driven process for personalization, recommendations, and analytics.", icon: "brain-circuit" }
    ],
    checklists: [
        {
            title: "Content Ingestion & QC",
            department: "Content Operations",
            frequency: "Per Title",
            role: "Content Manager",
            summary: "Ensures all video assets meet technical and quality standards before going live.",
            icon: "video",
            tasks: [
                { id: "OTT-CI-01", description: "Receive master file from content provider and verify it matches technical specifications.", priority: "High", riskLevel: "High", consequence: "Platform cannot process the file, leading to delays.", proof: "Technical spec sheet sign-off." },
                { id: "OTT-CI-02", description: "Perform automated and manual Quality Control (QC) for video/audio errors (e.g., artifacts, sync issues).", priority: "High", riskLevel: "High", consequence: "Poor user experience, subscriber complaints.", proof: "QC report." },
                { id: "OTT-CI-03", description: "Verify all required assets are present (subtitles, multiple audio tracks, artwork, metadata).", priority: "High", riskLevel: "Medium", consequence: "Incomplete title launch, poor user experience.", proof: "Asset checklist sign-off." },
                { id: "OTT-CI-04", description: "Transcode master file into multiple bitrates and formats for adaptive streaming.", priority: "High", riskLevel: "Medium", consequence: "Users on slow connections cannot stream the content.", proof: "Transcoding job log." },
                { id: "OTT-CI-05", description: "Apply Digital Rights Management (DRM) encryption.", priority: "High", riskLevel: "High", consequence: "Content piracy, breach of contract with rights holders.", proof: "DRM application log." },
                { id: "OTT-CI-06", description: "Ingest all assets and metadata into the Content Management System (CMS).", priority: "High", riskLevel: "Low", consequence: "Title cannot be published.", proof: "CMS entry screenshot." },
                { id: "OTT-CI-07", description: "Perform a final 'spot check' of the title on multiple devices (web, mobile, TV) before publishing.", priority: "High", riskLevel: "Medium", consequence: "Device-specific playback issues.", proof: "Cross-device testing report." },
                { id: "OTT-CI-08", description: "Schedule the title for publication or publish immediately.", priority: "Medium", riskLevel: "Low", consequence: "Missing a marketing deadline.", proof: "Publishing schedule." }
            ]
        },
        {
            title: "Live Streaming Event Readiness",
            department: "Broadcast Operations",
            frequency: "Per Live Event",
            role: "Live Ops Engineer",
            summary: "A checklist to ensure maximum uptime and a smooth experience for major live events.",
            icon: "zap",
            tasks: [
                { id: "OTT-LS-01", description: "Conduct a full load test of the streaming infrastructure at least 24 hours before the event.", priority: "High", riskLevel: "High", consequence: "Platform crashes during peak viewership.", proof: "Load test report." },
                { id: "OTT-LS-02", description: "Verify primary and backup encoder and stream paths are functional.", priority: "High", riskLevel: "High", consequence: "Total stream failure if primary path fails.", proof: "Encoder test stream logs." },
                { id: "OTT-LS-03", description: "Confirm CDN configurations, including geo-blocking and token authentication, are correct.", priority: "High", riskLevel: "High", consequence: "Stream available in unauthorized regions, security breaches.", proof: "CDN configuration review sign-off." },
                { id: "OTT-LS-04", description: "Establish a 'war room' communication channel (e.g., Slack, Teams) for the event.", priority: "High", riskLevel: "Medium", consequence: "Disorganized response to issues during the event.", proof: "War room channel created and key personnel added." },
                { id: "OTT-LS-05", description: "Brief the customer support team on the event and potential user issues.", priority: "Medium", riskLevel: "Low", consequence: "Support team unprepared for user complaints.", proof: "Support briefing notes." },
                { id: "OTT-LS-06", description: "Monitor stream health (bitrate, buffering, errors) in real-time throughout the event.", priority: "High", riskLevel: "High", consequence: "Slow response to degrading stream quality.", proof: "Real-time monitoring dashboard screenshot." },
                { id: "OTT-LS-07", description: "Have a disaster recovery plan in place, including a pre-recorded 'experiencing technical difficulties' slate.", priority: "High", riskLevel: "Medium", consequence: "Dead air and user confusion during an outage.", proof: "Disaster recovery plan document." },
                { id: "OTT-LS-08", description: "Conduct a post-event debrief to analyze performance and any incidents.", priority: "Medium", riskLevel: "Low", consequence: "Failure to learn from event performance.", proof: "Post-event report." }
            ]
        },
    ]
};

const sports_clubs_stadium_operations_pack: PremiumPack = {
    id: 'sports_clubs_stadium_operations_pack',
    title: "Sports Clubs & Stadium Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f290d8a5-d913-485e-9905-59b922a01490',
    category: "Entertainment & Events",
    description: "A comprehensive operational toolkit for sports clubs, gyms, and stadium managers to ensure safety, compliance, and an excellent member experience.",
    icon: "trophy",
    whoIsItFor: ["Sports Club GMs", "Stadium Managers", "Heads of Operations", "Gym Owners"],
    sampleItems: [
        { text: "Ensure venue safety with crowd management, ticketing, and emergency evacuation SOPs.", icon: "users" },
        { text: "Maintain world-class turf and pitches with a structured ground maintenance schedule.", icon: "sprout" },
        { text: "Prevent accidents and misuse with daily inspections of gym and sports equipment.", icon: "dumbbell" },
        { text: "Guarantee a safe environment with fire safety audits and medical emergency response plans.", icon: "siren" },
        { text: "Protect members with robust hygiene protocols for pools, changing rooms, and F&B areas.", icon: "sparkles" },
        { text: "Manage your team effectively with checklists for staff training, scheduling, and performance.", icon: "clipboard-list" }
    ],
     checklists: [
       {
            title: "Venue Safety with crowd management",
            department: "Test",
            frequency: "Test",
            role: "Test",
            summary: "Test",
            icon: "users",
            tasks: [
          {id: 'sports_clubs_stadium_operations_pack-1', description: 'desc1', priority: 'High', riskLevel: 'High', consequence: 'cons1', proof: 'proof1'},
          {id: 'sports_clubs_stadium_operations_pack-2', description: 'desc2', priority: 'High', riskLevel: 'High', consequence: 'cons2', proof: 'proof2'},
            ]
        }
    ]
};

const cinema_operations_pack: PremiumPack = {
    id: 'cinema_operations_pack',
    title: "Cinema & Multiplex Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/0acf829c-e492-4f66-ae74-0231bfe0bc82',
    category: "Entertainment & Events",
    description: "A complete operational pack for cinema managers to ensure a safe, clean, and high-quality movie-going experience.",
    icon: "popcorn",
    whoIsItFor: ["Cinema Owners", "Multiplex Managers", "Heads of Operations", "F&B Managers (Cinema)"],
    sampleItems: [
        { text: "Guarantee a perfect show with pre-screening checklists for projection, sound, and lighting.", icon: "projector" },
        { text: "Prevent fire tragedies with rigorous audits for emergency exits, fire alarms, and staff evacuation training.", icon: "siren" },
        { text: "Serve safe and quality food with F&B concession stand hygiene and inventory management SOPs.", icon: "utensils" },
        { text: "Improve profitability with checklists for ticketing, cash handling, and daily sales reconciliation.", icon: "ticket" },
        { text: "Enhance the guest experience with protocols for auditorium cleaning, seat maintenance, and restroom hygiene.", icon: "sparkles" },
        { text: "Manage your facility effectively with SOPs for housekeeping, security, and preventive maintenance.", icon: "building" }
    ],
     checklists: [
        {
            title: "Projection & Sound QC",
            department: "Technical",
            frequency: "Per Show",
            role: "Projectionist",
            summary: "Ensures a flawless technical presentation for every movie screening.",
            icon: "projector",
            tasks: [
                { id: "PROJ-SOUND-01", description: "Check projector for correct focus and brightness.", priority: "High", riskLevel: "Medium", consequence: "A blurry or dim picture ruins the cinematic experience.", proof: "QC Log" },
                { id: "PROJ-SOUND-02", description: "Test audio system for correct channel separation and volume levels (as per Dolby/THX spec).", priority: "High", riskLevel: "Medium", consequence: "Poor sound quality is a major customer complaint.", proof: "Sound Check Log" },
                { id: "PROJ-SOUND-03", description: "Verify the correct film version and language is loaded.", priority: "High", riskLevel: "High", consequence: "Playing the wrong movie or language version is a major service failure.", proof: "Playlist Check" },
                { id: "PROJ-SOUND-04", description: "Test the Public Address (PA) system for emergency announcements.", priority: "High", riskLevel: "High", consequence: "In an emergency, a failed PA system can lead to chaos and panic.", proof: "PA System Test" },
                { id: "PROJ-SOUND-05", description: "Clean projector lens and port glass daily.", priority: "High", riskLevel: "Low", consequence: "A dirty lens degrades picture quality.", proof: "Cleaning Log" },
                { id: "PROJ-SOUND-06", description: "Log lamp hours and schedule replacements.", priority: "High", riskLevel: "Medium", consequence: "A projector lamp failing mid-show is a major disruption.", proof: "Lamp Hour Log" },
                { id: "PROJ-SOUND-07", description: "Check auditorium lighting controls (house lights, emergency lights).", priority: "High", riskLevel: "High", consequence: "Lighting failures can be a safety hazard.", proof: "Lighting Control Check" },
                { id: "PROJ-SOUND-08", description: "Ensure subtitles are enabled and correctly displayed for relevant shows.", priority: "High", riskLevel: "Medium", consequence: "Failure to provide subtitles where required is an accessibility failure.", proof: "Subtitle Check" },
                { id: "PROJ-SOUND-09", description: "Monitor the show for any technical issues.", priority: "High", riskLevel: "High", consequence: "Allows for quick intervention if a technical problem arises.", proof: "Show Monitoring Log" },
                { id: "PROJ-SOUND-10", description: "Report any technical faults immediately.", priority: "High", riskLevel: "High", consequence: "Prevents the same issue from affecting the next show.", proof: "Fault Report" }
            ]
        },
        {
            title: "Fire Safety & Evacuation",
            department: "Safety/Security",
            frequency: "Daily/Quarterly",
            role: "Duty Manager",
            summary: "A comprehensive checklist to ensure the cinema is prepared for a fire emergency.",
            icon: "siren",
            tasks: [
                { id: "FIRE-CIN-01", description: "Ensure all emergency exits are unlocked and unobstructed.", priority: "High", riskLevel: "High", consequence: "A blocked exit can be fatal in a fire (e.g., Uphaar tragedy).", proof: "Exit Inspection Log" },
                { id: "FIRE-CIN-02", description: "Test fire alarms and smoke detectors weekly.", priority: "High", riskLevel: "High", consequence: "A silent alarm provides no warning, costing precious evacuation time.", proof: "Alarm Test Log" },
                { id: "FIRE-CIN-03", description: "Conduct a staff evacuation drill quarterly.", priority: "High", riskLevel: "High", consequence: "Untrained staff can cause panic and confusion during a real evacuation.", proof: "Drill Report" },
                { id: "FIRE-CIN-04", description: "Check all fire extinguishers for pressure and accessibility monthly.", priority: "High", riskLevel: "High", consequence: "An expired or inaccessible extinguisher is useless.", proof: "Extinguisher Log" },
                { id: "FIRE-CIN-05", description: "Ensure evacuation maps are displayed and accurate.", priority: "High", riskLevel: "High", consequence: "Confused patrons will not know where to go in an emergency.", proof: "Map Audit" },
                { id: "FIRE-CIN-06", description: "Test emergency lighting daily.", priority: "High", riskLevel: "High", consequence: "In a power outage during a fire, this is the only way for people to see the exit paths.", proof: "Lighting Test Log" },
                { id: "FIRE-CIN-07", description: "Train staff on their roles during an evacuation.", priority: "High", riskLevel: "High", consequence: "Clear roles prevent chaos and ensure an orderly evacuation.", proof: "Training Records" },
                { id: "FIRE-CIN-08", description: "Keep fire lanes and access for fire trucks clear.", priority: "High", riskLevel: "High", consequence: "A blocked fire lane can delay the fire brigade by critical minutes.", proof: "Exterior Inspection" },
                { id: "FIRE-CIN-09", description: "Inspect kitchen fire suppression systems monthly.", priority: "High", riskLevel: "High", consequence: "A kitchen fire can quickly get out of control without a working suppression system.", proof: "Suppression System Log" },
                { id: "FIRE-CIN-10", description: "Maintain all fire safety records for regulatory audits.", priority: "High", riskLevel: "High", consequence: "Failure to produce records can lead to fines and closure.", proof: "Fire Safety File" }
            ]
        },
        {
            title: "F&B Concession Hygiene",
            department: "F&B",
            frequency: "Daily",
            role: "F&B Supervisor",
            summary: "Ensures food and beverages served are safe, hygienic, and high quality.",
            icon: "utensils-crossed",
            tasks: [
                { id: "FNB-CIN-01", description: "Log temperatures of all food holding units (hot and cold).", priority: "High", riskLevel: "High", consequence: "Food held in the \"danger zone\" can cause food poisoning.", proof: "Temperature Log" },
                { id: "FNB-CIN-02", description: "Check expiry dates of all food products and ingredients.", priority: "High", riskLevel: "High", consequence: "Selling expired food is a major health and legal violation.", proof: "Expiry Date Sweep" },
                { id: "FNB-CIN-03", description: "Clean and sanitize all food contact surfaces hourly.", priority: "High", riskLevel: "High", consequence: "Prevents cross-contamination and bacterial growth.", proof: "Sanitization Log" },
                { id: "FNB-CIN-04", description: "Ensure staff follow handwashing and glove usage policies.", priority: "High", riskLevel: "High", consequence: "Poor personal hygiene is a primary cause of foodborne illness.", proof: "Hygiene Audit" },
                { id: "FNB-CIN-05", description: "Manage waste disposal to prevent pests and odors.", priority: "High", riskLevel: "Medium", consequence: "Overflowing garbage attracts pests.", proof: "Waste Log" },
                { id: "FNB-CIN-06", description: "Check popcorn machines, soda fountains, and other equipment for cleanliness.", priority: "High", riskLevel: "Medium", consequence: "Dirty equipment can harbor bacteria and affect taste.", proof: "Equipment Cleaning Log" },
                { id: "FNB-CIN-07", description: "Follow FIFO principles for all inventory.", priority: "High", riskLevel: "High", consequence: "Prevents waste from expired stock.", proof: "Stock Rotation Audit" },
                { id: "FNB-CIN-08", description: "Calibrate food thermometers weekly.", priority: "High", riskLevel: "High", consequence: "An inaccurate thermometer gives a false sense of safety.", proof: "Calibration Log" },
                { id: "FNB-CIN-09", description: "Maintain a clean and organized storage area.", priority: "High", riskLevel: "Medium", consequence: "Prevents pest infestations and cross-contamination.", proof: "Storage Inspection" },
                { id: "FNB-CIN-10", description: "Train all F&B staff on food safety standards.", priority: "High", riskLevel: "High", consequence: "Untrained staff are a major food safety liability.", proof: "Training Records" }
            ]
        },
        {
            title: "Ticketing & Cash Handling",
            department: "Box Office/Finance",
            frequency: "Daily",
            role: "Box Office Manager",
            summary: "A checklist for ensuring accurate and secure financial transactions.",
            icon: "ticket",
            tasks: [
                { id: "TICK-CASH-01", description: "Reconcile daily ticket sales against system reports.", priority: "High", riskLevel: "High", consequence: "Failure to reconcile can hide ticketing errors or internal fraud.", proof: "Sales Reconciliation Report" },
                { id: "TICK-CASH-02", description: "Reconcile cash drawers at the end of each shift.", priority: "High", riskLevel: "High", consequence: "The only way to identify cash shortages or overages accurately.", proof: "Cash Reconciliation Form" },
                { id: "TICK-CASH-03", description: "Use counterfeit detection for all large currency notes.", priority: "High", riskLevel: "High", consequence: "Accepting fake money is a direct financial loss.", proof: "Counterfeit Check" },
                { id: "TICK-CASH-04", description: "Securely deposit daily cash earnings.", priority: "High", riskLevel: "High", consequence: "Holding large amounts of cash on site is a major security risk.", proof: "Bank Deposit Slip" },
                { id: "TICK-CASH-05", description: "Require manager approval for all refunds and voids.", priority: "High", riskLevel: "High", consequence: "A key control to prevent fraudulent transactions by staff.", proof: "Refund/Void Log" },
                { id: "TICK-CASH-06", description: "Monitor online ticketing for fraudulent activity.", priority: "High", riskLevel: "High", consequence: "Can prevent loss from stolen credit cards or bot activity.", proof: "Fraud Monitoring Report" },
                { id: "TICK-CASH-07", description: "Ensure pricing is correctly configured in the ticketing system.", priority: "High", riskLevel: "High", consequence: "Incorrect pricing leads to revenue loss or customer disputes.", proof: "Pricing Audit" },
                { id: "TICK-CASH-08", description: "Track and reconcile complimentary tickets and vouchers.", priority: "High", riskLevel: "Medium", consequence: "Prevents misuse of complimentary offers.", proof: "Voucher Log" },
                { id: "TICK-CASH-09", description: "Train staff on all cash handling and ticketing procedures.", priority: "High", riskLevel: "High", consequence: "Untrained staff are more likely to make costly mistakes.", proof: "Training Records" },
                { id: "TICK-CASH-10", description: "Ensure PCI DSS compliance for all card transactions.", priority: "High", riskLevel: "High", consequence: "Non-compliance can result in large fines and loss of card processing rights.", proof: "PCI Compliance Certificate" }
            ]
        },
        {
            title: "Auditorium Cleaning & Maintenance",
            department: "Housekeeping/Facilities",
            frequency: "Per Show",
            role: "Housekeeping Supervisor",
            summary: "Maintains a clean, safe, and pleasant environment for every moviegoer.",
            icon: "armchair",
            tasks: [
                { id: "AUD-CLEAN-01", description: "Clean floors of all food and drink spillage after every show.", priority: "High", riskLevel: "Medium", consequence: "A dirty cinema is a major customer deterrent.", proof: "Cleaning Log" },
                { id: "AUD-CLEAN-02", description: "Wipe down all seats and armrests.", priority: "High", riskLevel: "Medium", consequence: "Ensures a clean and comfortable experience for the next guest.", proof: "Cleaning Log" },
                { id: "AUD-CLEAN-03", description: "Collect all trash and lost property.", priority: "High", riskLevel: "Low", consequence: "Maintains a clean environment and helps return lost items to guests.", proof: "Lost & Found Log" },
                { id: "AUD-CLEAN-04", description: "Check for any damaged seats or carpet and report for repair.", priority: "High", riskLevel: "Medium", consequence: "Damaged seats look unprofessional and can be a safety hazard.", proof: "Damage Report" },
                { id: "AUD-CLEAN-05", description: "Ensure 3D glasses (if any) are collected and sanitized.", priority: "High", riskLevel: "Medium", consequence: "Dirty 3D glasses are a hygiene risk and a major source of complaints.", proof: "Sanitization Log" },
                { id: "AUD-CLEAN-06", description: "Check and clean auditorium restrooms.", priority: "High", riskLevel: "Medium", consequence: "Restroom cleanliness is a key driver of overall guest satisfaction.", proof: "Restroom Cleaning Log" },
                { id: "AUD-CLEAN-07", description: "Verify that the auditorium is at a comfortable temperature.", priority: "High", riskLevel: "Low", consequence: "An auditorium that is too hot or cold is a common complaint.", proof: "Temperature Check" },
                { id: "AUD-CLEAN-08", description: "Deep clean all auditoriums weekly.", priority: "High", riskLevel: "Medium", consequence: "Prevents long-term buildup of dirt and grime.", proof: "Deep Cleaning Schedule" },
                { id: "AUD-CLEAN-09", description: "Ensure cleaning supplies are stocked.", priority: "High", riskLevel: "Low", consequence: "Lack of supplies can bring cleaning operations to a halt.", proof: "Supply Inventory" },
                { id: "AUD-CLEAN-10", description: "Supervisor to sign off on cleanliness before the next show.", priority: "High", riskLevel: "Medium", consequence: "Provides a final quality check and ensures standards are met.", proof: "Supervisor Sign-off" }
            ]
        },
        {
            title: "Staff Management & Grooming",
            department: "HR/Operations",
            frequency: "Daily",
            role: "Duty Manager",
            summary: "A checklist for managing the front-line team effectively.",
            icon: "users",
            tasks: [
                { id: "SMG-01", description: "Create and publish the weekly staff roster.", priority: "High", riskLevel: "Medium", consequence: "Poor scheduling leads to understaffing during peak shows.", proof: "Staff Roster" },
                { id: "SMG-02", description: "Conduct a daily briefing before the first show.", priority: "High", riskLevel: "Medium", consequence: "Keeps the team aligned on promotions, show times, and any issues.", proof: "Briefing Log" },
                { id: "SMG-03", description: "Inspect staff uniforms and grooming daily.", priority: "High", riskLevel: "Low", consequence: "A professional appearance is key to the brand image.", proof: "Grooming Check" },
                { id: "SMG-04", description: "Track staff attendance and punctuality.", priority: "High", riskLevel: "Medium", consequence: "Frequent lateness can disrupt operations.", proof: "Attendance System" },
                { id: "SMG-05", description: "Provide ongoing training on customer service and operational procedures.", priority: "High", riskLevel: "Medium", consequence: "Well-trained staff provide a better guest experience.", proof: "Training Log" },
                { id: "SMG-06", description: "Handle staff queries and grievances.", priority: "High", riskLevel: "Medium", consequence: "Poor grievance handling leads to low morale and high turnover.", proof: "Grievance Log" },
                { id: "SMG-07", description: "Conduct performance reviews for all staff.", priority: "High", riskLevel: "Medium", consequence: "Provides feedback for improvement and career growth.", proof: "Review Forms" },
                { id: "SMG-08", description: "Recognize and reward outstanding performance.", priority: "Medium", riskLevel: "Low", consequence: "A good way to boost morale and motivate the team.", proof: "Recognition Program" },
                { id: "SMG-09", description: "Ensure all staff are aware of their roles in an emergency.", priority: "High", riskLevel: "High", consequence: "Critical for an orderly and safe response to any incident.", proof: "Emergency Role Card" },
                { id: "SMG-10", description: "Manage staff leave and absences.", priority: "High", riskLevel: "Medium", consequence: "Ensures adequate staffing levels are maintained at all times.", proof: "Leave Management System" }
            ]
        },
        {
            title: "Marketing & Promotions",
            department: "Marketing",
            frequency: "Weekly",
            role: "Marketing Manager",
            summary: "A checklist to drive footfall and revenue through effective marketing.",
            icon: "megaphone",
            tasks: [
                { id: "MKTG-01", description: "Update in-cinema posters and standees for upcoming films.", priority: "High", riskLevel: "Low", consequence: "The most effective way to promote upcoming attractions to a captive audience.", proof: "Photo of Displays" },
                { id: "MKTG-02", description: "Plan and execute social media campaigns for new releases.", priority: "High", riskLevel: "Medium", consequence: "Drives pre-booking and opening weekend attendance.", proof: "Social Media Calendar" },
                { id: "MKTG-03", description: "Manage loyalty program and member communications.", priority: "High", riskLevel: "Medium", consequence: "A key tool for encouraging repeat visits.", proof: "Loyalty Program Dashboard" },
                { id: "MKTG-04", description: "Coordinate with distributors for promotional materials.", priority: "High", riskLevel: "Medium", consequence: "Ensures you have access to official artwork and trailers.", proof: "Communication Log" },
                { id: "MKTG-05", description: "Run special offers and combos in partnership with the F&B team.", priority: "High", riskLevel: "Medium", consequence: "A major driver of ancillary revenue.", proof: "Promotion Plan" },
                { id: "MKTG-06", description: "Track the effectiveness of marketing campaigns.", priority: "High", riskLevel: "Medium", consequence: "Helps to understand ROI and optimize future marketing spend.", proof: "Campaign ROI Report" },
                { id: "MKTG-07", description: "Manage the cinema's website and update showtimes.", priority: "High", riskLevel: "High", consequence: "An inaccurate showtime is a major source of customer frustration.", proof: "Website Content" },
                { id: "MKTG-08", description: "Engage with customers on social media.", priority: "High", riskLevel: "Medium", consequence: "Builds a community around the cinema and provides a channel for feedback.", proof: "Social Media Engagement Report" },
                { id: "MKTG-09", description: "Organize special events like premieres or fan screenings.", priority: "High", riskLevel: "High", consequence: "Creates buzz and can generate significant PR.", proof: "Event Plan" },
                { id: "MKTG-10", description: "Gather customer feedback to inform marketing strategies.", priority: "High", riskLevel: "Medium", consequence: "Helps to understand the local audience and tailor promotions effectively.", proof: "Feedback Survey" }
            ]
        },
        {
            title: "Facility Maintenance",
            department: "Facilities",
            frequency: "Weekly",
            role: "Facility Manager",
            summary: "A preventive maintenance checklist to keep the cinema running smoothly.",
            icon: "building",
            tasks: [
                { id: "FAC-MAIN-01", description: "Inspect and clean HVAC filters monthly.", priority: "High", riskLevel: "Medium", consequence: "A failed HVAC system leads to an uncomfortably hot or cold auditorium.", proof: "HVAC Log" },
                { id: "FAC-MAIN-02", description: "Check all plumbing fixtures for leaks weekly.", priority: "High", riskLevel: "High", consequence: "A leaking toilet or tap can cause water damage and is unhygienic.", proof: "Plumbing Inspection Log" },
                { id: "FAC-MAIN-03", description: "Test backup generators under load weekly.", priority: "High", riskLevel: "High", consequence: "A power cut without a working generator means the entire show stops.", proof: "Generator Test Log" },
                { id: "FAC-MAIN-04", description: "Inspect all electrical panels for loose connections quarterly.", priority: "High", riskLevel: "High", consequence: "A loose connection is a major fire hazard.", proof: "Electrical Panel Audit" },
                { id: "FAC-MAIN-05", description: "Check and repair any damaged seating or carpets.", priority: "High", riskLevel: "Medium", consequence: "Damaged seats are uncomfortable and look unprofessional.", proof: "Repair Log" },
                { id: "FAC-MAIN-06", description: "Conduct a general building safety walkthrough weekly.", priority: "High", riskLevel: "High", consequence: "Proactively identifies and mitigates potential safety hazards.", proof: "Safety Walkthrough Log" },
                { id: "FAC-MAIN-07", description: "Maintain exterior lighting and signage.", priority: "High", riskLevel: "Medium", consequence: "Ensures the cinema is visible and looks appealing from the outside.", proof: "Exterior Lighting Log" },
                { id: "FAC-MAIN-08", description: "Schedule and oversee third-party vendor maintenance.", priority: "High", riskLevel: "High", consequence: "Ensures specialized equipment (like elevators) is maintained correctly.", proof: "Vendor Service Reports" },
                { id: "FAC-MAIN-09", description: "Keep a log of all maintenance activities.", priority: "High", riskLevel: "High", consequence: "A legal record of due diligence for safety and compliance.", proof: "Master Maintenance Log" },
                { id: "FAC-MAIN-10", description: "Manage a stock of critical spare parts.", priority: "High", riskLevel: "High", consequence: "Having a spare projector bulb can prevent a show from being cancelled.", proof: "Spare Parts Inventory" }
            ]
        }
    ]
};

const theme_park_ops_pack: PremiumPack = {
    id: 'theme_park_ops_pack',
    title: "Theme Park Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f2873138-038c-4592-8025-5463f87b328a',
    category: "Entertainment & Events",
    description: "A safety-critical toolkit for theme park and amusement park operators, covering ride safety, crowd management, and emergency response.",
    icon: "ferris-wheel",
    whoIsItFor: ["Theme Park GMs", "Heads of Operations", "Ride Safety Managers", "Security Directors"],
    sampleItems: [
        { text: "Prevent ride-related accidents with daily, weekly, and monthly ride inspection checklists based on manufacturer guidelines.", icon: "wrench" },
        { text: "Ensure guest safety with comprehensive crowd management, queuing, and access control SOPs.", icon: "users" },
        { text: "Be prepared for any crisis with emergency response plans for medical incidents, power failures, and ride stoppages.", icon: "siren" },
        { text: "Protect children with a robust Lost Child Protocol and designated safe zones.", icon: "helping-hand" },
        { text: "Maintain a safe and beautiful park with checklists for park-wide landscaping, housekeeping, and infrastructure safety.", icon: "recycle" },
        { text: "Guarantee food safety across all park outlets with FSSAI/HACCP-aligned hygiene and food handling checklists.", icon: "utensils" }
    ],
    checklists: [
        {
            title: "Ride Safety & Maintenance",
            department: "Maintenance/Operations",
            frequency: "Daily/Scheduled",
            role: "Ride Engineer",
            summary: "Ensures every ride is safe for operation before the first guest boards.",
            icon: "wrench",
            tasks: [
                { id: "RIDE-SAFETY-01", description: "Perform a daily pre-opening operational test of each ride.", priority: "High", riskLevel: "High", consequence: "The most critical check to identify any faults before guests are onboard.", proof: "Test Log" },
                { id: "RIDE-SAFETY-02", description: "Inspect all safety harnesses, lap bars, and restraints.", priority: "High", riskLevel: "High", consequence: "A failed restraint can lead to a fatal accident.", proof: "Restraint Inspection Log" },
                { id: "RIDE-SAFETY-03", description: "Check all emergency stop buttons and systems.", priority: "High", riskLevel: "High", consequence: "In an emergency, the E-stop must work flawlessly.", proof: "E-Stop Test Log" },
                { id: "RIDE-SAFETY-04", description: "Follow a scheduled preventive maintenance plan based on manufacturer guidelines.", priority: "High", riskLevel: "High", consequence: "Prevents catastrophic failures caused by metal fatigue or wear and tear.", proof: "PM Records" },
                { id: "RIDE-SAFETY-05", description: "Log all maintenance activities, repairs, and part replacements.", priority: "High", riskLevel: "High", consequence: "Provides a legal record of due diligence and helps track part life.", proof: "Maintenance Logbook" },
                { id: "RIDE-SAFETY-06", description: "Train and certify all ride operators.", priority: "High", riskLevel: "High", consequence: "An untrained operator can make a fatal error under pressure.", proof: "Training Certificates" },
                { id: "RIDE-SAFETY-07", description: "Have a documented procedure for ride evacuation.", priority: "High", riskLevel: "High", consequence: "A chaotic, unplanned evacuation can cause injuries and panic.", proof: "Evacuation SOP" },
                { id: "RIDE-SAFETY-08", description: "Conduct non-destructive testing (NDT) on critical components annually.", priority: "High", riskLevel: "High", consequence: "Identifies microscopic cracks in welds or metal before they lead to a catastrophic failure.", proof: "NDT Report" },
                { id: "RIDE-SAFETY-09", description: "Lock out and tag out any ride that is undergoing maintenance.", priority: "High", riskLevel: "High", consequence: "Prevents the ride from being accidentally started while someone is working on it.", proof: "LOTO Log" },
                { id: "RIDE-SAFETY-10", description: "Review ride incident reports to identify trends and potential issues.", priority: "High", riskLevel: "High", consequence: "Helps to identify if a particular ride or component is having recurring problems.", proof: "Incident Analysis Report" }
            ]
        },
        {
            title: "Emergency Response & Evacuation",
            department: "Safety/Security",
            frequency: "Quarterly",
            role: "Emergency Commander",
            summary: "A plan for managing common park emergencies like ride stoppages or medical incidents.",
            icon: "siren",
            tasks: [
                { id: "EMER-RESP-01", description: "Conduct quarterly mock drills for different emergency scenarios.", priority: "High", riskLevel: "High", consequence: "Drills build muscle memory and expose weaknesses in your emergency plan.", proof: "Drill Report" },
                { id: "EMER-RESP-02", description: "Ensure a clear chain of command is established for any emergency.", priority: "High", riskLevel: "High", consequence: "Without a clear command structure, response becomes chaotic and ineffective.", proof: "Emergency Command Structure" },
                { id: "EMER-RESP-03", description: "Have a trained first-response team on-site at all times.", priority: "High", riskLevel: "High", consequence: "Rapid medical response in the first few minutes is critical.", proof: "Team Roster & Certifications" },
                { id: "EMER-RESP-04", description: "Maintain clear and accessible evacuation routes and assembly points.", priority: "High", riskLevel: "High", consequence: "Blocked routes can trap guests during an evacuation.", proof: "Evacuation Map" },
                { id: "EMER-RESP-05", description: "Test park-wide public address and alarm systems weekly.", priority: "High", riskLevel: "High", consequence: "The primary means of communicating with thousands of guests in an emergency.", proof: "System Test Log" },
                { id: "EMER-RESP-06", description: "Coordinate with local fire, police, and medical services.", priority: "High", riskLevel: "High", consequence: "Ensures a seamless handover to external emergency services when they arrive.", proof: "Coordination Meeting Minutes" },
                { id: "EMER-RESP-07", description: "Have backup power for all critical systems.", priority: "High", riskLevel: "High", consequence: "A power failure can disable communication, lighting, and ride safety systems.", proof: "Generator Test Log" },
                { id: "EMER-RESP-08", description: "Provide emergency communication devices (radios) to all key staff.", priority: "High", riskLevel: "High", consequence: "Mobile networks can fail during a major incident; radios are more reliable.", proof: "Radio Inventory" },
                { id: "EMER-RESP-09", description: "Train all staff on their roles in an emergency.", priority: "High", riskLevel: "High", consequence: "Every staff member, from ride operator to food seller, has a role to play in guest safety.", proof: "Training Records" },
                { id: "EMER-RESP-10", description: "Review and update the emergency plan annually.", priority: "High", riskLevel: "High", consequence: "An outdated plan is a dangerous liability.", proof: "Updated Plan Document" }
            ]
        },
        {
            title: "Guest Services & Complaint Handling",
            department: "Guest Services",
            frequency: "Daily",
            role: "Guest Services Manager",
            summary: "Manages guest interactions, ensuring a positive experience even when issues arise.",
            icon: "smile-plus",
            tasks: [
                { id: "GUEST-SVC-01", description: "Have a clear and practiced Lost Child Protocol.", priority: "High", riskLevel: "High", consequence: "A lost child is a parent's worst nightmare; a swift, professional response is critical.", proof: "Lost Child SOP" },
                { id: "GUEST-SVC-02", description: "Log and track every guest complaint to resolution.", priority: "High", riskLevel: "Medium", consequence: "Unresolved complaints lead to negative social media posts and damage brand reputation.", proof: "Complaint Log" },
                { id: "GUEST-SVC-03", description: "Empower front-line staff to resolve minor issues on the spot.", priority: "High", riskLevel: "Low", consequence: "Reduces escalations and shows guests that you value their time.", proof: "Empowerment Policy" },
                { id: "GUEST-SVC-04", description: "Provide services for guests with disabilities (wheelchairs, accessibility maps).", priority: "High", riskLevel: "Medium", consequence: "A legal requirement in many places and essential for an inclusive experience.", proof: "Accessibility Plan" },
                { id: "GUEST-SVC-05", description: "Have a protocol for providing assistance to guests affected by a ride stoppage or other incident.", priority: "High", riskLevel: "High", consequence: "How you handle a negative experience can turn a detractor into a promoter.", proof: "Incident Guest Handling SOP" },
                { id: "GUEST-SVC-06", description: "Train staff on empathetic communication and de-escalation techniques.", priority: "High", riskLevel: "Medium", consequence: "Helps to calm angry guests and find a positive resolution.", proof: "Training Records" },
                { id: "GUEST-SVC-07", description: "Monitor social media and review sites for guest feedback.", priority: "High", riskLevel: "Medium", consequence: "Allows you to respond to public complaints and manage your online reputation.", proof: "Social Media Monitoring Report" },
                { id: "GUEST-SVC-08", description: "Collect and analyze guest feedback to identify areas for improvement.", priority: "High", riskLevel: "Medium", consequence: "Guest feedback is a free source of valuable business intelligence.", proof: "Feedback Analysis Report" },
                { id: "GUEST-SVC-09", description: "Maintain a lost and found system.", priority: "High", riskLevel: "Low", consequence: "A well-run lost and found is a key part of good customer service.", proof: "Lost & Found System" },
                { id: "GUEST-SVC-10", description: "Ensure all guest-facing staff are knowledgeable about the park.", priority: "High", riskLevel: "Low", consequence: "Staff who can't answer basic questions seem unprofessional.", proof: "Staff Quiz Results" }
            ]
        },
        {
            title: "Crowd Management & Queuing",
            department: "Operations",
            frequency: "Daily",
            role: "Operations Manager",
            summary: "Manages guest flow to ensure safety and a positive experience in queue lines.",
            icon: "users",
            tasks: [
                { id: "CROWD-Q-01", description: "Monitor queue lengths at all major attractions and post wait times.", priority: "High", riskLevel: "Medium", consequence: "Managing expectations with accurate wait times reduces guest frustration.", proof: "Wait Time Board" },
                { id: "CROWD-Q-02", description: "Use stanchions and ropes to create organized queue lines.", priority: "High", riskLevel: "Medium", consequence: "Prevents queue-jumping and disorganized crowding.", proof: "Visual Check" },
                { id: "CROWD-Q-03", description: "Deploy staff to manage queues during peak periods.", priority: "High", riskLevel: "High", consequence: "Staff can manage flow, answer questions, and spot problems.", proof: "Staff Roster" },
                { id: "CROWD-Q-04", description: "Provide entertainment or shade in long queue lines.", priority: "Medium", riskLevel: "Low", consequence: "Improves the guest experience while waiting.", proof: "Queue Entertainment Schedule" },
                { id: "CROWD-Q-05", description: "Have a plan for managing park capacity and temporarily closing entry if full.", priority: "High", riskLevel: "High", consequence: "Overcrowding the park is a major safety risk.", proof: "Capacity Management Plan" },
                { id: "CROWD-Q-06", description: "Manage crowd flow during parades and shows.", priority: "High", riskLevel: "High", consequence: "Prevents dangerous crushes and ensures good viewing for everyone.", proof: "Parade Route Plan" },
                { id: "CROWD-Q-07", description: "Use signage and announcements to direct guests.", priority: "High", riskLevel: "Medium", consequence: "Clear directions are essential in a large, confusing space.", proof: "Signage & Announcement Log" },
                { id: "CROWD-Q-08", description: "Analyze guest flow data to optimize park layout.", priority: "High", riskLevel: "Medium", consequence: "Data can reveal bottlenecks and help improve the park design over time.", proof: "Guest Flow Report" },
                { id: "CROWD-Q-09", description: "Handle crowd-related incidents calmly and professionally.", priority: "High", riskLevel: "High", consequence: "Panic is contagious; a calm response from staff is crucial.", proof: "Incident Report" },
                { id: "CROWD-Q-10", description: "Train all staff on their roles in crowd management.", priority: "High", riskLevel: "High", consequence: "Every staff member is a part of the crowd management system.", proof: "Training Records" }
            ]
        },
        {
            title: "Park Housekeeping & Presentation",
            department: "Housekeeping",
            frequency: "Hourly",
            role: "Housekeeping Supervisor",
            summary: "Maintains the aesthetic appeal and safety of the park's common areas.",
            icon: "sparkles",
            tasks: [
                { id: "HK-PARK-01", description: "Conduct hourly cleaning sweeps of all public areas.", priority: "High", riskLevel: "Medium", consequence: "A dirty park leads to a poor guest experience and negative reviews.", proof: "Cleaning Log" },
                { id: "HK-PARK-02", description: "Inspect and clean restrooms every 30 minutes during peak hours.", priority: "High", riskLevel: "High", consequence: "Restroom cleanliness is a top driver of guest satisfaction.", proof: "Restroom Cleaning Log" },
                { id: "HK-PARK-03", description: "Empty trash bins before they overflow.", priority: "High", riskLevel: "Medium", consequence: "Overflowing bins are unsightly and unhygienic.", proof: "Waste Bin Check Log" },
                { id: "HK-PARK-04", description: "Clean up spills immediately.", priority: "High", riskLevel: "High", consequence: "Spills are a slip-and-fall hazard, a major liability.", proof: "Spill Response Log" },
                { id: "HK-PARK-05", description: "Maintain landscaping and gardens.", priority: "High", riskLevel: "Low", consequence: "A well-maintained landscape is key to the park's aesthetic appeal.", proof: "Landscaping Schedule" },
                { id: "HK-PARK-06", description: "Check and repair any damaged park furniture or fixtures.", priority: "High", riskLevel: "Medium", consequence: "Broken benches or signs are a safety hazard.", proof: "Repair Log" },
                { id: "HK-PARK-07", description: "Power wash walkways and high-traffic areas regularly.", priority: "Medium", riskLevel: "Low", consequence: "Removes gum and deep-seated dirt.", proof: "Power Wash Schedule" },
                { id: "HK-PARK-08", description: "Ensure all signage is clean and legible.", priority: "High", riskLevel: "Low", consequence: "Dirty or broken signs make navigation difficult.", proof: "Signage Cleaning Log" },
                { id: "HK-PARK-09", description: "Manage a lost and found for the park.", priority: "High", riskLevel: "Low", consequence: "An efficient lost and found is a key part of good customer service.", proof: "Lost & Found System" },
                { id: "HK-PARK-10", description: "Conduct a final deep clean of the park after closing.", priority: "High", riskLevel: "Medium", consequence: "Ensures the park is ready for guests the next day.", proof: "End-of-Day Cleaning Report" }
            ]
        },
        {
            title: "F&B and Retail Operations",
            department: "F&B/Retail",
            frequency: "Daily",
            role: "F&B Manager",
            summary: "Ensures all food and retail outlets in the park are safe, profitable, and offer a great guest experience.",
            icon: "utensils",
            tasks: [
                { id: "FNB-RETAIL-01", description: "Conduct daily food safety and hygiene audits of all F&B outlets.", priority: "High", riskLevel: "High", consequence: "A food poisoning outbreak can sicken thousands of guests and cause a PR disaster.", proof: "Hygiene Audit Report" },
                { id: "FNB-RETAIL-02", description: "Manage inventory levels to meet demand without excessive waste.", priority: "High", riskLevel: "High", consequence: "Running out of popular items is a major source of lost revenue.", proof: "Inventory Management System" },
                { id: "FNB-RETAIL-03", description: "Reconcile cash and sales for each outlet at the end of the day.", priority: "High", riskLevel: "High", consequence: "Essential for financial accounting and fraud detection.", proof: "Sales Reconciliation Report" },
                { id: "FNB-RETAIL-04", description: "Ensure all staff are trained in food handling and customer service.", priority: "High", riskLevel: "High", consequence: "Untrained staff are unsafe and provide poor service.", proof: "Training Records" },
                { id: "FNB-RETAIL-05", description: "Maintain consistent pricing and promotions across all outlets.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent pricing confuses and frustrates guests.", proof: "Pricing Audit" },
                { id: "FNB-RETAIL-06", description: "Manage supplier relationships and deliveries.", priority: "High", riskLevel: "High", consequence: "Ensures a steady supply of quality ingredients and merchandise.", proof: "Supplier Contracts" },
                { id: "FNB-RETAIL-07", description: "Handle customer complaints related to F&B or retail purchases.", priority: "High", riskLevel: "High", consequence: "Poor complaint handling can lead to negative online reviews.", proof: "Complaint Log" },
                { id: "FNB-RETAIL-08", description: "Ensure all outlets comply with local health and safety regulations.", priority: "High", riskLevel: "High", consequence: "Non-compliance can lead to fines or closure.", proof: "Compliance Certificates" },
                { id: "FNB-RETAIL-09", description: "Monitor sales data to optimize menus and product offerings.", priority: "High", riskLevel: "Medium", consequence: "Data-driven decisions help to maximize revenue.", proof: "Sales Analysis Report" },
                { id: "FNB-RETAIL-10", description: "Implement loss prevention measures for retail merchandise.", priority: "High", riskLevel: "High", consequence: "Reduces shrinkage from customer and employee theft.", proof: "Loss Prevention Plan" }
            ]
        },
        {
            title: "Staff Training & Performance",
            department: "HR",
            frequency: "Ongoing",
            role: "HR Manager",
            summary: "A framework for developing a well-trained, motivated, and guest-focused team.",
            icon: "users",
            tasks: [
                { id: "STAFF-TP-01", description: "Provide comprehensive orientation for all new hires.", priority: "High", riskLevel: "Medium", consequence: "Ensures new staff understand the park's culture and safety standards from day one.", proof: "Orientation Schedule" },
                { id: "STAFF-TP-02", description: "Conduct job-specific training for all roles (ride operator, F&B, etc.).", priority: "High", riskLevel: "High", consequence: "Untrained staff are unsafe and provide poor service.", proof: "Training Modules" },
                { id: "STAFF-TP-03", description: "Provide mandatory safety and emergency response training.", priority: "High", riskLevel: "High", consequence: "The most important training to ensure guest and staff safety.", proof: "Training Records" },
                { id: "STAFF-TP-04", description: "Train staff on customer service standards and guest interaction.", priority: "High", riskLevel: "Medium", consequence: "Friendly, helpful staff are key to a positive guest experience.", proof: "Customer Service Training Log" },
                { id: "STAFF-TP-05", description: "Conduct regular performance reviews and provide feedback.", priority: "High", riskLevel: "Medium", consequence: "Helps employees to grow and improve.", proof: "Performance Review Forms" },
                { id: "STAFF-TP-06", description: "Maintain a skills matrix for all employees.", priority: "Medium", riskLevel: "Medium", consequence: "Helps to identify training needs and plan for succession.", proof: "Skills Matrix" },
                { id: "STAFF-TP-07", description: "Offer opportunities for cross-training and career development.", priority: "Medium", riskLevel: "Low", consequence: "Improves employee morale and retention.", proof: "Development Plans" },
                { id: "STAFF-TP-08", description: "Recognize and reward excellent performance.", priority: "Medium", riskLevel: "Low", consequence: "Motivates staff to go above and beyond.", proof: "Recognition Program" },
                { id: "STAFF-TP-09", description: "Handle disciplinary issues consistently and fairly.", priority: "High", riskLevel: "High", consequence: "An unfair process can lead to low morale and legal issues.", proof: "Disciplinary Process" },
                { id: "STAFF-TP-10", description: "Conduct exit interviews to gather feedback from departing employees.", priority: "High", riskLevel: "Medium", consequence: "A valuable source of information for improving the work environment.", proof: "Exit Interview Notes" }
            ]
        },
        {
            title: "Ticketing & Entry Operations",
            department: "Admissions",
            frequency: "Daily",
            role: "Admissions Manager",
            summary: "Ensures a smooth, efficient, and secure entry process for all guests.",
            icon: "ticket",
            tasks: [
                { id: "TICK-ENTRY-01", description: "Ensure all ticketing counters and self-service kiosks are operational.", priority: "High", riskLevel: "High", consequence: "A system failure can lead to massive queues and guest frustration at the entrance.", proof: "System Health Check" },
                { id: "TICK-ENTRY-02", description: "Reconcile ticket sales and cash at the end of each day.", priority: "High", riskLevel: "High", consequence: "Essential for financial accounting and fraud detection.", proof: "Sales Report" },
                { id: "TICK-ENTRY-03", description: "Manage online ticket sales and redemptions.", priority: "High", riskLevel: "High", consequence: "A smooth online process is crucial for modern guest experience.", proof: "Online Sales Dashboard" },
                { id: "TICK-ENTRY-04", description: "Train staff on identifying and handling counterfeit tickets.", priority: "High", riskLevel: "High", consequence: "Counterfeit tickets lead to direct revenue loss.", proof: "Fraud Detection Training" },
                { id: "TICK-ENTRY-05", description: "Manage entry turnstiles and access control.", priority: "High", riskLevel: "High", consequence: "Prevents unauthorized entry and helps manage park capacity.", proof: "Access Control System" },
                { id: "TICK-ENTRY-06", description: "Handle group bookings and school trips.", priority: "High", riskLevel: "Medium", consequence: "A major revenue stream that requires efficient coordination.", proof: "Group Booking System" },
                { id: "TICK-ENTRY-07", description: "Provide clear pricing and information at the ticket counters.", priority: "High", riskLevel: "Low", consequence: "Ambiguous pricing leads to customer confusion and disputes.", proof: "Signage" },
                { id: "TICK-ENTRY-08", description: "Manage season pass holder entries and benefits.", priority: "High", riskLevel: "Medium", consequence: "A smooth process is key to retaining loyal customers.", proof: "Season Pass System" },
                { id: "TICK-ENTRY-09", description: "Analyze attendance data to forecast future demand.", priority: "High", riskLevel: "High", consequence: "Essential for staffing, inventory, and operational planning.", proof: "Attendance Report" },
                { id: "TICK-ENTRY-10", description: "Have a clear process for handling ticketing disputes.", priority: "High", riskLevel: "Medium", consequence: "A fair and quick resolution process improves guest satisfaction.", proof: "Dispute Resolution SOP" }
            ]
        }
    ]
};

const logistics_warehouse_pack: PremiumPack = {
    id: 'logistics_warehouse_pack',
    title: "Logistics & Warehouse Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f48201fb-a708-43ac-a508-7381c32f55c5',
    category: "Industrial & Transport",
    description: "A complete toolkit for warehouse managers and logistics heads to optimize inventory, ensure safety, and improve supply chain resilience.",
    icon: "warehouse",
    whoIsItFor: ["Warehouse Managers", "Logistics Heads", "Supply Chain Directors", "3PL Providers"],
    sampleItems: [
        { text: "Streamline your receiving process with checklists for inbound quality control and documentation.", icon: "clipboard-check" },
        { text: "Maximize space and efficiency with SOPs for stock-keeping, bin location management, and putaway.", icon: "package" },
        { text: "Ensure order accuracy and speed with a structured picking, packing, and dispatch process.", icon: "truck" },
        { text: "Maintain a safe workplace with checklists for Material Handling Equipment (MHE) safety and operator training.", icon: "hard-hat" },
        { text: "Protect your inventory with robust protocols for security, access control, and cycle counting.", icon: "shield" },
        { text: "Build a resilient supply chain with SOPs for vendor management and contingency planning.", icon: "link" }
    ],
    checklists: [
        {
            title: "Inbound & Receiving",
            department: "Receiving",
            frequency: "Per Delivery",
            role: "Receiving Clerk",
            summary: "Ensures all incoming goods are accurately received, inspected, and documented.",
            icon: "clipboard-check",
            tasks: [
                { id: "LW-IR-01", description: "Schedule and confirm delivery appointment with carrier.", priority: "Medium", riskLevel: "Low", consequence: "Dock congestion, delays.", proof: "Appointment log." },
                { id: "LW-IR-02", description: "Inspect truck/container for signs of tampering or damage before unloading.", priority: "High", riskLevel: "Medium", consequence: "Accepting damaged goods, security risk.", proof: "Inbound inspection form." },
                { id: "LW-IR-03", description: "Verify shipment against packing list and purchase order.", priority: "High", riskLevel: "High", consequence: "Inventory discrepancies, paying for incorrect goods.", proof: "Signed packing list with discrepancies noted." },
                { id: "LW-IR-04", description: "Conduct quality inspection on a sample of goods (e.g., check for damage, expiry dates).", priority: "High", riskLevel: "Medium", consequence: "Accepting defective products into inventory.", proof: "Inbound QC report." },
                { id: "LW-IR-05", description: "Record all received items into the Warehouse Management System (WMS).", priority: "High", riskLevel: "High", consequence: "Phantom stock, inability to locate goods.", proof: "WMS receiving entry." },
                { id: "LW-IR-06", description: "Label all pallets/items with internal tracking barcodes.", priority: "High", riskLevel: "Low", consequence: "Inefficient putaway and picking.", proof: "Photo of labeled pallet." },
                { id: "LW-IR-07", description: "Segregate and move goods to the appropriate staging or putaway area.", priority: "Medium", riskLevel: "Low", consequence: "Delays in putaway, dock congestion.", proof: "Visual confirmation." },
                { id: "LW-IR-08", description: "Process and document any returns to vendor (RTV) for damaged or incorrect goods.", priority: "Medium", riskLevel: "Medium", consequence: "Financial loss, holding unwanted stock.", proof: "RTV documentation." },
                { id: "LW-IR-09", description: "Clean receiving area after each delivery.", priority: "Medium", riskLevel: "Low", consequence: "A messy receiving area is a safety hazard.", proof: "Housekeeping Log." },
                { id: "LW-IR-10", description: "Sign and stamp the delivery driver's paperwork.", priority: "High", riskLevel: "Medium", consequence: "Legal confirmation that the shipment was received.", proof: "Signed Proof of Delivery." }
            ]
        },
        {
            title: "Material Handling Equipment (MHE) Safety",
            department: "Safety/Operations",
            frequency: "Daily",
            role: "MHE Operator",
            summary: "Daily checks and procedures to ensure safe operation of forklifts, reach trucks, and other MHE.",
            icon: "hard-hat",
            tasks: [
                { id: "MHE-01", description: "Perform a pre-use inspection of the forklift/MHE (brakes, horn, lights, tires).", priority: "High", riskLevel: "High", consequence: "Operating a faulty forklift can lead to catastrophic accidents, injuries, or fatalities.", proof: "Pre-use Inspection Checklist." },
                { id: "MHE-02", description: "Check battery charge or fuel level.", priority: "High", riskLevel: "Medium", consequence: "A forklift running out of power mid-operation can strand a heavy load in a dangerous position.", proof: "Inspection Checklist." },
                { id: "MHE-03", description: "Report any defects or malfunctions immediately and do not use the MHE.", priority: "High", riskLevel: "High", consequence: "Using a known-faulty machine is gross negligence and can lead to severe legal penalties.", proof: "Defect Report Form." },
                { id: "MHE-04", description: "Ensure all operators have a valid MHE license.", priority: "High", riskLevel: "High", consequence: "Allowing an untrained person to operate MHE is a major safety violation and illegal.", proof: "License Verification Log." },
                { id: "MHE-05", description: "Follow designated pathways and speed limits within the warehouse.", priority: "High", riskLevel: "High", consequence: "Speeding or taking shortcuts is a leading cause of collisions with racks or pedestrians.", proof: "CCTV Monitoring." },
                { id: "MHE-06", description: "Use horn at intersections and blind spots.", priority: "High", riskLevel: "High", consequence: "A simple but critical step to prevent collisions with other MHE or people.", proof: "Operator Observation." },
                { id: "MHE-07", description: "Ensure loads are stable and within the MHE's capacity.", priority: "High", riskLevel: "High", consequence: "Overloading can cause the forklift to tip over, a potentially fatal accident.", proof: "Load Check." },
                { id: "MHE-08", description: "Park MHE in designated areas with forks lowered.", priority: "High", riskLevel: "Medium", consequence: "Raised forks are a major trip hazard.", proof: "Visual Check." },
                { id: "MHE-09", description: "Conduct refresher training for all MHE operators annually.", priority: "High", riskLevel: "High", consequence: "Ensures operators are up-to-date on safety procedures.", proof: "Training Records." },
                { id: "MHE-10", description: "Maintain a log of all MHE-related incidents and near-misses.", priority: "High", riskLevel: "High", consequence: "Helps to identify unsafe behaviors or areas and prevent future accidents.", proof: "Incident Log." }
            ]
        },
        {
            title: "Inventory & Cycle Count Management",
            department: "Inventory",
            frequency: "Daily/Weekly",
            role: "Inventory Controller",
            summary: "A systematic process to ensure inventory accuracy and minimize shrinkage.",
            icon: "clipboard-check",
            tasks: [
                { id: "INV-01", description: "Generate a daily cycle count list based on ABC analysis or location.", priority: "High", riskLevel: "High", consequence: "Without regular counts, inventory accuracy degrades, leading to stockouts or overstocking.", proof: "Cycle Count Sheet." },
                { id: "INV-02", description: "Conduct blind counts without showing system quantity to the counter.", priority: "High", riskLevel: "Medium", consequence: "Prevents 'pencil whipping' where counters just copy the system number.", proof: "Counting Procedure." },
                { id: "INV-03", description: "Investigate discrepancies between physical and system counts on the same day.", priority: "High", riskLevel: "High", consequence: "The longer the delay, the harder it is to find the root cause of the error.", proof: "Discrepancy Report." },
                { id: "INV-04", description: "Perform a recount for any disputed locations.", priority: "High", riskLevel: "High", consequence: "A second count confirms if the discrepancy is real or just a counting error.", proof: "Recount Log." },
                { id: "INV-05", description: "Process inventory adjustments with manager approval and reason codes.", priority: "High", riskLevel: "High", consequence: "Unauthorized adjustments can be a method to conceal theft.", proof: "Adjustment Form." },
                { id: "INV-06", description: "Track inventory accuracy as a key performance indicator (KPI).", priority: "High", riskLevel: "High", consequence: "If you don't measure it, you can't improve it.", proof: "KPI Dashboard." },
                { id: "INV-07", description: "Freeze locations in the WMS during counting to prevent movement.", priority: "High", riskLevel: "High", consequence: "Items being moved in or out during a count will guarantee an inaccurate result.", proof: "WMS Setting." },
                { id: "INV-08", description: "Analyze root causes of inventory inaccuracies.", priority: "High", riskLevel: "High", consequence: "Helps to identify and fix the underlying process issues causing errors.", proof: "Root Cause Analysis Report." },
                { id: "INV-09", description: "Conduct a full physical inventory count annually or biannually.", priority: "High", riskLevel: "High", consequence: "A necessary step for accurate financial accounting and a complete inventory reset.", proof: "Full Count Plan." },
                { id: "INV-10", description: "Reconcile and post the results of the full physical count.", priority: "High", riskLevel: "High", consequence: "The final step to ensure the system reflects the true on-the-ground reality.", proof: "Reconciliation Report." }
            ]
        },
        {
            title: "Shipping & Dispatch Workflow",
            department: "Dispatch",
            frequency: "Per Shipment",
            role: "Dispatch Clerk",
            summary: "Ensures customer orders are fulfilled accurately and efficiently.",
            icon: "truck",
            tasks: [
                { id: "SHIP-01", description: "Generate a consolidated pick list for all orders to be dispatched.", priority: "High", riskLevel: "Medium", consequence: "An inefficient picking process is slow and error-prone.", proof: "Pick List." },
                { id: "SHIP-02", description: "Pick items accurately using a handheld scanner or pick list.", priority: "High", riskLevel: "High", consequence: "Picking the wrong item is a major cause of customer complaints and returns.", proof: "Scan Log/Signed Pick List." },
                { id: "SHIP-03", description: "Pack orders securely and apply the correct shipping label.", priority: "High", riskLevel: "High", consequence: "Poor packing leads to damaged goods; a wrong label means the shipment goes to the wrong customer.", proof: "Packing Slip & Label." },
                { id: "SHIP-04", description: "Verify the packed items against the customer order one last time.", priority: "High", riskLevel: "High", consequence: "The final quality check to prevent a shipping error before it leaves the building.", proof: "Final Check Log." },
                { id: "SHIP-05", description: "Load items onto the correct truck for delivery.", priority: "High", riskLevel: "High", consequence: "Loading onto the wrong truck can cause massive delays and require costly re-shipping.", proof: "Loading Manifest." },
                { id: "SHIP-06", description: "Generate all necessary shipping documents (invoice, manifest, e-way bill).", priority: "High", riskLevel: "High", consequence: "A truck can be stopped and fined by authorities if it doesn't have the correct legal paperwork.", proof: "Shipping Documents." },
                { id: "SHIP-07", description: "Update the order status in the system to 'Shipped'.", priority: "High", riskLevel: "High", consequence: "A delay in updating leaves the customer without tracking information.", proof: "System Update Log." },
                { id: "SHIP-08", description: "Seal the truck and record the seal number.", priority: "High", riskLevel: "High", consequence: "A numbered seal proves that the shipment has not been tampered with in transit.", proof: "Seal Log." },
                { id: "SHIP-09", description: "Hand over documents to the driver and get acknowledgment.", priority: "High", riskLevel: "High", consequence: "Confirms the legal transfer of responsibility for the goods to the transporter.", proof: "Signed Acknowledgment." },
                { id: "SHIP-10", description: "Track shipments and handle any delivery exceptions.", priority: "High", riskLevel: "Medium", consequence: "Proactively solving problems in transit improves customer satisfaction.", proof: "Tracking System." }
            ]
        },
        {
            title: "Warehouse Safety & Housekeeping",
            department: "Safety/Operations",
            frequency: "Daily",
            role: "Safety Officer",
            summary: "A daily audit to ensure a safe working environment and compliance with safety regulations.",
            icon: "hard-hat",
            tasks: [
                { id: "WSH-01", description: "Ensure all aisles and emergency exits are clear of obstructions.", priority: "High", riskLevel: "High", consequence: "A blocked aisle is a trip hazard and a blocked exit is a fatal flaw in a fire.", proof: "Daily Walkthrough Log." },
                { id: "WSH-02", description: "Check that fire extinguishers and first aid stations are accessible.", priority: "High", riskLevel: "High", consequence: "In an emergency, these items must be reachable immediately.", proof: "Safety Equipment Log." },
                { id: "WSH-03", description: "Inspect for any spills or leaks and ensure they are cleaned up immediately.", priority: "High", riskLevel: "High", consequence: "Spills are a major slip-and-fall hazard, a leading cause of workplace injury.", proof: "Spill Report." },
                { id: "WSH-04", description: "Verify that all staff in the operational area are wearing required PPE.", priority: "High", riskLevel: "High", consequence: "Failure to wear PPE (like safety shoes or helmets) can lead to severe injuries.", proof: "PPE Audit." },
                { id: "WSH-05", description: "Check that pallets are stacked safely and not leaning.", priority: "High", riskLevel: "High", consequence: "A collapsing stack of pallets can be fatal.", proof: "Stacking Audit." },
                { id: "WSH-06", description: "Ensure proper lighting throughout the warehouse.", priority: "High", riskLevel: "Medium", consequence: "Poor lighting increases the risk of accidents and picking errors.", proof: "Lighting Check." },
                { id: "WSH-07", description: "Manage waste and scrap disposal effectively.", priority: "High", riskLevel: "Medium", consequence: "Accumulated waste is a fire hazard and attracts pests.", proof: "Waste Disposal Log." },
                { id: "WSH-08", description: "Check battery charging areas for safety compliance.", priority: "High", riskLevel: "High", consequence: "Charging batteries can release explosive gases; proper ventilation is critical.", proof: "Charging Area Audit." },
                { id: "WSH-09", description: "Conduct a brief safety toolbox talk at the start of each shift.", priority: "High", riskLevel: "Medium", consequence: "Keeps safety top-of-mind for all workers.", proof: "Toolbox Talk Record." },
                { id: "WSH-10", description: "Report all safety incidents and near-misses.", priority: "High", riskLevel: "High", consequence: "Analyzing near-misses is the best way to prevent a major accident from happening.", proof: "Incident Reporting System." }
            ]
        },
        {
            title: "Security & Access Control",
            department: "Security",
            frequency: "Ongoing",
            role: "Security Supervisor",
            summary: "Protocols to secure the warehouse against theft and unauthorized access.",
            icon: "shield",
            tasks: [
                { id: "SAC-01", description: "Maintain a log of all visitors and vehicles entering/exiting the premises.", priority: "High", riskLevel: "High", consequence: "Without a log, you have no record of who was on your property during a theft or incident.", proof: "Visitor/Vehicle Log." },
                { id: "SAC-02", description: "Issue visitor passes and ensure they are returned upon exit.", priority: "High", riskLevel: "Medium", consequence: "Prevents visitors from wandering into restricted areas.", proof: "Visitor Pass Log." },
                { id: "SAC-03", description: "Conduct random checks of vehicles leaving the premises.", priority: "High", riskLevel: "High", consequence: "A key deterrent against theft of goods via vehicles.", proof: "Vehicle Check Log." },
                { id: "SAC-04", description: "Ensure all CCTV cameras are functional and recording.", priority: "High", riskLevel: "High", consequence: "A non-functional camera provides no evidence for investigations.", proof: "CCTV Health Log." },
                { id: "SAC-05", description: "Monitor CCTV feeds for any suspicious activity.", priority: "High", riskLevel: "High", consequence: "Proactive monitoring can spot a theft in progress.", proof: "CCTV Monitoring Log." },
                { id: "SAC-06", description: "Restrict access to high-value or sensitive areas.", priority: "High", riskLevel: "High", consequence: "The fewer people with access, the lower the risk of theft.", proof: "Access Control System." },
                { id: "SAC-07", description: "Perform regular patrols of the warehouse perimeter.", priority: "High", riskLevel: "High", consequence: "Deters intruders and allows for detection of fence breaches or tampering.", proof: "Patrol Log." },
                { id: "SAC-08", description: "Secure all doors, windows, and gates after hours.", priority: "High", riskLevel: "High", consequence: "The most basic and critical step in preventing overnight burglary.", proof: "Lock-up Checklist." },
                { id: "SAC-09", description: "Conduct background checks for all security personnel.", priority: "High", riskLevel: "High", consequence: "A security guard with a criminal history is a major liability.", proof: "Background Check Reports." },
                { id: "SAC-10", description: "Have a clear procedure for responding to a security breach or theft.", priority: "High", riskLevel: "High", consequence: "A disorganized response can compromise evidence and hinder investigation.", proof: "Security Incident SOP." }
            ]
        },
        {
            title: "Returns Management (Reverse Logistics)",
            department: "Returns/QC",
            frequency: "Per Return",
            role: "Returns Supervisor",
            summary: "A systematic process for handling product returns.",
            icon: "recycle",
            tasks: [
                { id: "RET-01", description: "Receive and log all returned shipments.", priority: "High", riskLevel: "Medium", consequence: "Without a log, returned goods can get lost in the warehouse.", proof: "Returns Log." },
                { id: "RET-02", description: "Inspect returned items for damage, usage, and completeness.", priority: "High", riskLevel: "High", consequence: "Accepting damaged or incomplete returns results in a financial loss.", proof: "Inspection Report." },
                { id: "RET-03", description: "Grade returned items (e.g., restockable, requires repackaging, scrap).", priority: "High", riskLevel: "High", consequence: "Incorrect grading can lead to damaged goods being put back into saleable stock.", proof: "Grading Log." },
                { id: "RET-04", description: "Process items for restocking back into inventory.", priority: "High", riskLevel: "High", consequence: "Delays in restocking mean items are not available for resale.", proof: "Restocking Log." },
                { id: "RET-05", description: "Segregate items for scrap or refurbishment.", priority: "High", riskLevel: "High", consequence: "Mixing scrap with good inventory can lead to picking errors.", proof: "Segregation Area." },
                { id: "RET-06", description: "Process customer credits or refunds accurately.", priority: "High", riskLevel: "High", consequence: "Errors in credits can lead to customer disputes and financial discrepancies.", proof: "Credit Note." },
                { id: "RET-07", description: "Analyze return reasons to identify product or process issues.", priority: "High", riskLevel: "High", consequence: "High return rates can indicate a serious quality problem that needs to be fixed.", proof: "Returns Analysis Report." },
                { id: "RET-08", description: "Manage disposal of scrapped items according to policy.", priority: "High", riskLevel: "High", consequence: "Improper disposal can lead to environmental issues or fraud.", proof: "Scrap Disposal Note." },
                { id: "RET-09", description: "Keep the returns area organized and separate from main inventory.", priority: "High", riskLevel: "High", consequence: "A disorganized returns area can lead to items being lost or processed incorrectly.", proof: "Area Inspection." },
                { id: "RET-10", description: "Provide feedback to the sales/shipping teams on return causes.", priority: "High", riskLevel: "Medium", consequence: "Helps other departments understand how their actions (e.g., poor packing) lead to returns.", proof: "Feedback Meeting." }
            ]
        },
        {
            title: "Vendor Performance Management",
            department: "Procurement/Logistics",
            frequency: "Quarterly",
            role: "Logistics Manager",
            summary: "A framework for managing relationships with transport and logistics vendors.",
            icon: "handshake",
            tasks: [
                { id: "VEND-PERF-01", description: "Track On-Time Delivery (OTD) performance for each carrier.", priority: "High", riskLevel: "High", consequence: "Late deliveries can shut down a production line or lead to stockouts.", proof: "OTD Report." },
                { id: "VEND-PERF-02", description: "Monitor the rate of damaged goods for each carrier.", priority: "High", riskLevel: "High", consequence: "A high damage rate indicates a careless transporter and leads to financial loss.", proof: "Damage Rate Report." },
                { id: "VEND-PERF-03", description: "Review freight invoices for accuracy and compliance with agreed rates.", priority: "High", riskLevel: "High", consequence: "Prevents over-billing and ensures cost control.", proof: "Invoice Audit." },
                { id: "VEND-PERF-04", description: "Hold quarterly business reviews (QBRs) with key logistics partners.", priority: "High", riskLevel: "High", consequence: "The primary forum for discussing performance and driving improvement.", proof: "QBR Minutes." },
                { id: "VEND-PERF-05", description: "Maintain a vendor scorecard with all key performance metrics.", priority: "High", riskLevel: "High", consequence: "Provides an objective, data-driven way to compare vendor performance.", proof: "Vendor Scorecard." },
                { id: "VEND-PERF-06", description: "Set joint improvement targets with vendors.", priority: "High", riskLevel: "Medium", consequence: "Turns the relationship from adversarial to collaborative.", proof: "Action Plan." },
                { id: "VEND-PERF-07", description: "Ensure vendors comply with all safety and security requirements.", priority: "High", riskLevel: "High", consequence: "A non-compliant vendor can introduce major safety or security risks into your supply chain.", proof: "Vendor Compliance Audit." },
                { id: "VEND-PERF-08", description: "Negotiate contracts and rates based on performance.", priority: "High", riskLevel: "High", consequence: "High-performing vendors should be rewarded, while poor performers should not.", proof: "Contract Negotiation Notes." },
                { id: "VEND-PERF-09", description: "Have a process for onboarding new vendors.", priority: "High", riskLevel: "High", consequence: "Ensures new vendors understand all your requirements from day one.", proof: "Onboarding Checklist." },
                { id: "VEND-PERF-10", description: "Develop contingency plans with backup carriers.", priority: "High", riskLevel: "High", consequence: "If your primary carrier fails, you have an immediate backup plan to ensure business continuity.", proof: "Contingency Plan." }
            ]
        }
    ]
};

const manufacturing_operations_ehs_pack: PremiumPack = {
    id: 'manufacturing_operations_ehs_pack',
    title: "Manufacturing Operations & EHS Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/62ae53f1-6966-4746-bf80-69ffb4b0d7dc',
    category: "Industrial & Transport",
    description: "A comprehensive EHS and operational toolkit for plant heads and safety officers to ensure a safe, compliant, and efficient manufacturing environment.",
    icon: "factory",
    badgeText: "Safety Critical",
    badgeVariant: "destructive",
    bestseller: true,
    whoIsItFor: ["Plant Heads", "EHS Officers", "Production Managers", "Maintenance Heads", "Quality Control Managers"],
    sampleItems: [
        { text: "Prevent fatal accidents with a legally compliant Lock-Out Tag-Out (LOTO) procedure for machine maintenance.", icon: "lock" },
        { text: "Ensure worker safety with a permit-to-work system for high-risk jobs like hot work and confined space entry.", icon: "file-check" },
        { text: "Boost productivity by tracking Overall Equipment Effectiveness (OEE) to minimize downtime.", icon: "trending-up" },
        { text: "Reduce defects and waste with an In-Process Quality Control (IPQC) system.", icon: "clipboard-check" },
        { text: "Mitigate fire and explosion risks with strict chemical handling and storage protocols.", icon: "siren" },
        { text: "Maintain compliance with a robust system for environmental monitoring and statutory reporting.", icon: "leaf" }
    ],
    checklists: [
        {
            title: "Daily Production Kick-off",
            department: "Production",
            frequency: "Daily",
            role: "Shift Supervisor",
            summary: "Ensures the production line is ready, safe, and aligned with the day's targets before starting operations.",
            icon: "clipboard-check",
            tasks: [
                { id: "MFG-DPK-01", description: "Review shift handover log from the previous shift for any issues or pending actions.", priority: "High", riskLevel: "Medium", consequence: "Recurring issues are not resolved, leading to repeated downtime or quality deviations.", proof: "Signed handover logbook." },
                { id: "MFG-DPK-02", description: "Conduct a toolbox talk covering the day's production targets, safety focus, and quality alerts.", priority: "High", riskLevel: "Low", consequence: "Team is misaligned on priorities, increased risk of accidents or quality errors.", proof: "Toolbox talk attendance sheet and topic notes." },
                { id: "MFG-DPK-03", description: "Verify that raw material availability for the first 4 hours of production is confirmed.", priority: "High", riskLevel: "High", consequence: "Line stoppage due to material shortage, impacting entire day's output.", proof: "Material staging confirmation from stores." },
                { id: "MFG-DPK-04", description: "Check that all machine safety guards are in place and emergency stops are functional.", priority: "High", riskLevel: "High", consequence: "Catastrophic injury or fatality.", proof: "Pre-startup safety checklist signed by operator and supervisor." },
                { id: "MFG-DPK-05", description: "Ensure all operators are at their assigned stations and wearing the correct Personal Protective Equipment (PPE).", priority: "High", riskLevel: "Medium", consequence: "Workplace injuries, non-compliance with safety regulations.", proof: "Supervisor's visual inspection." },
                { id: "MFG-DPK-06", description: "Review the day's production schedule and ensure the first job's parameters are correctly set on the machines.", priority: "High", riskLevel: "Medium", consequence: "Production of non-conforming product, significant rework or scrap.", proof: "First-off inspection report." },
                { id: "MFG-DPK-07", description: "Confirm that the quality control station is ready with the required gauges, checklists, and sample containers.", priority: "Medium", riskLevel: "Medium", consequence: "Inability to perform in-process quality checks, leading to defect production.", proof: "QC station readiness checklist." },
                { id: "MFG-DPK-08", description: "Check that the area is clean, well-lit, and free from slip, trip, or fall hazards.", priority: "Medium", riskLevel: "Medium", consequence: "Workplace accidents, reduced efficiency.", proof: "5S audit checklist for the area." }
            ]
        },
        {
            title: "Lock-Out Tag-Out (LOTO)",
            department: "Maintenance/EHS",
            frequency: "Per Maintenance Task",
            role: "Maintenance Technician",
            summary: "A safety procedure to ensure dangerous machines are properly shut off and not started up again prior to the completion of maintenance or servicing work.",
            icon: "lock",
            tasks: [
                { id: "MFG-LOTO-01", description: "Notify all affected employees of the impending shutdown and the LOTO procedure.", priority: "High", riskLevel: "High", consequence: "Unexpected shutdown causes process issues; employees unaware of maintenance work.", proof: "Log of communication." },
                { id: "MFG-LOTO-02", description: "Shut down the machine or equipment using the normal stopping procedure.", priority: "High", riskLevel: "High", consequence: "Unsafe shutdown could damage equipment or leave it in a hazardous state.", proof: "Operator confirmation." },
                { id: "MFG-LOTO-03", description: "Isolate all energy sources (electrical, hydraulic, pneumatic, etc.) as per the machine-specific LOTO chart.", priority: "High", riskLevel: "High", consequence: "Stored energy can cause unexpected movement, leading to fatal injury.", proof: "LOTO checklist with each energy source ticked off." },
                { id: "MFG-LOTO-04", description: "Apply assigned, individual locks and tags to each energy isolating device.", priority: "High", riskLevel: "High", consequence: "Another worker could accidentally re-energize the machine.", proof: "Photo of the applied locks and tags." },
                { id: "MFG-LOTO-05", description: "Release or restrain all stored energy (e.g., bleed pneumatic lines, block elevated parts).", priority: "High", riskLevel: "High", consequence: "Injury from unexpected release of residual energy.", proof: "LOTO checklist verification." },
                { id: "MFG-LOTO-06", description: "VERIFY isolation by attempting to start the machine using the normal start button. This is the most critical step.", priority: "High", riskLevel: "High", consequence: "Assuming the machine is de-energized when it is not, leading to fatality.", proof: "Signature on the LOTO permit confirming verification." },
                { id: "MFG-LOTO-07", description: "Upon work completion, inspect the area and remove all tools.", priority: "High", riskLevel: "Medium", consequence: "Tools left in machine can cause damage on startup.", proof: "Work area clearance check." },
                { id: "MFG-LOTO-08", description: "Notify all affected employees that LOTO is being removed and the machine will be re-energized.", priority: "High", riskLevel: "Medium", consequence: "Unexpected startup injures someone not directly involved in maintenance.", proof: "Log of communication." },
                { id: "MFG-LOTO-09", description: "Remove LOTO devices. Each worker must remove their own lock.", priority: "High", riskLevel: "High", consequence: "A lock removed by someone else could lead to startup while a worker is still inside.", proof: "LOTO permit close-out signatures." }
            ]
        },
        {
            title: "Permit to Work (PTW) - Hot Work",
            department: "EHS/Maintenance",
            frequency: "Per Hot Work Task",
            role: "Area In-charge/Safety Officer",
            summary: "A formal documented process to control high-risk activities like welding, grinding, or cutting in non-designated areas.",
            icon: "file-check",
            tasks: [
                { id: "MFG-PTW-01", description: "Identify all combustible materials within a 35-foot (11-meter) radius of the hot work.", priority: "High", riskLevel: "High", consequence: "Fire and explosion.", proof: "Signed PTW form." },
                { id: "MFG-PTW-02", description: "Move combustibles to a safe distance or cover them with fire-retardant blankets.", priority: "High", riskLevel: "High", consequence: "Sparks igniting nearby materials.", proof: "Photo of the prepared work area." },
                { id: "MFG-PTW-03", description: "Ensure a trained fire watch is assigned and present for the duration of the work and for 30 minutes after.", priority: "High", riskLevel: "High", consequence: "Inability to extinguish a small fire before it spreads.", proof: "Fire watch named on the PTW." },
                { id: "MFG-PTW-04", description: "Ensure a fully charged fire extinguisher of the correct type is immediately available.", priority: "High", riskLevel: "High", consequence: "Fire cannot be controlled at inception.", proof: "Visual check documented on PTW." },
                { id: "MFG-PTW-05", description: "Seal all floor and wall openings to prevent sparks from traveling to other areas.", priority: "High", riskLevel: "Medium", consequence: "Fire starting in an unseen area.", proof: "Photo of sealed openings." },
                { id: "MFG-PTW-06", description: "Verify that any sprinkler systems in the area are operational.", priority: "High", riskLevel: "High", consequence: "Primary fire suppression system is not ready.", proof: "Check with engineering department." },
                { id: "MFG-PTW-07", description: "Authorize and issue the permit for a specific time frame only.", priority: "High", riskLevel: "Low", consequence: "Work continues without re-assessment of changing conditions.", proof: "Signed and dated PTW with start/end times." },
                { id: "MFG-PTW-08", description: "Upon completion, the fire watch and permit issuer must inspect the area for smoldering fires before closing the permit.", priority: "High", riskLevel: "High", consequence: "A fire starting after the work crew has left.", proof: "Final sign-off on the PTW." }
            ]
        },
        {
            title: "In-Process Quality Control (IPQC)",
            department: "Quality",
            frequency: "Hourly/Per Batch",
            role: "QC Inspector",
            summary: "Verifies that products meet quality standards at various stages of the production process to prevent large-scale defects.",
            icon: "clipboard-check",
            tasks: [
                { id: "MFG-QC-01", description: "First-Off Approval: Inspect the first part produced after any new setup against all drawing specifications.", priority: "High", riskLevel: "High", consequence: "Entire batch produced with a defect from the start.", proof: "Signed First-Off Inspection Report." },
                { id: "MFG-QC-02", description: "Random Sampling: Collect and inspect a random sample of products from the line at a set frequency (e.g., 5 pieces per hour).", priority: "High", riskLevel: "Medium", consequence: "Process deviations go undetected, leading to large amounts of scrap.", proof: "IPQC log sheet with measurements." },
                { id: "MFG-QC-03", description: "Verify machine parameters (e.g., temperature, pressure, speed) match the approved process sheet.", priority: "High", riskLevel: "Medium", consequence: "Product produced outside of validated process window.", proof: "Parameter check log." },
                { id: "MFG-QC-04", description: "Check calibration status of all measuring instruments and gauges being used.", priority: "High", riskLevel: "High", consequence: "Making decisions based on faulty measurements.", proof: "Valid calibration stickers on all instruments." },
                { id: "MFG-QC-05", description: "If a non-conformance is found, immediately hold the batch and escalate to the Production Supervisor.", priority: "High", riskLevel: "High", consequence: "Defective products are mixed with good products or shipped to customer.", proof: "Hold tag on the material and entry in the NC log." },
                { id: "MFG-QC-06", description: "Document all inspection results, including measurements and pass/fail status.", priority: "High", riskLevel: "Medium", consequence: "No data for traceability, root cause analysis, or process improvement.", proof: "Completed IPQC records." },
                { id: "MFG-QC-07", description: "Verify that operators are following the standard operating procedures (SOPs) for their process.", priority: "Medium", riskLevel: "Medium", consequence: "Process variations due to operator error.", proof: "Operator audit checklist." },
                { id: "MFG-QC-08", description: "Ensure all non-conforming material is clearly identified and moved to a designated quarantine area.", priority: "High", riskLevel: "High", consequence: "Accidental use of defective parts.", proof: "Photo of quarantined material with hold tag." }
            ]
        },
        {
            title: "Chemical Handling & Storage",
            department: "EHS",
            frequency: "Weekly",
            role: "EHS Officer",
            summary: "Ensures safe handling and storage of hazardous chemicals to prevent spills, fires, and employee exposure.",
            icon: "test-tube",
            tasks: [
                { id: "MFG-CHS-01", description: "Verify all chemical containers are correctly labeled with name, hazard symbols, and PPE requirements.", priority: "High", riskLevel: "High", consequence: "Misidentification of chemical leading to incorrect use or dangerous reaction.", proof: "Photo audit of chemical storage area." },
                { id: "MFG-CHS-02", description: "Ensure Safety Data Sheets (SDS/MSDS) are readily available for all chemicals on site.", priority: "High", riskLevel: "High", consequence: "Inability to respond correctly to a spill or exposure incident.", proof: "Index of available SDS files." },
                { id: "MFG-CHS-03", description: "Check that incompatible chemicals (e.g., acids and bases) are stored in separate, designated areas.", priority: "High", riskLevel: "High", consequence: "Violent chemical reaction, fire, or toxic gas release.", proof: "Inspection of chemical storage cabinets/rooms." },
                { id: "MFG-CHS-04", description: "Inspect chemical storage areas for leaks, spills, and proper ventilation.", priority: "High", riskLevel: "Medium", consequence: "Employee exposure to fumes, slip hazards, environmental contamination.", proof: "Weekly storage area inspection log." },
                { id: "MFG-CHS-05", description: "Verify that appropriate spill kits are available, fully stocked, and accessible.", priority: "High", riskLevel: "High", consequence: "A small spill becomes a major incident.", proof: "Spill kit inventory checklist." },
                { id: "MFG-CHS-06", description: "Ensure all employees handling chemicals have received specific training and are using correct PPE.", priority: "High", riskLevel: "High", consequence: "Chemical burns, respiratory damage, long-term health effects.", proof: "Review of training records and direct observation." },
                { id: "MFG-CHS-07", description: "Ensure all chemical waste is accumulated in properly labeled, closed containers for disposal by an authorized vendor.", priority: "High", riskLevel: "High", consequence: "Environmental violations, fines, danger to waste handlers.", proof: "Inspection of hazardous waste accumulation point." }
            ]
        }
    ]
};

const food_manufacturing_ops: PremiumPack = {
    id: 'food_manufacturing_ops',
    title: "Food Manufacturing Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/4579c50c-e2f9-4629-9e8c-572eb880940d',
    category: "Specialized Production",
    description: "A comprehensive, FSSAI & HACCP-aligned toolkit for food manufacturing facilities to ensure food safety, quality, and regulatory compliance.",
    icon: "factory",
    whoIsItFor: ["Food Factory GMs", "Heads of Quality (QA/QC)", "Production Managers", "Food Safety Officers"],
    sampleItems: [
        { text: "Implement a full HACCP plan with checklists for monitoring all Critical Control Points (CCPs).", icon: "shield-check" },
        { text: "Prevent cross-contamination with strict zoning, allergen management, and personnel hygiene protocols.", icon: "users" },
        { text: "Ensure full compliance with a 'one step forward, one step back' traceability and mock recall system.", icon: "search" },
        { text: "Validate your cleaning processes with checklists for equipment sanitation and ATP swab testing.", icon: "sparkles" },
        { text: "Manage non-conformances effectively with a structured Corrective and Preventive Action (CAPA) workflow.", icon: "bug" },
        { text: "Guarantee final product safety with robust procedures for finished product QC, testing, and batch release.", icon: "clipboard-check" }
    ],
    checklists: [
        {
            title: "HACCP Plan Implementation",
            department: "Quality",
            frequency: "Ongoing",
            role: "QA Manager",
            summary: "Ensures the HACCP food safety system is alive and effective.",
            icon: "shield-check",
            tasks: [
                { id: "HACCP-IMP-01", description: "Review and update the HACCP plan annually or when processes change.", priority: "High", riskLevel: "High", consequence: "An outdated plan does not address current risks, a major compliance failure.", proof: "Updated HACCP Plan" },
                { id: "HACCP-IMP-02", description: "Monitor all Critical Control Points (CCPs) as defined in the plan.", priority: "High", riskLevel: "High", consequence: "Failure to monitor a CCP (e.g., cooking temperature) can lead to unsafe food.", proof: "CCP Monitoring Records" },
                { id: "HACCP-IMP-03", description: "Take immediate corrective action for any CCP deviation.", priority: "High", riskLevel: "High", consequence: "Allows unsafe product to be produced and potentially shipped.", proof: "Corrective Action Report" },
                { id: "HACCP-IMP-04", description: "Verify that the HACCP system is working effectively through regular audits.", priority: "High", riskLevel: "High", consequence: "Without verification, you are only assuming the plan is working.", proof: "HACCP Verification Report" },
                { id: "HACCP-IMP-05", description: "Maintain all records related to the HACCP plan.", priority: "High", riskLevel: "High", consequence: "Lack of records is a major red flag for any food safety auditor.", proof: "HACCP Record File" },
                { id: "HACCP-IMP-06", description: "Train all employees on their roles in the HACCP plan.", priority: "High", riskLevel: "High", consequence: "The entire system depends on trained employees executing their roles correctly.", proof: "Training Records" },
                { id: "HACCP-IMP-07", description: "Conduct a hazard analysis for any new products or processes.", priority: "High", riskLevel: "High", consequence: "New products may introduce new hazards (e.g., allergens) that are not controlled.", proof: "Hazard Analysis Report" },
                { id: "HACCP-IMP-08", description: "Validate critical limits for CCPs.", priority: "High", riskLevel: "High", consequence: "If the critical limit is wrong (e.g., temp is too low), the CCP is ineffective.", proof: "Validation Study" },
                { id: "HACCP-IMP-09", description: "Review prerequisite programs (e.g., sanitation, pest control).", priority: "High", riskLevel: "High", consequence: "A HACCP plan cannot succeed without a strong foundation of basic hygiene.", proof: "PRP Review Report" },
                { id: "HACCP-IMP-10", description: "Hold regular HACCP team meetings.", priority: "High", riskLevel: "Medium", consequence: "Ensures ongoing management and improvement of the food safety system.", proof: "Meeting Minutes" }
            ]
        },
        {
            title: "Zoning & Cross-Contamination Control",
            department: "Production/Hygiene",
            frequency: "Daily",
            role: "Hygiene Supervisor",
            summary: "Implements physical and procedural barriers to prevent pathogens and allergens from contaminating finished products.",
            icon: "shield-alert",
            tasks: [
                { id: "ZCC-01", description: "Ensure clear physical separation between raw and cooked/ready-to-eat areas.", priority: "High", riskLevel: "High", consequence: "A primary cause of cross-contamination with pathogens like Salmonella or Listeria.", proof: "Visual Audit" },
                { id: "ZCC-02", description: "Use color-coded uniforms, tools, and cleaning equipment for different zones.", priority: "High", riskLevel: "High", consequence: "Prevents a dirty tool from a raw area being used in a clean, high-risk area.", proof: "Color Coding Chart" },
                { id: "ZCC-03", description: "Control personnel movement between zones.", priority: "High", riskLevel: "High", consequence: "People can carry pathogens on their shoes and clothes from a raw to a clean zone.", proof: "Access Control Log" },
                { id: "ZCC-04", description: "Manage airflow to prevent airborne contamination from raw to clean areas.", priority: "High", riskLevel: "High", consequence: "Important for controlling airborne pathogens like Listeria.", proof: "Air Pressure Monitoring" },
                { id: "ZCC-05", description: "Have separate cleaning procedures for different zones.", priority: "High", riskLevel: "High", consequence: "Ensures the highest level of sanitation is applied to high-risk areas.", proof: "Cleaning SOPs" },
                { id: "ZCC-06", description: "Ensure waste from raw areas does not pass through finished product areas.", priority: "High", riskLevel: "High", consequence: "A major vector for spreading contamination.", proof: "Waste Movement Path" },
                { id: "ZCC-07", description: "Train employees on the importance of zoning and cross-contamination control.", priority: "High", riskLevel: "High", consequence: "The system only works if employees understand and follow the rules.", proof: "Training Records" },
                { id: "ZCC-08", description: "Audit zoning compliance weekly.", priority: "High", riskLevel: "High", consequence: "Regular audits are needed to enforce compliance.", proof: "Zoning Audit Report" },
                { id: "ZCC-09", description: "Use foot baths or sanitizing mats at the entrance to high-risk areas.", priority: "High", riskLevel: "High", consequence: "Helps to prevent pathogens from being tracked in on footwear.", proof: "Visual Check" },
                { id: "ZCC-10", description: "Test for allergens in finished products to verify control measures.", priority: "High", riskLevel: "High", consequence: "The ultimate proof that your allergen control zoning is effective.", proof: "Allergen Test Results" }
            ]
        },
        {
            title: "Traceability & Recall Procedure",
            department: "Quality",
            frequency: "Per Batch/Recall Drill",
            role: "QA Manager",
            summary: "A system to trace products through the supply chain and execute a rapid, effective recall if necessary.",
            icon: "search",
            tasks: [
                { id: "TRACE-01", description: "Assign a unique batch code to every batch of finished product.", priority: "High", riskLevel: "High", consequence: "Without a batch code, traceability is impossible.", proof: "Batch Code Log" },
                { id: "TRACE-02", description: "Link finished product batch codes to the raw material batch codes used.", priority: "High", riskLevel: "High", consequence: "This is the core of \"one step forward, one step back\" traceability.", proof: "Batch Production Record" },
                { id: "TRACE-03", description: "Conduct a mock recall drill twice a year.", priority: "High", riskLevel: "High", consequence: "Tests your ability to trace a product and contact customers quickly in a real crisis.", proof: "Mock Recall Report" },
                { id: "TRACE-04", description: "Maintain an up-to-date contact list for all distributors and regulators.", priority: "High", riskLevel: "High", consequence: "In a recall, wasting time looking for contact details can be costly and dangerous.", proof: "Contact List" },
                { id: "TRACE-05", description: "Have a pre-approved public communication template for recalls.", priority: "High", riskLevel: "Medium", consequence: "Allows for rapid, clear, and legally vetted communication during a crisis.", proof: "Communication Template" },
                { id: "TRACE-06", description: "Define a clear recall team with roles and responsibilities.", priority: "High", riskLevel: "High", consequence: "In a recall, a clear command structure is essential to avoid chaos.", proof: "Recall Team Chart" },
                { id: "TRACE-07", description: "Test the ability to trace a batch forward (to customer) and backward (to supplier).", priority: "High", riskLevel: "High", consequence: "Proves that your traceability system actually works end-to-end.", proof: "Traceability Test Report" },
                { id: "TRACE-08", description: "Have a clear procedure for product destruction or return during a recall.", priority: "High", riskLevel: "High", consequence: "Ensures that recalled product is effectively removed from the market.", proof: "Destruction/Return SOP" },
                { id: "TRACE-09", description: "Investigate the root cause of any recall and implement corrective actions.", priority: "High", riskLevel: "High", consequence: "The most important step to prevent the same problem from happening again.", proof: "CAPA Report" },
                { id: "TRACE-10", description: "Notify regulators within the required timeframe during a recall.", priority: "High", riskLevel: "High", consequence: "A legal requirement that carries heavy penalties if missed.", proof: "Regulatory Notification" }
            ]
        },
        {
            title: "Personnel Hygiene & Training",
            department: "HR/Hygiene",
            frequency: "Ongoing",
            role: "Hygiene Officer",
            summary: "Ensures all food handlers meet strict hygiene standards to prevent contamination.",
            icon: "user-check",
            tasks: [
                { id: "PHT-01", description: "Conduct pre-employment and annual medical check-ups for all food handlers.", priority: "High", riskLevel: "High", consequence: "Prevents individuals with communicable diseases from handling food.", proof: "Medical Records" },
                { id: "PHT-02", description: "Enforce a strict uniform policy, including hairnets, masks, and dedicated footwear.", priority: "High", riskLevel: "High", consequence: "Prevents physical contaminants (hair) and pathogens from entering the food.", proof: "Daily Uniform Audit" },
                { id: "PHT-03", description: "Monitor handwashing stations and ensure proper handwashing technique is followed.", priority: "High", riskLevel: "High", consequence: "Improper handwashing is a primary cause of foodborne illness.", proof: "Handwashing Audit Log" },
                { id: "PHT-04", description: "Implement a \"no jewelry\" and \"no nail polish\" policy.", priority: "High", riskLevel: "High", consequence: "Jewelry can fall into food (physical hazard) and nail polish can chip (chemical hazard).", proof: "Visual Check" },
                { id: "PHT-05", description: "Ensure all staff complete FSSAI FoSTaC training.", priority: "High", riskLevel: "High", consequence: "A legal requirement in India and a baseline for food safety knowledge.", proof: "FoSTaC Certificates" },
                { id: "PHT-06", description: "Have a clear policy for staff with illnesses or open wounds.", priority: "High", riskLevel: "High", consequence: "A sick employee working can cause a massive food poisoning outbreak.", proof: "Sick Leave Policy" },
                { id: "PHT-07", description: "Conduct regular refresher training on GMP and food safety.", priority: "High", riskLevel: "High", consequence: "Ensures food safety remains top-of-mind and knowledge is current.", proof: "Training Calendar" },
                { id: "PHT-08", description: "Restrict personal items from being brought into the production area.", priority: "High", riskLevel: "Medium", consequence: "Personal items can be a source of contamination.", proof: "Locker Room Policy" },
                { id: "PHT-09", description: "Post hygiene reminders in multiple languages.", priority: "Medium", riskLevel: "Low", consequence: "Reinforces key messages in a diverse workforce.", proof: "Signage Photos" },
                { id: "PHT-10", description: "Observe and correct any unsafe personal behaviors.", priority: "High", riskLevel: "High", consequence: "Builds a culture of hygiene and accountability.", proof: "Behavioral Observation Report" }
            ]
        },
        {
            title: "Equipment Cleaning & Sanitization",
            department: "Maintenance/Hygiene",
            frequency: "Daily/Scheduled",
            role: "Sanitation Supervisor",
            summary: "A systematic approach to cleaning to ensure all equipment is free from food residues and harmful bacteria.",
            icon: "sparkles",
            tasks: [
                { id: "ECS-01", description: "Follow a master sanitation schedule for all equipment and areas.", priority: "High", riskLevel: "High", consequence: "Without a schedule, cleaning tasks are easily forgotten.", proof: "Master Sanitation Schedule" },
                { id: "ECS-02", description: "Use validated CIP/COP procedures for all food contact equipment.", priority: "High", riskLevel: "High", consequence: "An unvalidated procedure may not effectively remove soil and pathogens.", proof: "Cleaning Procedure Documents" },
                { id: "ECS-03", description: "Verify cleaning effectiveness using ATP swabs or protein tests.", priority: "High", riskLevel: "High", consequence: "The only way to scientifically prove that a surface is truly clean.", proof: "ATP Test Log" },
                { id: "ECS-04", description: "Maintain logs for all cleaning and sanitization activities.", priority: "High", riskLevel: "High", consequence: "Provides a legal record of due diligence for food safety audits.", proof: "Cleaning Logs" },
                { id: "ECS-05", description: "Use only food-grade, approved cleaning chemicals.", priority: "High", riskLevel: "High", consequence: "Using unapproved chemicals can introduce chemical hazards into the food.", proof: "Chemical Approval List" },
                { id: "ECS-06", description: "Train staff on correct chemical handling and dilution.", priority: "High", riskLevel: "High", consequence: "Incorrect dilution can make a sanitizer ineffective or dangerously strong.", proof: "Training Records" },
                { id: "ECS-07", description: "Disassemble equipment for cleaning where required.", priority: "High", riskLevel: "High", consequence: "Hidden areas that are not cleaned can harbor massive amounts of bacteria.", proof: "Disassembly SOP" },
                { id: "ECS-08", description: "Inspect equipment for cleanliness before starting production.", priority: "High", riskLevel: "High", consequence: "The final check to ensure you are not starting work on dirty equipment.", proof: "Pre-op Inspection Log" },
                { id: "ECS-09", description: "Manage and clean non-food contact surfaces (floors, walls, drains).", priority: "High", riskLevel: "Medium", consequence: "A dirty environment can lead to indirect contamination of food.", proof: "Area Cleaning Schedule" },
                { id: "ECS-10", description: "Titrate sanitizer concentrations daily to ensure effectiveness.", priority: "High", riskLevel: "High", consequence: "Sanitizer concentration can degrade over time, making it useless.", proof: "Titration Log" }
            ]
        }
    ]
};

const bakery_confectionery_pack: PremiumPack = {
    id: 'bakery_confectionery_pack',
    title: "Bakery & Confectionery Operations Pack",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/d863f69b-8919-4115-b778-831d17d120fb',
    category: "Food & Beverage",
    description: "A specialized toolkit for bakery and confectionery owners to ensure product consistency, food safety, and operational efficiency.",
    icon: "cake-slice",
    badgeText: "Special Offer",
    badgeVariant: "accent",
    whoIsItFor: ["Bakery Owners", "Head Bakers", "Pastry Chefs", "Cafe Owners with in-house baking"],
    sampleItems: [
        { text: "Achieve perfect results every time with recipe scaling and dough management checklists.", icon: "clipboard-list" },
        { text: "Ensure food safety with HACCP-aligned protocols for ingredient handling and allergen control.", icon: "shield-check" },
        { text: "Maintain equipment precision with SOPs for oven calibration and mixer maintenance.", icon: "wrench" },
        { text: "Maximize freshness and minimize waste with a structured display and stock rotation system.", icon: "recycle" },
        { text: "Guarantee compliance with FSSAI regulations for packaging, labeling, and expiry dates.", icon: "file-check" },
        { text: "Streamline your custom order process from client briefing to final delivery.", icon: "package" }
    ],
    checklists: [
        {
            title: "Daily Opening Hygiene & Prep (HACCP)",
            department: "Kitchen",
            frequency: "Daily",
            role: "Opening Baker/Chef",
            summary: "Ensures a safe and sanitary start to the day, focusing on critical food safety points.",
            icon: "sparkles",
            tasks: [
                { id: "BC-OH-01", description: "Record temperatures of all refrigerators and freezers.", priority: "High", riskLevel: "High", consequence: "Spoilage of dairy, eggs; violation of food safety laws.", proof: "Temperature logbook.", location: "Cold Storage" },
                { id: "BC-OH-02", description: "Sanitize all work surfaces, mixers, and food contact equipment.", priority: "High", riskLevel: "High", consequence: "Cross-contamination, foodborne illness.", proof: "Sanitization log.", location: "Prep Area, Mixing Station" },
                { id: "BC-OH-03", description: "Check staff for clean uniforms, proper hair restraints, and good personal hygiene.", priority: "High", riskLevel: "Medium", consequence: "Contamination of products.", proof: "Supervisor's opening checklist.", location: "Staff Area" },
                { id: "BC-OH-04", description: "Verify handwashing stations are fully stocked with soap, hot water, and paper towels.", priority: "High", riskLevel: "Medium", consequence: "Poor hand hygiene, spread of germs.", proof: "Visual check.", location: "All Hand Sinks" },
                { id: "BC-OH-05", description: "Calibrate food thermometers using ice bath method.", priority: "High", riskLevel: "High", consequence: "Incorrect temperature readings for cooking and cooling, major food safety risk.", proof: "Thermometer calibration log.", location: "Kitchen" },
                { id: "BC-OH-06", description: "Check for any signs of pest activity and log findings.", priority: "High", riskLevel: "High", consequence: "Infestation, health department closure.", proof: "Pest control logbook.", location: "All Areas" },
                { id: "BC-OH-07", description: "Ensure ingredients are stored properly (e.g., flour in sealed containers, dairy separate).", priority: "Medium", riskLevel: "Medium", consequence: "Ingredient spoilage, cross-contamination.", proof: "Visual audit of storage areas.", location: "Dry & Cold Storage" }
            ]
        },
        {
            title: "Ingredient & Allergen Management",
            department: "Kitchen/Stores",
            frequency: "Ongoing",
            role: "Head Baker/Storekeeper",
            summary: "Manages ingredient inventory and prevents life-threatening allergen cross-contact.",
            icon: "file-warning",
            tasks: [
                { id: "BC-AM-01", description: "Maintain an up-to-date allergen matrix for all products, listing common allergens.", priority: "High", riskLevel: "High", consequence: "Anaphylactic shock in a customer, lawsuits, brand ruin.", proof: "Posted and updated allergen chart.", location: "Kitchen & POS" },
                { id: "BC-AM-02", description: "Use designated, color-coded (purple) utensils and containers for allergen-free preparations.", priority: "High", riskLevel: "High", consequence: "Accidental cross-contact leading to allergic reaction.", proof: "Photo of designated allergen kit.", location: "Prep Station" },
                { id: "BC-AM-03", description: "Store allergenic ingredients (like nuts, gluten) in sealed, labeled containers below non-allergens.", priority: "High", riskLevel: "Medium", consequence: "Cross-contamination from spills.", proof: "Photo of storage shelves.", location: "Dry Storage" },
                { id: "BC-AM-04", description: "Upon receiving, check all ingredient labels for any changes in allergen information from the supplier.", priority: "High", riskLevel: "High", consequence: "Unknowingly introducing a new allergen into the kitchen.", proof: "Receiving checklist.", location: "Receiving Area" },
                { id: "BC-AM-05", description: "Implement a FIFO (First-In, First-Out) system for all ingredients.", priority: "High", riskLevel: "Medium", consequence: "Ingredient spoilage and wastage.", proof: "Visual check of date labels on shelves.", location: "Storage Areas" },
                { id: "BC-AM-06", description: "Train all staff (kitchen and front-of-house) on the bakery's allergen policy and procedures.", priority: "High", riskLevel: "High", consequence: "Staff giving incorrect information to customers.", proof: "Allergen training records.", location: "HR/Training" },
                { id: "BC-AM-07", description: "When a customer reports an allergy, the order must be communicated to the kitchen on a separate, clearly marked ticket.", priority: "High", riskLevel: "High", consequence: "Miscommunication leading to a contaminated product.", proof: "Copy of an 'allergy alert' order ticket.", location: "POS/Kitchen" }
            ]
        },
        {
            title: "Recipe & Production Consistency",
            department: "Production",
            frequency: "Per Batch",
            role: "Baker/Pastry Chef",
            summary: "Ensures every batch of product is consistent in quality, size, and taste.",
            icon: "clipboard-list",
            tasks: [
                { id: "BC-PC-01", description: "Use standardized, documented recipes for all products.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent product, variable food cost.", proof: "Recipe book/database." },
                { id: "BC-PC-02", description: "Measure all ingredients by weight using a calibrated digital scale, not by volume.", priority: "High", riskLevel: "High", consequence: "Inconsistent texture, taste, and yield.", proof: "Observation of process.", location: "Mixing Station" },
                { id: "BC-PC-03", description: "Log dough/batter mixing times and final temperatures.", priority: "High", riskLevel: "Medium", consequence: "Poor dough development, inconsistent final product.", proof: "Batch production log.", location: "Mixing Station" },
                { id: "BC-PC-04", description: "Use templates or standardized portioning tools (scoops, cutters) for consistent product size.", priority: "Medium", riskLevel: "Low", consequence: "Inconsistent appearance and baking times.", proof: "Visual check of portioned products.", location: "Benching Area" },
                { id: "BC-PC-05", description: "Check oven temperatures with an independent thermometer before baking.", priority: "High", riskLevel: "High", consequence: "Under-baked or burnt products, inconsistent results.", proof: "Oven temperature log.", location: "Oven Area" },
                { id: "BC-PC-06", description: "Log baking times and temperatures for each batch.", priority: "Medium", riskLevel: "Low", consequence: "Inability to troubleshoot baking issues.", proof: "Baking log.", location: "Oven Area" },
                { id: "BC-PC-07", description: "Perform a quality check on the first product out of the oven from each batch (color, size, internal temp).", priority: "High", riskLevel: "Medium", consequence: "An entire batch could be wasted if an error is not caught early.", proof: "First-off inspection log.", location: "Cooling Area" }
            ]
        },
        {
            title: "Display & Freshness Management",
            department: "Front of House",
            frequency: "Daily",
            role: "Counter Staff/Manager",
            summary: "Keeps the display attractive, well-stocked, and ensures only fresh products are sold.",
            icon: "cake",
            tasks: [
                { id: "BC-DF-01", description: "Clean and sanitize all display cases, trays, and tongs before stocking.", priority: "High", riskLevel: "Medium", consequence: "Hygiene issues, poor presentation.", proof: "Opening checklist.", location: "Display Counter" },
                { id: "BC-DF-02", description: "Stock the display according to the planogram, ensuring it looks full and appealing.", priority: "Medium", riskLevel: "Low", consequence: "Reduced sales.", proof: "Photo of the display case.", location: "Display Counter" },
                { id: "BC-DF-03", description: "Use a FIFO (First-In, First-Out) system for all displayed products.", priority: "High", riskLevel: "Medium", consequence: "Increased wastage of older products.", proof: "Observation of restocking procedure.", location: "Display Counter" },
                { id: "BC-DF-04", description: "Ensure all products are correctly labeled with name and price.", priority: "High", riskLevel: "Low", consequence: "Customer confusion, pricing errors.", proof: "Visual check.", location: "Display Counter" },
                { id: "BC-DF-05", description: "Log temperatures of refrigerated display cases twice daily.", priority: "High", riskLevel: "High", consequence: "Spoilage of cream-based products.", proof: "Temperature log.", location: "Display Counter" },
                { id: "BC-DF-06", description: "Implement a markdown strategy for items nearing the end of their shelf life (e.g., 'end-of-day special').", priority: "Medium", riskLevel: "Low", consequence: "Lost revenue from unsold items.", proof: "Markdown policy document.", location: "POS" },
                { id: "BC-DF-07", description: "Remove, log, and dispose of any unsold products at the end of the day as per policy.", priority: "High", riskLevel: "Medium", consequence: "Selling stale product, damaging brand reputation.", proof: "End-of-day wastage log.", location: "POS/Waste Area" }
            ]
        },
        {
            title: "Equipment Maintenance & Calibration",
            department: "Maintenance/Kitchen",
            frequency: "Weekly/Monthly",
            role: "Head Baker/Maintenance",
            summary: "A preventive maintenance schedule to keep critical bakery equipment running reliably and accurately.",
            icon: "wrench",
            tasks: [
                { id: "BC-EM-01", description: "Weekly: Deep clean mixers, removing all dough/batter residue.", priority: "Medium", riskLevel: "Low", consequence: "Hygiene issues, equipment strain.", proof: "Cleaning log." },
                { id: "BC-EM-02", description: "Monthly: Calibrate all weighing scales using certified weights.", priority: "High", riskLevel: "High", consequence: "Inconsistent recipes, incorrect food cost.", proof: "Scale calibration log." },
                { id: "BC-EM-03", description: "Monthly: Check and clean oven seals and doors for proper heat retention.", priority: "High", riskLevel: "Medium", consequence: "Inconsistent baking, high energy costs.", proof: "Oven maintenance log." },
                { id: "BC-EM-04", description: "Monthly: Check and clean refrigeration unit condensers and fans.", priority: "High", riskLevel: "High", consequence: "Compressor failure, loss of all cold stock.", proof: "Refrigeration maintenance log." },
                { id: "BC-EM-05", description: "Weekly: Inspect dough sheeters and dividers for cleanliness and safety guard function.", priority: "High", riskLevel: "High", consequence: "Serious entanglement injury.", proof: "Equipment safety checklist." },
                { id: "BC-EM-06", description: "Quarterly: Schedule professional servicing for major equipment like ovens and mixers as per manufacturer's recommendation.", priority: "High", riskLevel: "Medium", consequence: "Major breakdown, costly repairs.", proof: "Vendor service reports." }
            ]
        },
        {
            title: "Custom Order Workflow",
            department: "Sales/Production",
            frequency: "Per Custom Order",
            role: "Manager/Head Baker",
            summary: "A structured process to take, produce, and deliver custom cake or confectionery orders without errors.",
            icon: "package",
            tasks: [
                { id: "BC-CO-01", description: "Use a standardized order form to capture all customer requirements (size, flavor, design, message, delivery date).", priority: "High", riskLevel: "High", consequence: "Wrong cake made, major customer disappointment.", proof: "Completed custom order form." },
                { id: "BC-CO-02", description: "Confirm all details with the customer and get their signature on the order form.", priority: "High", riskLevel: "Medium", consequence: "Disputes over original requirements.", proof: "Signed order form." },
                { id: "BC-CO-03", description: "Collect a deposit and provide a receipt.", priority: "High", riskLevel: "Low", consequence: "Financial loss if customer cancels.", proof: "Payment receipt." },
                { id: "BC-CO-04", description: "Create a detailed production brief for the kitchen team, including a sketch or photo of the design.", priority: "High", riskLevel: "High", consequence: "Bakers do not understand the design requirements.", proof: "Kitchen production brief." },
                { id: "BC-CO-05", description: "Schedule the production tasks in the kitchen calendar.", priority: "Medium", riskLevel: "Low", consequence: "Order is forgotten or rushed.", proof: "Entry in production calendar." },
                { id: "BC-CO-06", description: "Perform a final quality check of the finished product against the order form before packing.", priority: "High", riskLevel: "High", consequence: "Delivering a cake with an error (e.g., misspelled name).", proof: "QC sign-off on the order form." },
                { id: "BC-CO-07", description: "Pack the order in appropriate, stable packaging for transport.", priority: "High", riskLevel: "Medium", consequence: "Product damaged in transit.", proof: "Visual check." },
                { id: "BC-CO-08", description: "Confirm pickup or delivery details with the customer a day in advance.", priority: "Medium", riskLevel: "Low", consequence: "Missed delivery/pickup.", proof: "Log of confirmation call/email." }
            ]
        }
    ]
};

const animal_shelter_pack: PremiumPack = {
    id: 'animal_shelter_pack',
    title: "Animal Shelter Operations Pack",
    priceINR: 0,
    priceUSD: 0,
    paymentId: '', // No payment ID for free packs
    lemonSqueezyUrl: '', // No payment URL for free packs
    listId: 7,
    category: "Social Cause",
    description: "A comprehensive toolkit for animal shelters and NGOs to ensure animal welfare, disease prevention, and operational efficiency.",
    icon: "paw-print",
    badgeText: "Free Download",
    badgeVariant: "accent",
    whoIsItFor: ["Animal Shelter Managers", "NGO Founders", "Veterinarians", "Volunteer Coordinators"],
    sampleItems: [
        { text: "Prevent disease outbreaks with rigorous cleaning, disinfection, and quarantine protocols.", icon: "sparkles" },
        { text: "Ensure every animal's health with checklists for daily feeding, medication administration, and health monitoring.", icon: "stethoscope" },
        { text: "Manage your population responsibly with SOPs for intake, vaccination, and spay/neuter programs.", icon: "syringe" },
        { text: "Create a safe environment for animals and people with protocols for temperament testing and safe handling.", icon: "users" },
        { text: "Increase adoptions with a structured process for counseling, home checks, and post-adoption follow-up.", icon: "home" },
        { text: "Streamline your operations with checklists for volunteer management, inventory, and fundraising events.", icon: "clipboard-list" }
    ],
    checklists: [
         {
            title: "Daily Cleaning & Disinfection",
            department: "Operations",
            frequency: "Daily",
            role: "Shelter Staff",
            summary: "Ensures a sanitary environment to prevent disease transmission among animals.",
            icon: "spray-can",
            tasks: [
                { id: "AC-DC-01", description: "Remove all feces, urine, and soiled bedding from every enclosure.", priority: "High", riskLevel: "High", consequence: "Disease outbreak (Parvo, etc.), unpleasant odors, regulatory action.", proof: "Supervisor sign-off on cleaning log.", location: "All Enclosures" },
                { id: "AC-DC-02", description: "Scrub all food and water bowls with veterinary-grade disinfectant.", priority: "High", riskLevel: "Medium", consequence: "Spread of oral infections, gastrointestinal illness.", proof: "Visual inspection by supervisor.", location: "Kitchen/Cleaning Area" },
                { id: "AC-DC-03", description: "Disinfect all enclosure surfaces (floors, walls, gates) with approved sanitizer.", priority: "High", riskLevel: "High", consequence: "High risk of communicable disease spread.", proof: "Completed cleaning checklist for each zone.", location: "All Enclosures" },
                { id: "AC-DC-04", description: "Clean and disinfect all common play areas and meet-and-greet rooms.", priority: "Medium", riskLevel: "Medium", consequence: "Disease transmission between animal groups.", proof: "Logbook entry for common areas.", location: "Play Areas" },
                { id: "AC-DC-05", description: "Empty and disinfect all waste bins.", priority: "Low", riskLevel: "Low", consequence: "Pest attraction, odor issues.", proof: "Visual confirmation.", location: "Waste Disposal Area" },
                { id: "AC-DC-06", description: "Launder all used bedding and towels with a sanitizing cycle.", priority: "High", riskLevel: "Medium", consequence: "Spread of mites, ringworm, and other contagions.", proof: "Laundry operations log.", location: "Laundry Area" },
                { id: "AC-DC-07", description: "Ensure proper ventilation in all animal housing areas.", priority: "Medium", riskLevel: "Medium", consequence: "Buildup of airborne pathogens, respiratory illnesses.", proof: "Daily check of ventilation systems.", location: "All Enclosures" },
                { id: "AC-DC-08", description: "Maintain separate cleaning equipment for quarantine/isolation areas.", priority: "High", riskLevel: "High", consequence: "Cross-contamination from sick animals to general population.", proof: "Color-coded equipment and storage.", location: "Quarantine/Isolation" },
                { id: "AC-DC-09", description: "Dispose of biomedical waste (needles, etc.) in designated sharps containers.", priority: "High", riskLevel: "High", consequence: "Injury to staff, improper waste disposal fines.", proof: "Sharps container check log.", location: "Medical Room" },
                { id: "AC-DC-10", description: "Check and refill all hand sanitizer stations and handwashing sinks.", priority: "High", riskLevel: "Low", consequence: "Poor biosecurity, spread of disease among staff/volunteers.", proof: "Daily facility walkthrough log.", location: "All Areas" }
            ]
        },
        {
            title: "Animal Intake & Quarantine Protocol",
            department: "Medical",
            frequency: "Per new animal arrival",
            role: "Intake Coordinator / Vet Tech",
            summary: "Safely process new animals, assess their health, and prevent the introduction of diseases to the general population.",
            icon: "shield-check",
            tasks: [
                { id: "AI-IQ-01", description: "Photograph and log new animal's details (species, breed, age, color, markings).", priority: "High", riskLevel: "Low", consequence: "Inability to track animal, lost/found matching failure.", proof: "Entry in shelter management software with photo.", location: "Intake Room" },
                { id: "AI-IQ-02", description: "Scan for microchip and check against national databases.", priority: "High", riskLevel: "Low", consequence: "Failure to reunite a lost pet with its owner.", proof: "Microchip scan log.", location: "Intake Room" },
                { id: "AI-IQ-03", description: "Perform initial health screening (check for wounds, parasites, signs of illness).", priority: "High", riskLevel: "High", consequence: "Undiagnosed injury/illness could worsen or spread.", proof: "Completed intake health assessment form.", location: "Intake Room" },
                { id: "AI-IQ-04", description: "Administer initial vaccinations and deworming as per shelter protocol.", priority: "High", riskLevel: "High", consequence: "Vulnerability to preventable diseases like distemper or rabies.", proof: "Medical record updated with administered treatments.", location: "Intake Room" },
                { id: "AI-IQ-05", description: "Place new animal in a designated quarantine enclosure for the required period (e.g., 7-14 days).", priority: "High", riskLevel: "High", consequence: "Introduction of contagious disease to the general population.", proof: "Quarantine placement logged in shelter management software.", location: "Quarantine Zone" },
                { id: "AI-IQ-06", description: "Perform a basic temperament test to assess aggression, fear, and sociability.", priority: "High", riskLevel: "Medium", consequence: "Safety risk to staff and other animals.", proof: "Temperament test score sheet.", location: "Intake/Assessment Room" },
                { id: "AI-IQ-07", description: "Create a unique identification collar and record for the animal.", priority: "High", riskLevel: "Low", consequence: "Animal mix-ups.", proof: "ID collar and record in software.", location: "Intake Room" },
                { id: "AI-IQ-08", description: "Provide food, clean water, and comfortable bedding upon arrival.", priority: "High", riskLevel: "Low", consequence: "Animal distress and dehydration.", proof: "Intake checklist sign-off.", location: "Quarantine Enclosure" },
                { id: "AI-IQ-09", description: "Schedule a full veterinary examination within 24 hours of intake.", priority: "High", riskLevel: "High", consequence: "Delayed treatment of serious conditions.", proof: "Vet schedule/appointment log.", location: "Intake Room" },
                { id: "AI-IQ-10", description: "Log all information from the finder/previous owner, if available.", priority: "Medium", riskLevel: "Low", consequence: "Loss of valuable behavioral or medical history.", proof: "Intake form with owner surrender section.", location: "Intake Room" }
            ]
        },
        {
            title: "Daily Feeding & Health Monitoring",
            department: "Animal Care",
            frequency: "Daily (Twice)",
            role: "Animal Care Attendant",
            summary: "Ensures all animals receive proper nutrition and are monitored for early signs of illness or distress.",
            icon: "heart-pulse",
            tasks: [
                { id: "AH-DF-01", description: "Feed each animal the correct type and amount of food according to their specific dietary plan.", priority: "High", riskLevel: "Medium", consequence: "Malnutrition, obesity, allergic reactions, medical complications.", proof: "Feeding chart checked off for each animal.", location: "All Enclosures" },
                { id: "AH-DF-02", description: "Provide fresh, clean water to every animal.", priority: "High", riskLevel: "Medium", consequence: "Dehydration, which can quickly become a medical emergency.", proof: "Visual inspection during feeding rounds.", location: "All Enclosures" },
                { id: "AH-DF-03", description: "Observe each animal during feeding for changes in appetite, behavior, or stool quality.", priority: "High", riskLevel: "High", consequence: "Missed early signs of illness, leading to delayed treatment.", proof: "Daily observation log completed for each animal.", location: "All Enclosures" },
                { id: "AH-DF-04", description: "Report any abnormalities (lethargy, vomiting, coughing, etc.) to the vet team immediately.", priority: "High", riskLevel: "High", consequence: "A sick animal's condition could deteriorate rapidly without intervention.", proof: "Entry in medical communication log or direct report.", location: "All Enclosures" },
                { id: "AH-DF-05", description: "Ensure animals with special feeding needs (e.g., puppies, seniors) are fed separately.", priority: "High", riskLevel: "Medium", consequence: "Competition for food, incorrect diet consumption.", proof: "Feeding log.", location: "Special Needs Area" },
                { id: "AH-DF-06", description: "Check for and clean up any uneaten food after a set period to prevent pests.", priority: "Medium", riskLevel: "Low", consequence: "Pest infestation.", proof: "Visual check.", location: "All Enclosures" },
                { id: "AH-DF-07", description: "Update the whiteboards or kennel cards with any relevant observations for the next shift.", priority: "High", riskLevel: "Low", consequence: "Loss of critical information between shifts.", proof: "Photo of updated kennel card.", location: "Enclosure fronts" },
                { id: "AH-DF-08", description: "Monitor animals in quarantine/isolation areas last to prevent cross-contamination.", priority: "High", riskLevel: "High", consequence: "Spreading disease to the general population.", proof: "Workflow observation.", location: "Quarantine/Isolation" },
                { id: "AH-DF-09", description: "Ensure enrichment items (e.g., toys) are clean and safe.", priority: "Low", riskLevel: "Low", consequence: "Boredom, stress, potential for swallowing foreign objects.", proof: "Visual check.", location: "All Enclosures" },
                { id: "AH-DF-10", description: "Top up water bowls during afternoon checks.", priority: "High", riskLevel: "Medium", consequence: "Dehydration.", proof: "Visual check.", location: "All Enclosures" }
            ]
        },
            {
            title: "Medication Administration",
            department: "Medical",
            frequency: "As per prescription",
            role: "Vet Tech / Trained Staff",
            summary: "Ensures animals receive their prescribed medications correctly and on time.",
            icon: "pill",
            tasks: [
                { id: "AM-MA-01", description: "Verify patient identity, medication, dosage, and route before administration (The '5 Rights').", priority: "High", riskLevel: "High", consequence: "Overdose, underdose, or wrong medication can cause harm or death.", proof: "Medication Administration Record (MAR) initialed after each dose.", location: "Treatment Area / Enclosures" },
                { id: "AM-MA-02", description: "Document the time and date of every medication given in the animal's medical record.", priority: "High", riskLevel: "Medium", consequence: "Inaccurate medical history, risk of double-dosing.", proof: "Signed MAR sheet.", location: "Medical Records" },
                { id: "AM-MA-03", description: "Observe animal post-administration for any adverse reactions.", priority: "Medium", riskLevel: "High", consequence: "Untreated allergic reaction or side effect could be fatal.", proof: "Note in daily observation log.", location: "Enclosures" },
                { id: "AM-MA-04", description: "Securely store all medications, especially controlled substances, in a locked cabinet.", priority: "High", riskLevel: "High", consequence: "Theft, misuse, accidental ingestion, regulatory violations.", proof: "Weekly controlled substance inventory log.", location: "Pharmacy/Storage" },
                { id: "AM-MA-05", description: "Never leave medication unattended or in an animal's food bowl if consumption is not observed.", priority: "High", riskLevel: "High", consequence: "Animal may not receive medication; other animals might eat it.", proof: "Direct observation of administration.", location: "Enclosures" },
                { id: "AM-MA-06", description: "Dispose of used needles and syringes in a designated sharps container.", priority: "High", riskLevel: "High", consequence: "Needlestick injuries to staff.", proof: "Visual check of sharps container.", location: "Medical Room" },
                { id: "AM-MA-07", description: "Check medication inventory and report any drugs running low.", priority: "Medium", riskLevel: "Medium", consequence: "Running out of essential medication.", proof: "Inventory sheet.", location: "Pharmacy/Storage" },
                { id: "AM-MA-08", description: "Use a pill-giver or disguise medication in a treat as approved by the vet.", priority: "Low", riskLevel: "Low", consequence: "Animal refuses to take medication.", proof: "N/A", location: "Enclosures" },
                { id: "AM-MA-09", description: "Verify with a second trained staff member for all controlled drug administrations.", priority: "High", riskLevel: "High", consequence: "Dosing errors or drug diversion.", proof: "Dual signature on MAR.", location: "Treatment Area" },
                { id: "AM-MA-10", description: "Clean any spills of liquid medication immediately.", priority: "Medium", riskLevel: "Low", consequence: "Incorrect dosing, skin absorption by staff.", proof: "Visual check.", location: "Treatment Area" }
            ]
        },
        {
            title: "Adoption Counseling & Process",
            department: "Adoptions",
            frequency: "Per adoption",
            role: "Adoption Counselor",
            summary: "Ensures responsible and sustainable adoptions by matching the right animal with the right family.",
            icon: "home",
            tasks: [
                { id: "AP-AC-01", description: "Conduct an adoption interview to understand the potential adopter's lifestyle, home environment, and expectations.", priority: "High", riskLevel: "Medium", consequence: "Mismatched adoption leading to high return rates.", proof: "Completed adoption application/interview form.", location: "Adoption Center" },
                { id: "AP-AC-02", description: "Provide full disclosure of the animal's history, medical needs, and known behavioral traits.", priority: "High", riskLevel: "Medium", consequence: "Adopter feels misled; animal may be returned due to unexpected issues.", proof: "Counselor's notes in adoption file.", location: "Adoption Center" },
                { id: "AP-AC-03", description: "Facilitate a supervised meet-and-greet between the animal and all family members (including other pets).", priority: "High", riskLevel: "Medium", consequence: "Conflicts between pets or family members after adoption.", proof: "Check-off on adoption process form.", location: "Meet-and-Greet Area" },
                { id: "AP-AC-04", description: "Verify adopter's identity and address (e.g., via ID and utility bill).", priority: "Medium", riskLevel: "Low", consequence: "Inability to follow up post-adoption; potential for fraudulent adoption.", proof: "Copies of ID/address proof in adoption file.", location: "Adoption Center" },
                { id: "AP-AC-05", description: "Complete all adoption paperwork, including transfer of ownership and microchip registration.", priority: "High", riskLevel: "Low", consequence: "Legal ambiguity over ownership.", proof: "Signed adoption contract and microchip form.", location: "Adoption Center" },
                { id: "AP-AC-06", description: "Provide post-adoption support information (e.g., vet recommendations, trainer contacts).", priority: "Medium", riskLevel: "Low", consequence: "Adopter feels abandoned, small issues become big problems.", proof: "Copy of adoption packet.", location: "Adoption Center" },
                { id: "AP-AC-07", description: "Explain the shelter's return policy.", priority: "High", riskLevel: "Low", consequence: "Misunderstanding about what to do if the adoption doesn't work out.", proof: "Signed adoption contract.", location: "Adoption Center" },
                { id: "AP-AC-08", description: "Ensure adoption fees are collected and processed correctly.", priority: "High", riskLevel: "Low", consequence: "Financial loss.", proof: "Payment receipt.", location: "Adoption Center" },
                { id: "AP-AC-09", description: "Schedule a post-adoption follow-up call or email (e.g., at 3 days, 3 weeks).", priority: "Medium", riskLevel: "Low", consequence: "Missed opportunities to solve early problems.", proof: "Entry in shelter management software.", location: "Adoption Center" },
                { id: "AP-AC-10", description: "Update the animal's record to 'Adopted' and move them out of the 'Available' list.", priority: "High", riskLevel: "Low", consequence: "Animal still shows as available, causing confusion.", proof: "Shelter management software log.", location: "Adoption Center" }
            ]
        },
        {
            title: "Volunteer Management",
            department: "Administration",
            frequency: "Ongoing",
            role: "Volunteer Coordinator",
            summary: "Effectively onboard, train, and manage volunteers to support shelter operations.",
            icon: "users",
            tasks: [
                { id: "AV-VM-01", description: "Conduct orientation for all new volunteers covering shelter policies, safety procedures, and animal handling basics.", priority: "High", riskLevel: "Medium", consequence: "Volunteers may unknowingly violate safety rules or handle animals incorrectly.", proof: "Signed orientation completion form.", location: "Training Room" },
                { id: "AV-VM-02", description: "Maintain an up-to-date volunteer schedule to ensure all shifts are covered.", priority: "Medium", riskLevel: "Low", consequence: "Staffing shortages leading to compromised animal care.", proof: "Published weekly schedule.", location: "Office" },
                { id: "AV-VM-03", description: "Provide clear task lists for different volunteer roles (e.g., dog walking, cat socialization, cleaning).", priority: "Medium", riskLevel: "Low", consequence: "Inefficient use of volunteer time, confusion about duties.", proof: "Posted task lists in relevant areas.", location: "All Areas" },
                { id: "AV-VM-04", description: "Ensure all volunteers sign in and out for every shift.", priority: "Low", riskLevel: "Low", consequence: "Inaccurate tracking of volunteer hours, security risk.", proof: "Daily sign-in/out sheet.", location: "Reception" },
                { id: "AV-VM-05", description: "Provide specific training for handling fearful or reactive animals.", priority: "High", riskLevel: "High", consequence: "Bite risk to volunteers, increased stress for animals.", proof: "Advanced handling training log.", location: "Training Area" },
                { id: "AV-VM-06", description: "Regularly communicate shelter news, needs, and successes to volunteers.", priority: "Low", riskLevel: "Low", consequence: "Volunteers feel unappreciated and disconnected.", proof: "Copy of volunteer newsletter or email.", location: "Office" },
                { id: "AV-VM-07", description: "Ensure all volunteers working with animals have signed a liability waiver.", priority: "High", riskLevel: "Medium", consequence: "Legal risk to the shelter in case of injury.", proof: "File of signed waivers.", location: "Office" },
                { id: "AV-VM-08", description: "Recognize outstanding volunteers (e.g., 'Volunteer of the Month').", priority: "Low", riskLevel: "Low", consequence: "Poor volunteer retention.", proof: "Photo or announcement.", location: "Common Area/Social Media" },
                { id: "AV-VM-09", description: "Supervise volunteers and provide constructive feedback.", priority: "Medium", riskLevel: "Low", consequence: "Tasks performed incorrectly.", proof: "Supervisor observation notes.", location: "All Areas" },
                { id: "AV-VM-10", description: "Gather feedback from volunteers on their experience and suggestions.", priority: "Low", riskLevel: "Low", consequence: "Missed opportunities for process improvement.", proof: "Volunteer suggestion box or survey results.", location: "Office" }
            ]
        }
    ]
};

const allPacks: PremiumPack[] = [
    franchise_operations_pack,
    hotels_and_resorts,
    restaurants,
    fashion_and_apparel_retail,
    jewelry_and_luxury_retail,
    electronics_showroom_pack,
    supermarket_grocery_retail_pack,
    facility_management_blueprint,
    corporate_legal_compliance_starter_kit,
    enterprise_risk_cybersecurity_pack,
    healthcare_and_hospital_operations,
    school_operations_pack,
    university_college_ops,
    film_production_pack,
    ott_platform_pack,
    sports_clubs_stadium_operations_pack,
    cinema_operations_pack,
    theme_park_ops_pack,
    logistics_warehouse_pack,
    manufacturing_operations_ehs_pack,
    food_manufacturing_ops,
    bakery_confectionery_pack,
    animal_shelter_pack,
];

const master_access_pack: PremiumPack = {
    id: 'master_access',
    title: "Master Access: All-in-One Operations Toolkit",
    priceINR: 29999,
    priceUSD: 399,
    competitorPriceUSD: 2999,
    paymentId: 'pl_RaWPoGkH6vA8wS',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f528d9c2-5e6a-4d7a-b73a-4537b01d1c95',
    category: "Master Access",
    description: "Get lifetime access to every current and future checklist pack in the MoreMeets library. The ultimate toolkit for enterprise-level compliance and operational excellence.",
    icon: "library",
    badgeText: "Best Value",
    badgeVariant: "accent",
    whoIsItFor: ["COOs", "VPs of Operations", "Enterprise Leaders", "Consultants", "Serial Entrepreneurs"],
    sampleItems: [
        { text: "Gain access to all 20+ industry packs, covering hospitality, retail, manufacturing, healthcare, and more.", icon: "zap" },
        { text: "Receive every future checklist pack we release, automatically and for free.", icon: "trending-up" },
        { text: "Standardize operations across a diverse portfolio of businesses with a single, unified system.", icon: "briefcase-business" },
        { text: "A one-time purchase for a lifetime of operational knowledge and compliance.", icon: "shield-check" }
    ],
    checklists: allPacks.flatMap(pack => {
        if (pack.id === 'master_access' || pack.id === 'animal_shelter_pack') return [];
        return pack.checklists.map(checklist => ({
            ...checklist,
            tasks: checklist.tasks.map(task => ({
                ...task,
                department: checklist.department,
                role: checklist.role,
                frequency: checklist.frequency
            }))
        }))
    }),
};

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


    

