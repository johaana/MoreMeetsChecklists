
import type { PremiumPack } from "@/lib/premium-packs";

export const electronics_showroom_pack: PremiumPack = {
    id: 'electronics_showroom_pack',
    title: "Electronics Operations System v18.0 (Sovereign Pro)",
    priceINR: 3499,
    priceUSD: 49,
    competitorPriceUSD: 899,
    updatedAt: "2025-03-01",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/d863f69b-8919-4115-b778-831d17d120fb',
    category: "Retail",
    description: "The definitive Sovereign v18.0 engine for electronics and appliance retail. Hardening 180 technical control points across Serial Governance, Demo Asset Safety, and Warranty Fraud Prevention.",
    heroHeadline: "Command Your Device Integrity. Protect Your Inventory.",
    heroSubheadline: "Track unique serial IDs, monitor demo battery safety, and stop warranty fraud—across 18 specialized electronics roles.",
    pricingUrgency: "A single lithium-ion fire in a demo unit or one high-value serial mismatch costs 100x more than this entire system.",
    consultingAnchor: 8000,
    icon: "tv",
    badgeText: "V18.0 SOVEREIGN",
    badgeVariant: "accent",
    whoIsItFor: ["Store Managers", "Inventory Leads", "Warranty Officers", "Product Specialists", "Electronics Chain Owners"],
    sampleItems: [
        { text: "<strong>Serial & IMEI Integrity</strong>: Zero-fail protocols for unique ID matching and activation verification.", icon: "barcode" },
        { text: "<strong>Demo Safety Hub</strong>: Hourly thermal checks for display units and overnight lithium-ion fire protection.", icon: "zap" },
        { text: "<strong>Warranty Fraud Shield</strong>: DOA (Dead on Arrival) validation and accessory-parity audits for returns.", icon: "shield-alert" },
        { text: "<strong>Service & Data Governance</strong>: Client data-wipe certifications and repair-intake custody chains.", icon: "lock" },
        { text: "<strong>E-Waste Command</strong>: Legally compliant segregation of batteries and certified recycler registries.", icon: "recycle" },
        { text: "<strong>Activation Logic</strong>: Real-time mapping of box-openings to carrier activation logs.", icon: "smartphone" }
    ],
    checklists: [
        {
            title: "Store Executive Command",
            department: "Management",
            frequency: "Daily",
            role: "Store Manager",
            summary: "High-level strategic oversight of serialized inventory and statutory safety.",
            icon: "crown",
            tasks: [
                { id: "E-MGR-01", technicalProtocol: "High-Value Safe Witness", floorAction: "Physically witness seal of vault containing iPhones/High-end laptops.", priority: "High", riskLevel: "High", consequence: "Untraceable internal theft of flagship units.", proof: "Seal Registry", verificationRequired: true, cadence: "daily" },
                { id: "E-MGR-02", technicalProtocol: "Statutory License Pulse", floorAction: "Verify validity of Trade, Fire, and Electrical Stability certs.", priority: "High", riskLevel: "High", consequence: "Showroom sealing during fire inspection.", proof: "License File", verificationRequired: true, cadence: "daily" },
                { id: "E-MGR-03", technicalProtocol: "DOA Authorization", floorAction: "Review and co-sign 100% of 'Dead on Arrival' return claims.", priority: "High", riskLevel: "High", consequence: "Fraudulent returns of non-defective units.", proof: "Signed Invoice", verificationRequired: true, cadence: "daily" },
                { id: "E-MGR-04", technicalProtocol: "Cash Drop Witness", floorAction: "Verify seal of bank transit bag and log unique seal ID.", priority: "High", riskLevel: "High", consequence: "Internal till fraud masking revenue.", proof: "Seal Number", verificationRequired: true, cadence: "daily" },
                { id: "E-MGR-05", technicalProtocol: "Serialized Shrinkage Triage", floorAction: "Review 'Mismatch' report from yesterday's IMEI cycle count.", priority: "High", riskLevel: "High", consequence: "Unresolved theft of unique devices.", proof: "Audit Report", verificationRequired: true, cadence: "daily" },
                { id: "E-MGR-06", technicalProtocol: "Customer Data Breach Review", floorAction: "Confirm 100% of display resets were performed pre-opening.", priority: "High", riskLevel: "High", consequence: "Leak of customer PII from demo units.", proof: "Reset Log", verificationRequired: true, cadence: "daily" },
                { id: "E-MGR-07", technicalProtocol: "Staff Sobriety Pulse", floorAction: "Confirm zero alcohol odor for incoming tech-service leads.", priority: "High", riskLevel: "High", consequence: "Safety breach in repair workshop.", proof: "Briefing Log", verificationRequired: true, cadence: "daily" },
                { id: "E-MGR-08", technicalProtocol: "Fire Exit Path Clearance", floorAction: "Physically clear the egress of discarded packing crates.", priority: "High", riskLevel: "High", consequence: "Fatal entrapment during crisis.", proof: "Walkthrough", verificationRequired: true, cadence: "daily" },
                { id: "E-MGR-09", technicalProtocol: "Activation Parity Audit", floorAction: "Match POS billing count vs Brand activation dashboard.", priority: "Medium", riskLevel: "Low", consequence: "Selling un-activated grey market stock.", proof: "System Sync", cadence: "weekly" },
                { id: "E-MGR-10", technicalProtocol: "Daily MOD Summary", floorAction: "Final operational and safety status sign-off.", priority: "High", riskLevel: "Low", consequence: "Governance gap.", proof: "Signed Summary", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Mobile Product Specialist",
            department: "Sales",
            frequency: "Daily",
            role: "Mobile Product Specialist",
            summary: "Governance for activation integrity and accessory parity.",
            icon: "smartphone",
            tasks: [
                { id: "E-MPS-01", technicalProtocol: "IMEI-1 Verification", floorAction: "Verify 15-digit match between box, device, and invoice.", priority: "High", riskLevel: "Medium", consequence: "Wrong device delivered; warranty void.", proof: "Scan Match", verificationRequired: true, cadence: "incident-based" },
                { id: "E-MPS-02", technicalProtocol: "Carrier Activation Bridge", floorAction: "Ensure 100% of sold SIMs are activated via the official portal.", priority: "High", riskLevel: "Medium", consequence: "Delayed customer service; commission loss.", proof: "System Screen", cadence: "daily" },
                { id: "E-MPS-03", technicalProtocol: "Box-Seal Integrity", floorAction: "Check 10 random 'New' boxes for intact brand-seal stickers.", priority: "Medium", riskLevel: "High", consequence: "Selling used/refurbished as new.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "E-MPS-04", technicalProtocol: "Accessory Pack Reconcile", floorAction: "Confirm Charger, Cable, and Ejector-pin are in the box pre-seal.", priority: "Low", riskLevel: "Low", consequence: "Customer disputes post-unboxing.", proof: "Visual Check", cadence: "incident-based" },
                { id: "E-MPS-05", technicalProtocol: "Insurance Package Sale", floorAction: "Offer accidental damage protection to 100% of smartphone buyers.", priority: "Low", riskLevel: "Low", consequence: "Missed high-margin secondary revenue.", proof: "POS Report", cadence: "daily" },
                { id: "E-MPS-06", technicalProtocol: "Pre-Paid Voucher Security", floorAction: "Verify lock of scratch-card inventory in counter drawer.", priority: "Medium", riskLevel: "Medium", consequence: "Internal voucher theft.", proof: "Drawer Check", cadence: "daily" },
                { id: "E-MPS-07", technicalProtocol: "Trade-in Evaluation", floorAction: "Use diagnostic tool to verify screen/battery health on buybacks.", priority: "High", riskLevel: "Medium", consequence: "Over-paying for damaged used inventory.", proof: "Diagnostic Log", verificationRequired: true, cadence: "incident-based" },
                { id: "E-MPS-08", technicalProtocol: "Mobile Ambiance", floorAction: "Verify all demo phones are on the brand-spec screensaver.", priority: "Low", riskLevel: "Low", consequence: "Brand dilution.", proof: "Visual Check", cadence: "daily" },
                { id: "E-MPS-09", technicalProtocol: "Demo Battery Level", floorAction: "Ensure 100% of display units are plugged into trickle-chargers.", priority: "Low", riskLevel: "Low", consequence: "Dead units reducing sales conversion.", proof: "Walkthrough", cadence: "daily" },
                { id: "E-MPS-10", technicalProtocol: "EOD Mobile Safe-Return", floorAction: "Verify transfer of 100% high-value phones to the back-vault.", priority: "High", riskLevel: "High", consequence: "Overnight showroom theft.", proof: "Transfer Note", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Computing & IT Specialist",
            department: "Sales",
            frequency: "Daily",
            role: "Computing Product Specialist",
            summary: "Software licensing, hardware vitals, and spec-parity.",
            icon: "laptop",
            tasks: [
                { id: "E-CPS-01", technicalProtocol: "Spec-Parity Audit", floorAction: "Match physical Laptop RAM/Storage to shelf-edge pricing labels.", priority: "High", riskLevel: "Medium", consequence: "Customer Metrology disputes and refund claims.", proof: "Label Match", cadence: "daily" },
                { id: "E-CPS-02", technicalProtocol: "OS Activation Pulse", floorAction: "Ensure 100% of sold PCs have genuine OS keys assigned.", priority: "High", riskLevel: "High", consequence: "Legal liability for piracy.", proof: "Licensing Log", verificationRequired: true, cadence: "daily" },
                { id: "E-CPS-03", technicalProtocol: "Demo Privacy Wipe", floorAction: "Deep-reset 100% of demo Laptops to clear guest browsing/photos.", priority: "High", riskLevel: "High", consequence: "Privacy breach / PII leak.", proof: "Reset Registry", verificationRequired: true, cadence: "daily" },
                { id: "E-CPS-04", technicalProtocol: "Anti-Virus Stock", floorAction: "Verify par-levels of 20+ keys for upsell bundles.", priority: "Low", riskLevel: "Low", consequence: "Missed high-margin sales.", proof: "Stock Sheet", cadence: "weekly" },
                { id: "E-CPS-05", technicalProtocol: "Hardware Thermal Scan", floorAction: "Check high-load Gaming PCs for fan noise or overheating.", priority: "Medium", riskLevel: "Medium", consequence: "Demo unit hardware failure.", proof: "Visual Check", cadence: "daily" },
                { id: "E-CPS-06", technicalProtocol: "Kensington Lock Check", floorAction: "Verify 100% of display laptops are physically tethered.", priority: "High", riskLevel: "High", consequence: "Run-and-grab theft.", proof: "Patrol Log", verificationRequired: true, cadence: "hourly" },
                { id: "E-CPS-07", technicalProtocol: "Accessory Bundle Build", floorAction: "Verify mouse/bag compatibility for 'Back-to-School' offer.", priority: "Low", riskLevel: "Low", consequence: "Poor customer bundle experience.", proof: "Bundle List", cadence: "weekly" },
                { id: "E-CPS-08", technicalProtocol: "Display Brightness Sync", floorAction: "Set 100% of laptop panels to 80% brightness for VM impact.", priority: "Low", riskLevel: "Low", consequence: "Dull showroom ambiance.", proof: "Visual Audit", cadence: "daily" },
                { id: "E-CPS-09", technicalProtocol: "Tablet Firmware Pulse", floorAction: "Verify iPad/Android demo units have latest security patches.", priority: "Medium", riskLevel: "Medium", consequence: "Showroom malware exploit window.", proof: "System Screen", cadence: "weekly" },
                { id: "E-CPS-10", technicalProtocol: "EOD Power Shutdown", floorAction: "Verify 100% of demo PCs are in Hibernate or Off state.", priority: "High", riskLevel: "Low", consequence: "Screen burn-in and energy waste.", proof: "Signed Sheet", cadence: "daily" }
            ]
        },
        {
            title: "Appliance & Home Specialist",
            department: "Sales",
            frequency: "Daily",
            role: "Appliance Specialist",
            summary: "Logistics sync, installation tracking, and large-item vitals.",
            icon: "refrigerator",
            tasks: [
                { id: "E-AHS-01", technicalProtocol: "Demo Hum Reconcile", floorAction: "Listen for compressor vibration in 5 demo refrigerators.", priority: "Medium", riskLevel: "Low", consequence: "Sub-par demo experience.", proof: "Visual Check", cadence: "daily" },
                { id: "E-AHS-02", technicalProtocol: "Installation TAT Bridge", floorAction: "Verify delivery-to-install time < 48 hours for HVAC.", priority: "High", riskLevel: "Low", consequence: "Guest frustration and order cancellation.", proof: "TAT Dashboard", cadence: "daily" },
                { id: "E-AHS-03", technicalProtocol: "Star-Label Audit", floorAction: "Confirm correct BEE Star rating labels on 100% of ACs.", priority: "High", riskLevel: "Medium", consequence: "Regulatory Metrology fines.", proof: "Label Match", cadence: "weekly" },
                { id: "E-AHS-04", technicalProtocol: "Accessory Missing Log", floorAction: "Check 5 display washing machines for manual/hose presence.", priority: "Low", riskLevel: "Low", consequence: "Delayed use post-delivery.", proof: "Stock Sheet", cadence: "weekly" },
                { id: "E-AHS-05", technicalProtocol: "Water Purity Demo", floorAction: "Test TDS level at the active Water Purifier demo station.", priority: "Medium", riskLevel: "High", consequence: "Bacterial spread via demo water.", proof: "TDS Meter", verificationRequired: true, cadence: "daily" },
                { id: "E-AHS-06", technicalProtocol: "TV Frame Parity", floorAction: "Verify 100% of 'Wall Units' display synchronized 4K content.", priority: "Low", riskLevel: "Low", consequence: "Inconsistent visual impact.", proof: "Visual Audit", cadence: "daily" },
                { id: "E-AHS-07", technicalProtocol: "Extended Warranty Upsell", floorAction: "Verify offer of 3-year AMC to all washing machine buyers.", priority: "Low", riskLevel: "Low", consequence: "Lower LTV capture.", proof: "POS Record", cadence: "daily" },
                { id: "E-AHS-08", technicalProtocol: "Large Item Load Safety", floorAction: "Clear stacking areas of any unstable or triple-stacked units.", priority: "High", riskLevel: "High", consequence: "Crush injury and inventory damage.", proof: "Walkthrough", verificationRequired: true, cadence: "daily" },
                { id: "E-AHS-09", technicalProtocol: "Demo Fragrance Logic", floorAction: "Check scent beads/cleanliness inside demo laundry units.", priority: "Low", riskLevel: "Low", consequence: "Fusty odor in appliances.", proof: "Visual Check", cadence: "daily" },
                { id: "E-AHS-10", technicalProtocol: "EOD Unplug Witness", floorAction: "Physically witness shutdown of non-essential appliance power.", priority: "High", riskLevel: "High", consequence: "Fire risk in high-voltage demo wall.", proof: "Closure Log", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Demo Asset Governance",
            department: "Operations",
            frequency: "Hourly",
            role: "Demo Asset Manager",
            summary: "Protects high-value display units and monitors fire risks.",
            icon: "monitor",
            tasks: [
                { id: "E-DAM-01", technicalProtocol: "Thermal Swelling Scan", floorAction: "Check 10 random demo batteries for bloating or heat.", priority: "High", riskLevel: "High", consequence: "[Fatal: Lithium-ion thermal runaway fire].", proof: "Patrol Log", verificationRequired: true, cadence: "hourly" },
                { id: "E-DAM-02", technicalProtocol: "Tether Connectivity", floorAction: "Test response of 5 random alarm-pucks on the mobile wall.", priority: "High", riskLevel: "High", consequence: "Run-and-grab theft window.", proof: "Signal Test", verificationRequired: true, cadence: "daily" },
                { id: "E-DAM-03", technicalProtocol: "Screen-Burn Prevention", floorAction: "Rotate loop-video on 100% of OLED TV displays.", priority: "Medium", riskLevel: "Low", consequence: "Permanent asset image-ghosting.", proof: "Visual Audit", cadence: "daily" },
                { id: "E-DAM-04", technicalProtocol: "Sanitization Wave", floorAction: "Wipe high-touch screens with microfiber + 70% IPA.", priority: "Low", riskLevel: "Medium", consequence: "Cross-customer viral spread.", proof: "Cleaning Sheet", cadence: "hourly" },
                { id: "E-DAM-05", technicalProtocol: "Cable Management", floorAction: "Conceal all loose charging wires to prevent trip hazards.", priority: "Medium", riskLevel: "Medium", consequence: "Customer fall injury claims.", proof: "Walkthrough", cadence: "daily" },
                { id: "E-DAM-06", technicalProtocol: "Demo Activation Check", floorAction: "Verify 'Demo Mode' is active; lock system settings.", priority: "Medium", riskLevel: "Low", consequence: "Unauthorized guest app downloads.", proof: "System Lock", cadence: "daily" },
                { id: "E-DAM-07", technicalProtocol: "Charging Port Audit", floorAction: "Clear lint from demo ports to prevent connection drag.", priority: "Low", riskLevel: "Low", consequence: "Intermittent power/demo failure.", proof: "Visual Check", cadence: "weekly" },
                { id: "E-DAM-08", technicalProtocol: "OLED Brightness Pulse", floorAction: "Audit 5 TV units; target brightness < 80% to save life.", priority: "Medium", riskLevel: "Low", consequence: "Accelerated asset decay.", proof: "Gauge Log", cadence: "daily" },
                { id: "E-DAM-09", technicalProtocol: "Demo Content Parity", floorAction: "Ensure 100% of speakers play the approved brand track.", priority: "Low", riskLevel: "Low", consequence: "Acoustic chaos.", proof: "Acoustic Audit", cadence: "daily" },
                { id: "E-DAM-10", technicalProtocol: "EOD High-Security Locking", floorAction: "Physically lock cabinet containing high-value flagship demo units.", priority: "High", riskLevel: "High", consequence: "Overnight showroom theft.", proof: "Visual Confirm", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Warranty & DOA Governance",
            department: "Compliance",
            frequency: "Daily",
            role: "Warranty Claims Officer",
            summary: "Decision governance for manufacturer-level defects.",
            icon: "award",
            tasks: [
                { id: "E-WCO-01", technicalProtocol: "DOA Validation", floorAction: "Confirm 100% 'Dead on Arrival' units have Brand-Center cert.", priority: "High", riskLevel: "High", consequence: "Unrecoverable loss on rejected claims.", proof: "Cert Registry", verificationRequired: true, cadence: "daily" },
                { id: "E-WCO-02", technicalProtocol: "Claim-TAT Monitor", floorAction: "Verify 100% of open warranty claims are updated < 24h.", priority: "Medium", riskLevel: "Low", consequence: "Negative ORM and guest rage.", proof: "TAT Dashboard", cadence: "daily" },
                { id: "E-WCO-03", technicalProtocol: "Serial-Invoice Match", floorAction: "Cross-check 10 random claims against original POS bill.", priority: "High", riskLevel: "Medium", consequence: "Fraudulent warranty abuse.", proof: "System Match", cadence: "weekly" },
                { id: "E-WCO-04", technicalProtocol: "Brand Liaison Pulse", floorAction: "Confirm receipt of 100% of 'Approved Credit' notes from brands.", priority: "High", riskLevel: "Medium", consequence: "Financial bad debt.", proof: "Financial Sync", verificationRequired: true, cadence: "daily" },
                { id: "E-WCO-05", technicalProtocol: "Extended Warranty Sync", floorAction: "Verify 100% of 3rd party plans are registered via portal.", priority: "Medium", riskLevel: "Low", consequence: "Denied claims for paying customers.", proof: "Registry Note", cadence: "daily" },
                { id: "E-WCO-06", technicalProtocol: "In-Warranty Repair Seal", floorAction: "Verify 100% of returns possess original security seal.", priority: "High", riskLevel: "High", consequence: "Accepting tampered units.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "E-WCO-07", technicalProtocol: "Defective-Store Lock", floorAction: "Witness lock of the dedicated DOA holding cage.", priority: "High", riskLevel: "High", consequence: "Internal theft of defective assets.", proof: "Visual Confirm", verificationRequired: true, cadence: "daily" },
                { id: "E-WCO-08", technicalProtocol: "Claim Rejection Analysis", floorAction: "Log reasons for all manufacturer claim denials.", priority: "Medium", riskLevel: "Low", consequence: "Systemic loss of margin.", proof: "Analysis Log", cadence: "weekly" },
                { id: "E-WCO-09", technicalProtocol: "Warranty Banner Check", floorAction: "Confirm visibility of 'Official Service' signage.", priority: "Low", riskLevel: "Low", consequence: "Marketing disconnect.", proof: "Photo", cadence: "weekly" },
                { id: "E-WCO-10", technicalProtocol: "Staff Warranty Brief", floorAction: "Execute 5-min brief on new Apple/Samsung DOA policies.", priority: "Medium", riskLevel: "Low", consequence: "Staff making incorrect promises.", proof: "Briefing Log", cadence: "weekly" }
            ]
        },
        {
            title: "Service & Repair Hub",
            department: "Technical",
            frequency: "Daily",
            role: "Service & Repair Coordinator",
            summary: "Client data security and repair-intake integrity.",
            icon: "wrench",
            tasks: [
                { id: "E-SRC-01", technicalProtocol: "Client Data-Wipe Cert", floorAction: "Sign-off 100% of device wipes before technician entry.", priority: "High", riskLevel: "High", consequence: "Fatal privacy breach and legal suit.", proof: "Signed Form", verificationRequired: true, cadence: "incident-based" },
                { id: "E-SRC-02", technicalProtocol: "Intake Scratch-Map", floorAction: "Photograph 100% of devices at intake to document damage.", priority: "High", riskLevel: "Medium", consequence: "False client damage claims.", proof: "Photo Registry", verificationRequired: true, cadence: "incident-based" },
                { id: "E-SRC-03", technicalProtocol: "Repair-Status SMS", floorAction: "Update 100% of clients < 1 hour post-diagnosis.", priority: "Medium", riskLevel: "Low", consequence: "Excessive support calls.", proof: "Comms Log", cadence: "daily" },
                { id: "E-SRC-04", technicalProtocol: "Spare Part Custody", floorAction: "Verify lock of high-value screen/motherboard stock.", priority: "High", riskLevel: "High", consequence: "Internal part theft.", proof: "Inventory Match", verificationRequired: true, cadence: "daily" },
                { id: "E-SRC-05", technicalProtocol: "ESD Grounding Audit", floorAction: "Test wrist-strap connectivity for 1 random workbench.", priority: "High", riskLevel: "Medium", consequence: "Static damage to client motherboards.", proof: "Test Note", verificationRequired: true, cadence: "daily" },
                { id: "E-SRC-06", technicalProtocol: "Ready-for-Pickup Seal", floorAction: "Apply brand security-tape to 100% of fixed devices.", priority: "Medium", riskLevel: "Low", consequence: "Unauthorized tampered returns.", proof: "Visual Check", cadence: "daily" },
                { id: "E-SRC-07", technicalProtocol: "Service P&L Reconcile", floorAction: "Match spare-parts issued vs service-labor billed.", priority: "Medium", riskLevel: "Medium", consequence: "Unmonitored service margin loss.", proof: "Audit Report", cadence: "weekly" },
                { id: "E-SRC-08", technicalProtocol: "Workshop PPE Pulse", floorAction: "Verify 100% use of eye-shields during battery swap.", priority: "High", riskLevel: "High", consequence: "Technician injury.", proof: "Visual Audit", cadence: "daily" },
                { id: "E-SRC-09", technicalProtocol: "Old-Part Disposition", floorAction: "Confirm return of damaged screens to recycler crate.", priority: "Medium", riskLevel: "Low", consequence: "Unsanitary workshop clutter.", proof: "Bin Log", cadence: "daily" },
                { id: "E-SRC-10", technicalProtocol: "EOD Workbench Clear", floorAction: "Verify 100% of soldering irons are switched off.", priority: "High", riskLevel: "High", consequence: "Overnight workshop fire.", proof: "Closure Log", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Exchange & Returns Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Exchange & Returns Officer",
            summary: "Swap-abuse deterrence and inventory grading.",
            icon: "refresh-cw",
            tasks: [
                { id: "E-ERO-01", technicalProtocol: "Serial-on-Invoice Match", floorAction: "Verify device IMEI matches original POS invoice 100%.", priority: "High", riskLevel: "High", consequence: "Accepting fraudulent/swapped units.", proof: "System Match", verificationRequired: true, cadence: "daily" },
                { id: "E-ERO-02", technicalProtocol: "Open-Box Grading", floorAction: "Classify 100% of returns as: Resellable, Damaged, or DOA.", priority: "High", riskLevel: "Medium", consequence: "Incorrect resell pricing.", proof: "Grading Note", verificationRequired: true, cadence: "daily" },
                { id: "E-ERO-03", technicalProtocol: "Accessory Completeness", floorAction: "Confirm presence of 100% manual/cable/earphone items.", priority: "Medium", riskLevel: "Low", consequence: "Incomplete refurb stock.", proof: "Visual Check", cadence: "daily" },
                { id: "E-ERO-04", technicalProtocol: "Refund Override Witness", floorAction: "Execute manager double-sign for 100% cash refunds.", priority: "High", riskLevel: "High", consequence: "Fictitious refund fraud.", proof: "Dual Sign", verificationRequired: true, cadence: "daily" },
                { id: "E-ERO-05", technicalProtocol: "Price Protection Audit", floorAction: "Reconcile refunds against recent brand price drops.", priority: "Medium", riskLevel: "Low", consequence: "Margin erosion.", proof: "Registry Note", cadence: "weekly" },
                { id: "E-ERO-06", technicalProtocol: "Resell Tag Integrity", floorAction: "Apply 'Open-Box' clear tags to 100% of validated returns.", priority: "Low", riskLevel: "Low", consequence: "Customer disputes over 'New' status.", proof: "Visual Audit", cadence: "daily" },
                { id: "E-ERO-07", technicalProtocol: "Liquid Damage Indicator", floorAction: "Check device internal sensors for zero moisture contact.", priority: "High", riskLevel: "High", consequence: "Accepting water-damaged stock.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "E-ERO-08", technicalProtocol: "Gift-with-Purchase Return", floorAction: "Verify return of free accessories (cases/buds) with device.", priority: "Low", riskLevel: "Low", consequence: "Revenue leakage of freebies.", proof: "Stock Match", cadence: "daily" },
                { id: "E-ERO-09", technicalProtocol: "IMEI Blacklist Sync", floorAction: "Verify 100% of returns are NOT on the police stolen-list.", priority: "High", riskLevel: "High", consequence: "Fencing stolen property.", proof: "Portal Check", verificationRequired: true, cadence: "weekly" },
                { id: "E-ERO-10", technicalProtocol: "EOD Returns summary", floorAction: "Final piece count of today's reversed inventory.", priority: "Medium", riskLevel: "Low", consequence: "Loss of fiscal control.", proof: "Signed Sheet", cadence: "daily" }
            ]
        },
        {
            title: "Stock Room Integrity",
            department: "Stores",
            frequency: "Daily",
            role: "Stock Room Controller",
            summary: "Zero-fail inventory parity for serialized assets.",
            icon: "package",
            tasks: [
                { id: "E-STC-01", technicalProtocol: "IMEI Cycle Count", floorAction: "Blind count top 10 SKUs; match physical vs POS IMEI list.", priority: "High", riskLevel: "High", consequence: "Unidentified inventory theft.", proof: "Count Sheet", verificationRequired: true, cadence: "weekly" },
                { id: "E-STC-02", technicalProtocol: "Inward Scan Match", floorAction: "Verify 100% of received boxes have unique-ID entries.", priority: "High", riskLevel: "High", consequence: "Untraceable 'ghost' stock.", proof: "System Sync", verificationRequired: true, cadence: "daily" },
                { id: "E-STC-03", technicalProtocol: "High-Value Cage Witness", floorAction: "Witness lock/unlock of the Flagship Smartphone cage.", priority: "High", riskLevel: "High", consequence: "High-frequency internal pilferage.", proof: "Access Log", verificationRequired: true, cadence: "daily" },
                { id: "E-STC-04", technicalProtocol: "Packaging Tamper Scan", floorAction: "Inspect 10 cartons for glue/seal manipulation signs.", priority: "High", riskLevel: "High", consequence: "Internal part-swapping (Professional theft).", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "E-STC-05", technicalProtocol: "Warehouse Humidity Pulse", floorAction: "Log stockroom humidity (Target < 50%) to prevent board decay.", priority: "Medium", riskLevel: "Medium", consequence: "Corrosion in high-end computing components.", proof: "Hygrometer", cadence: "daily" },
                { id: "E-STC-06", technicalProtocol: "IBT (Inter-branch) Seal", floorAction: "Verify 100% security-sealing of outgoing transit crates.", priority: "High", riskLevel: "Medium", consequence: "En-route theft gone undetected.", proof: "Seal Registry", verificationRequired: true, cadence: "daily" },
                { id: "E-STC-07", technicalProtocol: "Empty-Box Disposal", floorAction: "Cross-shred 100% of discarded branded carton waste.", priority: "Medium", riskLevel: "Medium", consequence: "Aiding counterfeiters/warranty fraud.", proof: "Visual Confirm", cadence: "daily" },
                { id: "E-STC-08", technicalProtocol: "MHE Pallet Safety", floorAction: "Ensure large appliance stacks do not exceed 3 units.", priority: "High", riskLevel: "High", consequence: "Crush injuries and asset total-loss.", proof: "Walkthrough", cadence: "daily" },
                { id: "E-STC-09", technicalProtocol: "Access Control Registry", floorAction: "Audit 100% staff entries into high-value zones.", priority: "High", riskLevel: "Low", consequence: "Audit trail failure.", proof: "Registry Audit", cadence: "daily" },
                { id: "E-STC-10", technicalProtocol: "EOD Safe Reconcile", floorAction: "Match vault inventory to evening floor-returns.", priority: "High", riskLevel: "High", consequence: "Overnight inventory gap.", proof: "Signed Reconcile", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Serial ID Compliance",
            department: "Compliance",
            frequency: "Hourly",
            role: "IMEI / Serial Compliance Lead",
            summary: "Unique ID matching and activation governance.",
            icon: "barcode",
            tasks: [
                { id: "E-SIC-01", technicalProtocol: "IMEI Box-Device Match", floorAction: "Spot check 5 sales; verify ID parity across 3 nodes.", priority: "High", riskLevel: "High", consequence: "Systemic warranty failure / legal suit.", proof: "Registry Match", verificationRequired: true, cadence: "daily" },
                { id: "E-SIC-02", technicalProtocol: "Activation Dashboard Pulse", floorAction: "Cross-check 100% of 'Billed-not-Activated' devices < 4h.", priority: "High", riskLevel: "Medium", consequence: "Fraudulent gray-market resale.", proof: "Dashboard Log", verificationRequired: true, cadence: "daily" },
                { id: "E-SIC-03", technicalProtocol: "Stolen-List Sync", floorAction: "Upload local IMEI incident list to global brand portal.", priority: "Medium", riskLevel: "High", consequence: "Stolen devices being fixed at brand service.", proof: "Upload Note", cadence: "weekly" },
                { id: "E-SIC-04", technicalProtocol: "Serial Label Print", floorAction: "Verify 100% legible print quality of internal ID tags.", priority: "Low", riskLevel: "Low", consequence: "Inventory disorganization.", proof: "Visual Check", cadence: "daily" },
                { id: "E-SIC-05", technicalProtocol: "Dual-SIM Mapping", floorAction: "Ensure 100% registration of BOTH IMEIs for flagship units.", priority: "Medium", riskLevel: "Low", consequence: "Incomplete KYC tracking.", proof: "Sample Audit", cadence: "daily" },
                { id: "E-SIC-06", technicalProtocol: "IMEI Bill Journal", floorAction: "Confirm zero gaps in seriality numbers in digital POS.", priority: "High", riskLevel: "High", consequence: "Revenue exfiltration / Tax fraud.", proof: "Journal Audit", verificationRequired: true, cadence: "daily" },
                { id: "E-SIC-07", technicalProtocol: "Recall Alert Monitor", floorAction: "Check 100% of today's brand bulletins against stock IDs.", priority: "High", riskLevel: "High", consequence: "Selling exploding or recalled assets.", proof: "Bulletin Registry", verificationRequired: true, cadence: "daily" },
                { id: "E-SIC-08", technicalProtocol: "Compliance Matrix Update", floorAction: "Update version numbers for all internal technical SOPs.", priority: "Low", riskLevel: "Low", consequence: "Training on outdated tech standards.", proof: "Version Log", cadence: "monthly" },
                { id: "E-SIC-09", technicalProtocol: "Grey Market Deviation Scan", floorAction: "Identify serial patterns originating from unauthorized regional codes.", priority: "High", riskLevel: "High", consequence: "Contractual termination by manufacturers.", proof: "Variance Report", verificationRequired: true, cadence: "weekly" },
                { id: "E-SIC-10", technicalProtocol: "Pre-dispatch Serial Validation", floorAction: "Final scan check before E-com parcels are sealed.", priority: "High", riskLevel: "Medium", consequence: "Wrong unique-ID shipped to client.", proof: "Scan Match", verificationRequired: true, cadence: "hourly" }
            ]
        },
        {
            title: "Revenue & Billing Shield",
            department: "Finance",
            frequency: "Daily",
            role: "Cashier Supervisor",
            summary: "Revenue point protection and transaction security.",
            icon: "banknote",
            tasks: [
                { id: "E-CSH-01", technicalProtocol: "PIN-Pad Integrity Scan", floorAction: "Physically check for overlays or skimmers on 100% units.", priority: "High", riskLevel: "High", consequence: "Guest data theft liability.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "E-CSH-02", technicalProtocol: "Bill sequence Re-match", floorAction: "Audit 10 random bills against CCTV timestamps.", priority: "High", riskLevel: "High", consequence: "Internal 'Unrecorded' cash sales.", proof: "Audit Report", verificationRequired: true, cadence: "daily" },
                { id: "E-CSH-03", technicalProtocol: "Finance Option Vetting", floorAction: "Verify 100% KYC completion for Bajaj/HDFC EMI cases.", priority: "High", riskLevel: "Medium", consequence: "Credit rejection / Loss of sale.", proof: "KYC File", cadence: "daily" },
                { id: "E-CSH-04", technicalProtocol: "Cash Drawer Reconcile", floorAction: "Investigate any variance > ₹100 post-shift.", priority: "High", riskLevel: "Medium", consequence: "Systemic till theft.", proof: "Variance Report", verificationRequired: true, cadence: "daily" },
                { id: "E-CSH-05", technicalProtocol: "Promo Discount Audit", floorAction: "Identify staff logins using > 15% discount.", priority: "Medium", riskLevel: "Medium", consequence: "Rogue discounting and margin loss.", proof: "Audit Log", cadence: "weekly" },
                { id: "E-CSH-06", technicalProtocol: "Chargeback Response", floorAction: "Answer bank billing disputes < 24h.", priority: "Medium", riskLevel: "Low", consequence: "Financial bad debt.", proof: "Comms Log", cadence: "daily" },
                { id: "E-CSH-07", technicalProtocol: "EDC Battery Check", floorAction: "Ensure 100% of handheld units are online and charged.", priority: "Low", riskLevel: "Low", consequence: "Checkout friction during peak.", proof: "Visual Check", cadence: "daily" },
                { id: "E-CSH-08", technicalProtocol: "Tax Compliance Scan", floorAction: "Verify GST % per category (Accessories vs Devices).", priority: "High", riskLevel: "Medium", consequence: "Statutory penalties.", proof: "Sample Check", verificationRequired: true, cadence: "daily" },
                { id: "E-CSH-09", technicalProtocol: "POS Touch Hygiene", floorAction: "Sanitize screen and high-touch areas twice daily.", priority: "Low", riskLevel: "Medium", consequence: "Disease spread among staff.", proof: "Cleaning Note", cadence: "daily" },
                { id: "E-CSH-10", technicalProtocol: "EOD Cash-Drop Seal", floorAction: "Witness dual-person seal of bank deposit bag.", priority: "High", riskLevel: "High", consequence: "Untraceable transit theft.", proof: "Seal Number", verificationRequired: true, cadence: "daily" }
            ]
        },
        {
            title: "Delivery & Dispatch",
            department: "Logistics",
            frequency: "Daily",
            role: "Delivery & Dispatch Coordinator",
            summary: "Outbound logistics and installation synchronization.",
            icon: "truck",
            tasks: [
                { id: "E-DDC-01", technicalProtocol: "Outward IMEI Match", floorAction: "Scan 100% of dispatch units; match to delivery challan.", priority: "High", riskLevel: "High", consequence: "Delivering wrong serial unit (Warranty chaos).", proof: "Dispatch Scan", verificationRequired: true, cadence: "daily" },
                { id: "E-DDC-02", technicalProtocol: "Transit Damage Scan", floorAction: "Log 100% of out-of-box damage detected at dock.", priority: "High", riskLevel: "Medium", consequence: "Refused deliveries / Brand damage.", proof: "Photo Log", cadence: "daily" },
                { id: "E-DDC-03", technicalProtocol: "Driver Sobriety Pulse", floorAction: "Execute random behavior check for 5 local riders.", priority: "High", riskLevel: "High", consequence: "Accident liability in client home.", proof: "Registry Note", verificationRequired: true, cadence: "daily" },
                { id: "E-DDC-04", technicalProtocol: "Installation Sync Signal", floorAction: "Notify technician 24h prior to AC/TV home delivery.", priority: "Medium", riskLevel: "Low", consequence: "Multiple visits / Guest friction.", proof: "Comms Log", cadence: "daily" },
                { id: "E-DDC-05", technicalProtocol: "Packaging Integrity", floorAction: "Apply 'MoreMeets Secure' tape to all courier bags.", priority: "Low", riskLevel: "Low", consequence: "Rider tampering risk.", proof: "Visual Check", cadence: "daily" },
                { id: "E-DDC-06", technicalProtocol: "Logistics Cost Analysis", floorAction: "Verify invoice rate vs master contract for shared fleet.", priority: "Low", riskLevel: "Low", consequence: "Unmonitored shipping overspend.", proof: "Audit Match", cadence: "weekly" },
                { id: "E-DDC-07", technicalProtocol: "E-com Pick-up TAT", floorAction: "Target < 4 hour window for 'Ready-to-Ship' status.", priority: "Medium", riskLevel: "Low", consequence: "Platform algorithm penalty.", proof: "TAT Dashboard", cadence: "daily" },
                { id: "E-DDC-08", technicalProtocol: "Dispatch Lane Safety", floorAction: "Clear all illegally parked delivery bikes from fire lane.", priority: "High", riskLevel: "High", consequence: "Blocked emergency access.", proof: "Patrol Log", verificationRequired: true, cadence: "hourly" },
                { id: "E-DDC-09", technicalProtocol: "Last-Mile Delivery Fraud Review", floorAction: "Audit 5 high-value deliveries for customer OTP verification.", priority: "High", riskLevel: "High", consequence: "False delivery claims and asset loss.", proof: "OTP Log", verificationRequired: true, cadence: "daily" },
                { id: "E-DDC-10", technicalProtocol: "Rider Attendance Parity", floorAction: "Verify number of active bikes matches morning peak forecast.", priority: "Medium", riskLevel: "Low", consequence: "Delayed deliveries during sales surge.", proof: "Roster Match", cadence: "daily" }
            ]
        },
        {
            title: "Loss Prevention (Showroom)",
            department: "Security",
            frequency: "Hourly",
            role: "Loss Prevention Officer",
            summary: "Physical hardening and theft deterrence.",
            icon: "shield-alert",
            tasks: [
                { id: "E-LPO-01", technicalProtocol: "EAS Gate Pulse", floorAction: "Test entry gates with active RFID/Security tag.", priority: "High", riskLevel: "High", consequence: "Undetected tag-theft at exit.", proof: "Test Log", cadence: "daily" },
                { id: "E-LPO-02", technicalProtocol: "Demo Puck Sweep", floorAction: "Walk showroom; check for loosened security tethers.", priority: "High", riskLevel: "High", consequence: "Run-and-grab theft prep.", proof: "Patrol Log", cadence: "hourly" },
                { id: "E-LPO-03", technicalProtocol: "Suspicious Package search", floorAction: "Inspect foyers and planters every 2 hours.", priority: "High", riskLevel: "High", consequence: "Safety/Security threat.", proof: "Walkthrough", cadence: "hourly" },
                { id: "E-LPO-04", technicalProtocol: "Staff Exit Search", floorAction: "Perform random check of 3 staff bags at EOD.", priority: "Medium", riskLevel: "Medium", consequence: "Systemic internal shrinkage.", proof: "Registry Note", cadence: "daily" },
                { id: "E-LPO-05", technicalProtocol: "Panic Button Pulse", floorAction: "Execute silent alarm trigger; verify 30s response.", priority: "High", riskLevel: "High", consequence: "No help during armed robbery.", proof: "Signal Test", verificationRequired: true, cadence: "daily" },
                { id: "E-LPO-06", technicalProtocol: "High-value Safe Access", floorAction: "Audit access log vs CCTV timestamp match.", priority: "High", riskLevel: "High", consequence: "Collusion theft window.", proof: "Audit Report", verificationRequired: true, cadence: "weekly" },
                { id: "E-LPO-07", technicalProtocol: "Perimeter Lighting", floorAction: "Replace non-functional bulbs in back alleyways.", priority: "Low", riskLevel: "Medium", consequence: "Assault / Theft risk.", proof: "Visual Check", cadence: "daily" },
                { id: "E-LPO-08", technicalProtocol: "Handover ID Match", floorAction: "Confirm 100% guard names match approved agency roster.", priority: "Medium", riskLevel: "Low", consequence: "Unvetted security personnel.", proof: "ID Audit", cadence: "daily" },
                { id: "E-LPO-09", technicalProtocol: "Fire Extinguisher Clear Path", floorAction: "Physically verify zero inventory blocking unit access.", priority: "High", riskLevel: "High", consequence: "Inability to fight local electrical fire.", proof: "Walkthrough", verificationRequired: true, cadence: "daily" },
                { id: "E-LPO-10", technicalProtocol: "Anti-Grab Shield Audit", floorAction: "Verify lock status of high-value accessory peg-boards.", priority: "Medium", riskLevel: "Medium", consequence: "Rapid shelf-clearing theft.", proof: "Visual Audit", cadence: "hourly" }
            ]
        },
        {
            title: "E-Waste & ESG Compliance",
            department: "Compliance",
            frequency: "Daily",
            role: "E-Waste Compliance Officer",
            summary: "Governance for hazardous tech disposal and sustainability.",
            icon: "recycle",
            tasks: [
                { id: "E-WST-01", technicalProtocol: "Battery Disposal Log", floorAction: "Log KG of lithium-ion batteries sent to hazardous storage.", priority: "High", riskLevel: "High", consequence: "Illegal dumping and fire liability.", proof: "Weight Slip", verificationRequired: true, cadence: "daily" },
                { id: "E-WST-02", technicalProtocol: "Recycler Cert Audit", floorAction: "Verify valid PCB/EPRA license for the pick-up vendor.", priority: "High", riskLevel: "High", consequence: "Massive environmental penalties.", proof: "License File", verificationRequired: true, cadence: "monthly" },
                { id: "E-WST-03", technicalProtocol: "E-Waste Segregation", floorAction: "Confirm zero non-tech trash in the electronic-waste bin.", priority: "Medium", riskLevel: "Low", consequence: "Recycling rejection and ESG penalty.", proof: "Visual Check", cadence: "daily" },
                { id: "E-WST-04", technicalProtocol: "Packaging Reduction", floorAction: "Verify 100% use of recycled filler materials in e-com packs.", priority: "Low", riskLevel: "Low", consequence: "High plastic footprint.", proof: "Sample Check", cadence: "weekly" },
                { id: "E-WST-05", technicalProtocol: "Resource Intensity Pulse", floorAction: "Log showroom KWH; match vs after-hours shutdown goal.", priority: "High", riskLevel: "Low", consequence: "Unmonitored energy waste.", proof: "Meter Match", cadence: "daily" },
                { id: "E-WST-06", technicalProtocol: "Hazardous Part Seal", floorAction: "Ensure cracked screens are in puncture-proof drums.", priority: "Medium", riskLevel: "High", consequence: "Staff injury / Chemical exposure.", proof: "Visual Audit", cadence: "weekly" },
                { id: "E-WST-07", technicalProtocol: "Solar Yield Monitor", floorAction: "Log daily KWH yield from roof arrays (if applicable).", priority: "Low", riskLevel: "Low", consequence: "Lost renewable savings ROI.", proof: "Dashboard", cadence: "daily" },
                { id: "E-WST-08", technicalProtocol: "CSR Activity Log", floorAction: "Document monthly unit-level recycling drive contribution.", priority: "Low", riskLevel: "Low", consequence: "Loss of ESG data points.", proof: "Registry Entry", cadence: "monthly" },
                { id: "E-WST-09", technicalProtocol: "RoHS Material Compliance", floorAction: "Audit 5 random accessories for lead-free certifications.", priority: "Medium", riskLevel: "High", consequence: "Legal liability for hazardous goods sales.", proof: "Cert Match", cadence: "monthly" },
                { id: "E-WST-10", technicalProtocol: "E-Waste Vendor TAT Track", floorAction: "Ensure haz-waste pickup occurs < 7 days of bin-fill.", priority: "Medium", riskLevel: "Medium", consequence: "Overcrowded hazardous storage zone.", proof: "Vendor Log", cadence: "weekly" }
            ]
        },
        {
            title: "Customer Experience & ORM",
            department: "Service",
            frequency: "Daily",
            role: "Customer Experience Lead",
            summary: "Protects the guest score and brand reputation.",
            icon: "smile",
            tasks: [
                { id: "E-CXL-01", technicalProtocol: "Review Triage Loop", floorAction: "Reply to 100% of unit Google/FB reviews <12 hours.", priority: "Medium", riskLevel: "Low", consequence: "Viral reputation damage.", proof: "ORM Dashboard", cadence: "daily" },
                { id: "E-CXL-02", technicalProtocol: "Feedback Kiosk Charge", floorAction: "Ensure tablets are operational and app is active.", priority: "Low", riskLevel: "Low", consequence: "Lost survey data.", proof: "Device Check", cadence: "daily" },
                { id: "E-CXL-03", technicalProtocol: "VIP Loyalty Flag", floorAction: "Notify Store Manager of 'Top 50' member arrival.", priority: "Medium", riskLevel: "Low", consequence: "Generic treatment of elite guests.", proof: "System Alert", cadence: "daily" },
                { id: "E-CXL-04", technicalProtocol: "Demo Quality Rating", floorAction: "Assign 1-10 score to 'Sparkle & Speed' of demo wall.", priority: "Low", riskLevel: "Low", consequence: "Undetected experience decay.", proof: "Scorecard", cadence: "daily" },
                { id: "E-CXL-05", technicalProtocol: "Escalated Dispute Loop", floorAction: "Resolve all refund/DOA claims < 1 hour.", priority: "High", riskLevel: "Medium", consequence: "Viral complaints.", proof: "Incident Log", verificationRequired: true, cadence: "daily" },
                { id: "E-CXL-06", technicalProtocol: "Customer Greeting Audit", floorAction: "Observe 10 guest interactions for brand greeting compliance.", priority: "Low", riskLevel: "Low", consequence: "Cold service culture.", proof: "Audit Score", cadence: "daily" },
                { id: "E-CXL-07", technicalProtocol: "Loyalty Recovery Call", floorAction: "Call 3 'detractor' guests to initiate service recovery.", priority: "Low", riskLevel: "Low", consequence: "Loss of high-LTV customers.", proof: "Call Log", cadence: "weekly" },
                { id: "E-CXL-08", technicalProtocol: "EOD Sentiment summary", floorAction: "Log top 3 guest 'Feature Requests' for the day.", priority: "Low", riskLevel: "Low", consequence: "Zero operational feedback.", proof: "Log Note", cadence: "daily" },
                { id: "E-CXL-09", technicalProtocol: "Post-Purchase Satisfaction SMS", floorAction: "Verify 100% of high-value clients receive thank-you signal.", priority: "Low", riskLevel: "Low", consequence: "Lower client retention rate.", proof: "System Screen", cadence: "daily" },
                { id: "E-CXL-10", technicalProtocol: "Store Navigation Clarity", floorAction: "Verify aisle signage for 'Home Audio' and 'Smart Home' is legible.", priority: "Low", riskLevel: "Low", consequence: "Guest browsing friction.", proof: "Visual Check", cadence: "daily" }
            ]
        },
        {
            title: "Vendor & Brand Liaison",
            department: "Admin",
            frequency: "Weekly",
            role: "Vendor & Brand Liaison",
            summary: "Monitors third-party service performance and promo parity.",
            icon: "handshake",
            tasks: [
                { id: "E-VBL-01", technicalProtocol: "Promo Expiry Scan", floorAction: "Remove signage for expired brand campaigns <8 AM.", priority: "Low", riskLevel: "Low", consequence: "Consumer court claims (False advertising).", proof: "Visual Check", cadence: "daily" },
                { id: "E-VBL-02", technicalProtocol: "Brand Parity (Signage)", floorAction: "Verify external glow-sign functionality and cleanliness.", priority: "Low", riskLevel: "Low", consequence: "Poor brand visibility.", proof: "Photo", cadence: "daily" },
                { id: "E-VBL-03", technicalProtocol: "LPO Support Sync", floorAction: "Verify 100% completion of brand-sponsored 'Demo-Swap' audits.", priority: "High", riskLevel: "Medium", consequence: "Loss of brand trust/incentives.", proof: "Audit Report", verificationRequired: true, cadence: "weekly" },
                { id: "E-VBL-04", technicalProtocol: "Vendor License Sync", floorAction: "Verify GST validity for all active accessory suppliers.", priority: "High", riskLevel: "High", consequence: "Legal liability for the group.", proof: "License File", verificationRequired: true, cadence: "monthly" },
                { id: "E-VBL-05", technicalProtocol: "New Site Launch Readiness", floorAction: "Review fit-out milestones for upcoming brand-zones.", priority: "Medium", riskLevel: "Medium", consequence: "Delayed launches.", proof: "Project Log", cadence: "daily" },
                { id: "E-VBL-06", technicalProtocol: "SLA Performance Benchmarking", floorAction: "Review vendor uptime for HVAC and Chiller maintenance.", priority: "Medium", riskLevel: "Low", consequence: "Ineffective facility service spend.", proof: "SLA Scorecard", cadence: "monthly" },
                { id: "E-VBL-07", technicalProtocol: "Vendor Payment Reconciliation", floorAction: "Match services rendered vs invoices paid for cleaning agency.", priority: "Medium", riskLevel: "Low", consequence: "Overpayment for unrendered labor.", proof: "Bill Audit", cadence: "monthly" },
                { id: "E-VBL-08", technicalProtocol: "On-site Contractor Induction", floorAction: "Verify 100% safety briefing for after-hours shopfitters.", priority: "High", riskLevel: "High", consequence: "Legal liability for on-site accidents.", proof: "Training Log", verificationRequired: true, cadence: "incident-based" },
                { id: "E-VBL-09", technicalProtocol: "Emergency Repair TAT", floorAction: "Log time from breakdown call to vendor arrival (Target < 4h).", priority: "Medium", riskLevel: "Low", consequence: "Extended showroom downtime.", proof: "TAT Dashboard", cadence: "weekly" },
                { id: "E-VBL-10", technicalProtocol: "Asset Lease Expiry Monitor", floorAction: "Identify IT hardware with lease ending < 60 days.", priority: "Low", riskLevel: "Low", consequence: "Unplanned hardware return/buyout cost.", proof: "Registry Note", cadence: "monthly" }
            ]
        },
        {
            title: "Technical Support Executive",
            department: "Technical",
            frequency: "Daily",
            role: "Technical Support Executive",
            summary: "Atomic post-sale support and device setup governance.",
            icon: "bot",
            tasks: [
                { id: "E-TSE-01", technicalProtocol: "Post-Sale Data Transfer", floorAction: "Confirm 100% data sync from old to new device.", priority: "Medium", riskLevel: "Low", consequence: "Guest data-loss claims.", proof: "Success Log", cadence: "incident-based" },
                { id: "E-TSE-02", technicalProtocol: "Parental-Lock Setup", floorAction: "Offer 100% of parents guidance on child-safety filters.", priority: "Medium", riskLevel: "Medium", consequence: "Legal/Ethical liability for brand.", proof: "Briefing Log", cadence: "daily" },
                { id: "E-TSE-03", technicalProtocol: "EDC Machine Battery", floorAction: "Verify charging of all biller-terminal units.", priority: "Low", riskLevel: "Low", consequence: "Transaction lag.", proof: "Visual Check", cadence: "daily" },
                { id: "E-TSE-04", technicalProtocol: "Wi-Fi Strength Pulse", floorAction: "Measure bandwidth at farthest showroom corner (> 10Mbps).", priority: "Low", riskLevel: "Low", consequence: "Guest demo frustration.", proof: "Speed Test", cadence: "weekly" },
                { id: "E-TSE-05", technicalProtocol: "EOD Tech Reset", floorAction: "Verify shutdown of technical workbench equipment.", priority: "High", riskLevel: "High", consequence: "Fire hazard.", proof: "Closure Log", verificationRequired: true, cadence: "daily" },
                { id: "E-TSE-06", technicalProtocol: "Software Update Cycle", floorAction: "Verify 100% of demo units are on the latest OS patch.", priority: "Medium", riskLevel: "Medium", consequence: "Security vulnerability in demo network.", proof: "Update Log", cadence: "weekly" },
                { id: "E-TSE-07", technicalProtocol: "Data Privacy Certification", floorAction: "Sign-off 100% of client device 'Format & Cleanse' tasks.", priority: "High", riskLevel: "High", consequence: "[Fatal: Data breach liability].", proof: "Signed Form", verificationRequired: true, cadence: "incident-based" },
                { id: "E-TSE-08", technicalProtocol: "Technical Troubleshooting Log", floorAction: "Document recurring software glitches for OEM reporting.", priority: "Low", riskLevel: "Low", consequence: "Loss of product feedback data.", proof: "Incident Registry", cadence: "daily" },
                { id: "E-TSE-09", technicalProtocol: "Remote Support TAT", floorAction: "Monitor average resolution time for phone inquiries.", priority: "Medium", riskLevel: "Low", consequence: "Negative ORM for technical support.", proof: "Call Dashboard", cadence: "daily" },
                { id: "E-TSE-10", technicalProtocol: "Workbench Hygiene", floorAction: "Sanitize tools and surfaces twice daily with IPA.", priority: "Low", riskLevel: "Low", consequence: "Contamination and poor staff care.", proof: "Cleaning Sheet", cadence: "daily" }
            ]
        },
        {
            title: "Opening/Closing Audit",
            department: "Audit",
            frequency: "Daily",
            role: "Opening/Closing Audit Supervisor",
            summary: "Final gate-keeping for showroom integrity.",
            icon: "clipboard-check",
            tasks: [
                { id: "E-OCA-01", technicalProtocol: "Pre-Open Perimeter", floorAction: "Confirm zero tampering on shutters and vents.", priority: "High", riskLevel: "High", consequence: "Opening into an active breach.", proof: "Walk Log", verificationRequired: true, cadence: "daily" },
                { id: "E-OCA-02", technicalProtocol: "High-value count witness", floorAction: "Witness final piece-count of 100% flagship smartphones.", priority: "High", riskLevel: "High", consequence: "Closure with missing serial unit.", proof: "Signed Registry", verificationRequired: true, cadence: "daily" },
                { id: "E-OCA-03", technicalProtocol: "Shutter Lockdown", floorAction: "Physically verify lock and alarm of main entrance.", priority: "High", riskLevel: "High", consequence: "Burglary window.", proof: "Visual Check", verificationRequired: true, cadence: "daily" },
                { id: "E-OCA-04", technicalProtocol: "Alarm Arming Signal", floorAction: "Verify 'Armed' status at central monitoring station.", priority: "High", riskLevel: "High", consequence: "Unmonitored facility.", proof: "Call Confirm", verificationRequired: true, cadence: "daily" },
                { id: "E-OCA-05", technicalProtocol: "Key-Safe Seal", floorAction: "Confirm 100% of staff keys are in the overnight box.", priority: "High", riskLevel: "High", consequence: "Unauthorized after-hours safe entry.", proof: "Seal Number", verificationRequired: true, cadence: "daily" },
                { id: "E-OCA-06", technicalProtocol: "CCTV Night-Vision Check", floorAction: "Remote verify clarity of zero-light safe zones.", priority: "High", riskLevel: "Medium", consequence: "Poor overnight incident evidence.", proof: "System Screen", verificationRequired: true, cadence: "daily" },
                { id: "E-OCA-07", technicalProtocol: "Entrance Air-Curtain", floorAction: "Confirm shutdown to prevent overnight energy waste.", priority: "Low", riskLevel: "Low", consequence: "Unnecessary utility cost.", proof: "Visual Check", cadence: "daily" },
                { id: "E-OCA-08", technicalProtocol: "Motion Sensor Trip-Test", floorAction: "Walk 1 random zone to trigger local alarm pulse.", priority: "Medium", riskLevel: "Medium", consequence: "Defective alarm sensors.", proof: "Test Note", cadence: "weekly" },
                { id: "E-OCA-09", technicalProtocol: "Fire Panel Healthy-Signal", floorAction: "Confirm zero 'Fault' indicators on the master panel.", priority: "High", riskLevel: "High", consequence: "Fatal delay in fire detection.", proof: "Visual Audit", verificationRequired: true, cadence: "daily" },
                { id: "E-OCA-10", technicalProtocol: "Final Staff Sign-out Audit", floorAction: "Verify 100% of team badges scanned pre-lockdown.", priority: "Medium", riskLevel: "Low", consequence: "Personnel left in building accidentally.", proof: "Registry Match", verificationRequired: true, cadence: "daily" }
            ]
        }
    ]
};
