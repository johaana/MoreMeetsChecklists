
import type { PremiumPack } from "@/lib/premium-packs";

export const franchise_operations_pack: PremiumPack = {
    id: 'franchise_operations_pack',
    title: "Franchise Operating System",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/f4e6b12a-4422-48a0-a198-154332822a27',
    category: "Franchise",
    description: "The definitive Sovereign v11.2 technical engine for multi-unit groups. Standardizing 150+ technical control points from Royalty protection to brand standards.",
    heroHeadline: "Scale Your Brand Without Losing Control",
    heroSubheadline: "Track every outlet, monitor brand standards, and protect your royalty stream—across 150+ technical control points.",
    pricingUrgency: "A single failed outlet or one brand-damaging incident costs 100x more than this system.",
    consultingAnchor: 15000,
    icon: "store",
    badgeText: "V11.2 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Franchise Owners", "Heads of Operations", "Development Managers", "Regional Managers"],
    sampleItems: [
        { text: "<strong>Royalty Protection</strong>: Daily sales reconciliation against aggregator and bank records.", icon: "banknote" },
        { text: "<strong>Brand Visual QC</strong>: Signage, uniform, and ambiance audits across the group.", icon: "eye" },
        { text: "<strong>Local Marketing Command</strong>: Activation logs for seasonal promos and ORM.", icon: "megaphone" },
        { text: "<strong>Staff Cert Audit</strong>: Tracking franchisee training levels and grooming parity.", icon: "graduation-cap" },
        { text: "<strong>Supply Chain Integrity</strong>: Auditing vendor receiving to stop unvetted sourcing.", icon: "truck" }
    ],
    checklists: [
        {
            title: "Brand Governance",
            department: "Executive",
            frequency: "Weekly",
            role: "Franchisor COO / Head of Ops",
            summary: "Group-wide performance and brand protection.",
            icon: "crown",
            tasks: [
                { id: "FR-EXE-01", description: "Check if the franchise fees (royalties) have been paid by all units.", priority: "High", riskLevel: "Medium", consequence: "Unrealized income and financial leakage.", proof: "Ledger Review", trainerNotes: "Cross-check with bank captures." },
                { id: "FR-EXE-02", description: "Review 'Empire Mood' and Group completion scores.", priority: "High", riskLevel: "Low", consequence: "Operational drift and loss of control.", proof: "Console Review", trainerNotes: "Identify bottom 2 branches." },
                { id: "FR-EXE-03", description: "Check what the secret shoppers found this week.", priority: "Medium", riskLevel: "Low", consequence: "Brand dilution and poor customer scores.", proof: "Audit Report", trainerNotes: "Focus on 1-star failures." },
                { id: "FR-EXE-04", description: "Check if the insurance for guest accidents is active for all units.", priority: "High", riskLevel: "High", consequence: "Financial ruin during a major safety incident.", proof: "Policy File", trainerNotes: "Check expiry 60 days early." },
                { id: "FR-EXE-05", description: "Check if electricity and water bills are spiking above the group average.", priority: "Low", riskLevel: "Low", consequence: "Unchecked overhead costs.", proof: "Finance Chart", trainerNotes: "Compare vs previous month." },
                { id: "FR-EXE-06", description: "Check status of unresolved safety accidents in the log.", priority: "High", riskLevel: "High", consequence: "Escalated legal liability and lawsuits.", proof: "Incident Log", trainerNotes: "Resolve all P1s < 24h." },
                { id: "FR-EXE-07", description: "Check if all government licenses (Fire, Trade) are up to date.", priority: "High", riskLevel: "High", consequence: "Premises being sealed by authorities.", proof: "License File", trainerNotes: "Check FSSAI dates specifically." },
                { id: "FR-EXE-08", description: "Check if senior managers were on the floor during peak Saturday hours.", priority: "Medium", riskLevel: "Low", consequence: "Leadership disconnect from the front lines.", proof: "Roster Log", trainerNotes: "GMs must be visible during dinner." },
                { id: "FR-EXE-09", description: "Check 'Revenue per Square Foot' to see which stores are lagging.", priority: "Low", riskLevel: "Low", consequence: "Underperforming real estate assets.", proof: "Sales Report", trainerNotes: "Analyze bottom 10% units." },
                { id: "FR-EXE-10", description: "Check photos of any new store construction work.", priority: "Medium", riskLevel: "Medium", consequence: "Budget overruns and unmonitored delays.", proof: "Project Log", trainerNotes: "Check 50% completion step." },
                { id: "FR-EXE-11", description: "Audit payroll to ensure franchisees are paying staff correctly.", priority: "High", riskLevel: "Medium", consequence: "Employee legal disputes and PR risk.", proof: "Payroll Register", trainerNotes: "Check OT calculations." },
                { id: "FR-EXE-12", description: "Review brand ranking on Google Maps and Yelp.", priority: "High", riskLevel: "Low", consequence: "Loss of bookings if scores drop.", proof: "ORM Dashboard", trainerNotes: "Analyze complaint keywords." },
                { id: "FR-EXE-13", description: "Verify 'Fixed Asset' tags are on all expensive kitchen machines.", priority: "Low", riskLevel: "Low", consequence: "Lost or stolen property.", proof: "Asset Log", trainerNotes: "Tag every item > $500." },
                { id: "FR-EXE-14", description: "Check how many hours of training each staff member completed.", priority: "Medium", riskLevel: "Low", consequence: "Skill stagnation and service decay.", proof: "Matrix File", trainerNotes: "Target 4h/person per month." },
                { id: "FR-EXE-15", description: "Compare vendor prices for core items across the market.", priority: "Medium", riskLevel: "Low", consequence: "Inflated procurement costs.", proof: "Vendor Log", trainerNotes: "Check Top 10 items prices." },
                { id: "FR-EXE-16", description: "Check if provident fund (PF) and taxes for staff are paid.", priority: "High", riskLevel: "High", consequence: "Government fines and criminal risk.", proof: "Compliance File", trainerNotes: "Check PF/ESI deposits." },
                { id: "FR-EXE-17", description: "Review results of the latest local marketing campaigns.", priority: "Low", riskLevel: "Low", consequence: "Wasted marketing budget.", proof: "LSM Tracker", trainerNotes: "Check ROI per campaign." },
                { id: "FR-EXE-18", description: "Check for high inventory variance (theft) across the group.", priority: "High", riskLevel: "High", consequence: "Massive profit leakage.", proof: "Variance Report", trainerNotes: "Flag > 2% variance." },
                { id: "FR-EXE-19", description: "Final Weekly Strategic sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of oversight.", proof: "Signed Summary", trainerNotes: "Submit to Board Mondays." }
            ]
        },
        {
            title: "Site Audit Command",
            department: "Operations",
            frequency: "Daily",
            role: "Area Operational Coach",
            summary: "Ensures brand consistency and arrival readiness.",
            icon: "eye",
            tasks: [
                { id: "FR-OPS-01", description: "Check if the main outdoor sign is lit and clean.", priority: "Medium", riskLevel: "Low", consequence: "Poor brand image and low visibility.", proof: "Photo", trainerNotes: "Check at sunset daily." },
                { id: "FR-OPS-02", description: "Check lobby ambiance: Scent, Music, and Temp (23°C).", priority: "Medium", riskLevel: "Low", consequence: "Guests leave earlier and spend less.", proof: "Daily Log", trainerNotes: "Target exactly 23°C." },
                { id: "FR-OPS-03", description: "Brief staff on today's targets and promotional items.", priority: "High", riskLevel: "Low", consequence: "Uninformed staff and lost upsell revenue.", proof: "Briefing Log", trainerNotes: "Mention upsell item of day." },
                { id: "FR-OPS-04", description: "Walk through the store as if you were a customer.", priority: "Medium", riskLevel: "Low", consequence: "Slipping standards and grime buildup.", proof: "Checksheet", trainerNotes: "Run random mystery audits." },
                { id: "FR-OPS-05", description: "Check the toilets every hour for cleanliness and tissue.", priority: "High", riskLevel: "Low", consequence: "Major driver of 1-star reviews.", proof: "Hourly Sheet", trainerNotes: "Check soap and sanitizer." },
                { id: "FR-OPS-06", description: "Check staff grooming: clean nails and ID badges.", priority: "Low", riskLevel: "Low", consequence: "Unprofessional image.", proof: "Visual Audit", trainerNotes: "Check name-tags are straight." },
                { id: "FR-OPS-07", description: "Check status of unresolved guest complaints.", priority: "High", riskLevel: "High", consequence: "Viral PR damage and loss of trust.", proof: "Feedback Log", trainerNotes: "Resolve all < 4 hours." },
                { id: "FR-OPS-08", description: "Check if there are enough clean spare uniforms in stock.", priority: "Low", riskLevel: "Low", consequence: "Staff wearing dirty clothes.", proof: "Inventory Check", trainerNotes: "Min 2 sets per person." },
                { id: "FR-OPS-09", description: "Check queue times during the peak rush hour.", priority: "Medium", riskLevel: "Low", consequence: "Guests leaving due to long waits.", proof: "System Log", trainerNotes: "Peak: 7 PM - 9 PM." },
                { id: "FR-OPS-10", description: "Verify that digital menus show the items we actually have.", priority: "High", riskLevel: "Low", consequence: "Guest frustration at ordering.", proof: "App Check", trainerNotes: "Sync with kitchen stock." },
                { id: "FR-OPS-11", description: "Test the guest Wi-Fi: login must work in < 10s.", priority: "Low", riskLevel: "Low", consequence: "Immediate guest complaints.", proof: "Phone Test", trainerNotes: "Verify speed is > 10mbps." },
                { id: "FR-OPS-12", description: "Check if trash bins are emptied before they overflow.", priority: "Low", riskLevel: "Medium", consequence: "Odors and pest attraction.", proof: "Cleaning Log", trainerNotes: "Empty at 75% full." },
                { id: "FR-OPS-13", description: "Inspect the entrance porch for any oil or debris.", priority: "Low", riskLevel: "Low", consequence: "Bad first impression.", proof: "Visual Check", trainerNotes: "Buff nightly at 2 AM." },
                { id: "FR-OPS-14", description: "Check if all parking area lights are working.", priority: "Medium", riskLevel: "Medium", consequence: "Security risk and unsafe exits.", proof: "Photo", trainerNotes: "Replace fused bulbs < 24h." },
                { id: "FR-OPS-15", description: "Check staff break-room: no food in lockers.", priority: "Low", riskLevel: "Low", consequence: "Cockroaches and low morale.", proof: "Cleaning Note", trainerNotes: "Inspect every Sunday." },
                { id: "FR-OPS-16", description: "Check which staff member is leading the upsell contest.", priority: "Low", riskLevel: "Low", consequence: "Unmotivated sales team.", proof: "Leaderboard", trainerNotes: "Reward at morning briefing." },
                { id: "FR-OPS-17", description: "Check availability of promotional flyers at the desk.", priority: "Low", riskLevel: "Low", consequence: "Marketing campaign failure.", proof: "Stock Audit", trainerNotes: "Min 100 sets buffer." },
                { id: "FR-OPS-18", description: "Check if the TV in the lobby is showing relevant content.", priority: "Low", riskLevel: "Low", consequence: "Inappropriate brand energy.", proof: "Visual Check", trainerNotes: "News or Brand promo only." },
                { id: "FR-OPS-19", description: "Final Daily Operations sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of duty control.", proof: "Signed Book", trainerNotes: "Submit EOD report to GM." }
            ]
        },
        {
            title: "Royalty & Financials",
            department: "Finance",
            frequency: "Daily",
            role: "Finance & Accounts Executive",
            summary: "Protects the franchise revenue pipeline.",
            icon: "banknote",
            tasks: [
                { id: "FR-FIN-01", description: "Match app sales (Zomato/Swiggy) against the POS report.", priority: "High", riskLevel: "High", consequence: "Paying commissions on cancelled orders.", proof: "Match Note", trainerNotes: "Investigate > 1% variance." },
                { id: "FR-FIN-02", description: "Surprise Count: Check Top 10 expensive items in stock.", priority: "High", riskLevel: "High", consequence: "High-value inventory theft.", proof: "Stock Sheet", trainerNotes: "Count without system totals." },
                { id: "FR-FIN-03", description: "Check why any bills were deleted or changed (Voids).", priority: "High", riskLevel: "Medium", consequence: "Staff stealing by deleting cash bills.", proof: "POS Audit", trainerNotes: "Voids need manager sign-off." },
                { id: "FR-FIN-04", description: "Match the cash in hand to the bank deposit slip.", priority: "High", riskLevel: "High", consequence: "Internal theft of revenue.", proof: "Bank Slip", trainerNotes: "Witnessed seal is mandatory." },
                { id: "FR-FIN-05", description: "Check if the cashier has enough loose change (Float).", priority: "High", riskLevel: "High", consequence: "Billing delays and angry customers.", proof: "Float Sheet", trainerNotes: "Record denominations." },
                { id: "FR-FIN-06", description: "Check for any 'Fake' discount codes used during shift.", priority: "Medium", riskLevel: "Medium", consequence: "Profit loss via bill manipulation.", proof: "Discount Audit", trainerNotes: "Verify 5 random codes." },
                { id: "FR-FIN-07", description: "Verify all purchase invoices are entered in < 24h.", priority: "Medium", riskLevel: "Low", consequence: "Inaccurate real-time stock levels.", proof: "Entry Log", trainerNotes: "Match physical receiving notes." },
                { id: "FR-FIN-08", description: "Check credit card machines for stickers or loose parts.", priority: "High", riskLevel: "High", consequence: "Skimming fraud and legal disaster.", proof: "Visual Audit", trainerNotes: "Check for tamper seals." },
                { id: "FR-FIN-09", description: "Check stock of bill rolls and thermal paper.", priority: "Low", riskLevel: "Low", consequence: "Billing halt during busy hours.", proof: "Supply Check", trainerNotes: "Min 1 week buffer stock." },
                { id: "FR-FIN-10", description: "Verify vendor TDS and tax deductions on bills.", priority: "Medium", riskLevel: "Medium", consequence: "Government penalties for tax errors.", proof: "TDS Register", trainerNotes: "Check PAN status monthly." },
                { id: "FR-FIN-11", description: "Final Daily Finance sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of fiscal control.", proof: "Signed Summary", trainerNotes: "Attach exception reports." }
            ]
        },
        {
            title: "Safety & Compliance",
            department: "Safety",
            frequency: "Daily",
            role: "EHS & Safety Officer",
            summary: "Regulatory and occupational safety command.",
            icon: "shield-check",
            tasks: [
                { id: "FR-EHS-01", description: "Check fire extinguisher pressure: must be in GREEN zone.", priority: "High", riskLevel: "High", consequence: "Total liability during a fire event.", proof: "Gauge Log", trainerNotes: "Check safety seals daily." },
                { id: "FR-EHS-02", description: "Check that all fire exit doors are unlocked and clear.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment during emergency.", proof: "Patrol Log", trainerNotes: "No boxes in corridors." },
                { id: "FR-EHS-03", description: "CCTV Check: Verify recording is active for last 30 days.", priority: "High", riskLevel: "High", consequence: "Loss of evidence for theft or bullying.", proof: "System Screen", trainerNotes: "Check timestamp accuracy." },
                { id: "FR-EHS-04", description: "Check if pest control traps are in place and working.", priority: "Medium", riskLevel: "Low", consequence: "Infestation leading to health closure.", proof: "Pest Log", trainerNotes: "Target zero sightings." },
                { id: "FR-EHS-05", description: "Test the fire alarm panel: check for battery fault.", priority: "High", riskLevel: "High", consequence: "No warning during a real fire.", proof: "Test Log", trainerNotes: "Rotate zones weekly." },
                { id: "FR-EHS-06", description: "Check if the first-aid kit has burn-gel and bandages.", priority: "Medium", riskLevel: "Medium", consequence: "Inability to treat staff injuries.", proof: "Stock Audit", trainerNotes: "Check expiry dates." },
                { id: "FR-EHS-07", description: "Check for 'Wet Floor' signs near every wet zone.", priority: "Medium", riskLevel: "Medium", consequence: "Slip and fall lawsuits.", proof: "Visual Check", trainerNotes: "Mandatory for all mopping." },
                { id: "FR-EHS-08", description: "Check kitchen gas manifold for leaks: use soap water.", priority: "High", riskLevel: "High", consequence: "Catastrophic explosion risk.", proof: "Maint Note", trainerNotes: "Check main joints daily." },
                { id: "FR-EHS-09", description: "Check if security guards are awake and alert.", priority: "High", riskLevel: "High", consequence: "Vulnerable campus perimeter.", proof: "Test Note", trainerNotes: "Conduct during shift change." },
                { id: "FR-EHS-10", description: "Final nightly safety sign-off.", priority: "High", riskLevel: "Low", consequence: "Systemic risk gap.", proof: "Manager Initials", trainerNotes: "Physical perimeter touch." }
            ]
        },
        {
            title: "Staff Certification",
            department: "HR",
            frequency: "Monthly",
            role: "Regional Training Lead",
            summary: "Tracks franchisee staff competency and health.",
            icon: "graduation-cap",
            tasks: [
                { id: "FR-HR-01", description: "Check if every staff member has a valid health card.", priority: "High", riskLevel: "Medium", consequence: "Regulatory fines and health risk.", proof: "Cert File", trainerNotes: "Renew every 6 months." },
                { id: "FR-HR-02", description: "Update the training list for all new hires.", priority: "High", riskLevel: "Medium", consequence: "Untrained staff causing accidents.", proof: "Matrix File", trainerNotes: "Verify 'Brand Standard' scores." },
                { id: "FR-HR-03", description: "Check staff grooming: verify name tags and uniforms.", priority: "Low", riskLevel: "Low", consequence: "Brand dilution and poor image.", proof: "Attendance Log", trainerNotes: "Check nails and clean shirts." },
                { id: "FR-HR-04", description: "Check if everyone knows the 'Service Recovery' steps.", priority: "High", riskLevel: "Low", consequence: "Losing unhappy customers forever.", proof: "Training Log", trainerNotes: "Role-play L.E.A.R.N. protocol." },
                { id: "FR-HR-05", description: "Final monthly HR matrix sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of admin control.", proof: "Signed Matrix", trainerNotes: "Submit to Principal." }
            ]
        },
        {
            title: "IT & POS Integrity",
            department: "Technical",
            frequency: "Weekly",
            role: "Technical Maintenance Tech",
            summary: "Protects the digital backbone.",
            icon: "laptop",
            tasks: [
                { id: "FR-IT-01", description: "Test if billing works when the main internet is cut.", priority: "High", riskLevel: "High", consequence: "No sales during peak hours.", proof: "Test Note", trainerNotes: "Test with main router off." },
                { id: "FR-IT-02", description: "Check guest Wi-Fi speed in the dining area.", priority: "Medium", riskLevel: "Low", consequence: "Negative customer reviews.", proof: "Speedtest App", trainerNotes: "Target > 20Mbps." },
                { id: "FR-IT-03", description: "Clean AC filters and check the room temp.", priority: "Medium", riskLevel: "Low", consequence: "Guest discomfort and high bills.", proof: "Maint Log", trainerNotes: "Target exactly 23°C." },
                { id: "FR-IT-04", description: "Test the backup generator: run for 10 minutes.", priority: "High", riskLevel: "High", consequence: "Total blackout during a rush.", proof: "Start-test Log", trainerNotes: "Check fuel level monthly." },
                { id: "FR-IT-05", description: "Final Technical sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of maintenance control.", proof: "Signed Log", trainerNotes: "Report broken parts to Owner." }
            ]
        },
        {
            title: "Marketing Activation",
            department: "Admin",
            frequency: "Daily",
            role: "Local Marketing Coordinator",
            summary: "Governs local branch promotions.",
            icon: "megaphone",
            tasks: [
                { id: "FR-MKT-01", description: "Check if today's promotional posters are up and clean.", priority: "Medium", riskLevel: "Low", consequence: "Missed sales from old promos.", proof: "Campaign Log", trainerNotes: "Replace torn posters instantly." },
                { id: "FR-MKT-02", description: "Reply to Google Maps reviews in under 24 hours.", priority: "High", riskLevel: "Medium", consequence: "Ranking drop and brand damage.", proof: "Digital Dashboard", trainerNotes: "Personalize every reply." },
                { id: "FR-MKT-03", description: "Answer all social media messages in under 30 mins.", priority: "Medium", riskLevel: "Low", consequence: "Lost booking leads.", proof: "Inbox Status", trainerNotes: "Confirm via WhatsApp." },
                { id: "FR-MKT-04", description: "Verify prices on Zomato/Swiggy match our menu.", priority: "High", riskLevel: "Medium", consequence: "Customer disputes and legal fines.", proof: "Price Match", trainerNotes: "Check markup percentages." },
                { id: "FR-MKT-05", description: "Final Daily Marketing sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of reputation control.", proof: "Signed Dashboard", trainerNotes: "Report review keywords to GM." }
            ]
        },
        {
            title: "Supply & Receiving",
            department: "Logistics",
            frequency: "Daily",
            role: "Procurement & Supply Specialist",
            summary: "Ensures sourcing integrity at the entry point.",
            icon: "truck",
            tasks: [
                { id: "FR-SUP-01", description: "Check if the supplier is on the 'Approved' list.", priority: "High", riskLevel: "High", consequence: "Unsafe food and legal risk.", proof: "Receiving Note", trainerNotes: "Reject unvetted suppliers." },
                { id: "FR-SUP-02", description: "Check the temp of incoming meat and milk (< 5°C).", priority: "High", riskLevel: "High", consequence: "Accepting spoiled food (Fatal).", proof: "Receiving Log", trainerNotes: "Reject if temp > 7°C." },
                { id: "FR-SUP-03", description: "Check the weighing scales with a 1kg weight.", priority: "High", riskLevel: "Medium", consequence: "Suppliers overcharging for less weight.", proof: "Calibration Log", trainerNotes: "Check at 8 AM daily." },
                { id: "FR-SUP-04", description: "Final shift Logistics sign-off.", priority: "High", riskLevel: "Low", consequence: "Incomplete handover.", proof: "Signed Summary", trainerNotes: "Brief GM on any stockouts." }
            ]
        }
    ]
};
