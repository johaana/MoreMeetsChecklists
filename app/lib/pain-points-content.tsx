
import React from 'react';
import { 
    Bug, 
    Siren, 
    HandCoins, 
    Users, 
    Shield, 
    TrendingUp, 
    Lock, 
    Zap, 
    FileLock, 
    HeartPulse, 
    Bus, 
    Home, 
    TestTube, 
    DatabaseZap, 
    BriefcaseBusiness, 
    ShieldCheck, 
    Handshake, 
    BookOpen, 
    Car, 
    Drill, 
    SprayCan, 
    Megaphone, 
    Stethoscope, 
    Microscope, 
    FileWarning, 
    Ambulance, 
    DoorClosed, 
    CircleDollarSign, 
    Watch, 
    Barcode, 
    Wrench, 
    LifeBuoy, 
    DollarSign, 
    Thermometer, 
    UserCog2, 
    Key, 
    Router, 
    Package, 
    Drama, 
    Eye, 
    Cog, 
    Route, 
    CalendarDays, 
    ClipboardList, 
    HelpingHand, 
    Map, 
    UserRound, 
    Sparkles, 
    Code, 
    ScanFace, 
    HandPlatter, 
    Scissors, 
    Fish, 
    Cloud, 
    Theater, 
    PackageCheck, 
    UserCheck, 
    KeyRound, 
    Building2, 
    Wind, 
    PawPrint, 
    PersonStanding, 
    Dumbbell, 
    ShoppingCart, 
    Waves, 
    Utensils, 
    Building, 
    MonitorPlay, 
    Film, 
    Tv, 
    Shirt, 
    Gem, 
    Factory, 
    HardHat, 
    GraduationCap, 
    School, 
    Sprout, 
    ShoppingBasket, 
    Wifi, 
    Link, 
    BrainCircuit, 
    Bot, 
    Syringe, 
    Popcorn, 
    Ticket, 
    Lamp, 
    Aperture, 
    Sailboat, 
    Anchor, 
    CakeSlice, 
    Ship, 
    Sun, 
    Clapperboard, 
    Library, 
    Recycle, 
    FileCheck, 
    Truck, 
    ClipboardCheck, 
    UserPlus, 
    Scale, 
    Projector, 
    ShoppingBag,
    Pill,
    AlertTriangle,
    Banknote,
    Smile,
    Smartphone,
    TrendingUp as RevenueIcon
} from 'lucide-react';

export const painPointsContent = {
    fashion_and_apparel_retail: {
        title: "Anatomy of a Fashion Failure",
        disclaimer: "*The following real-world incidents are cited based on publicly available news reports and investigation findings for educational and illustrative purposes only.*",
        points: [
            { icon: <Factory />, title: "The Ethical Supply Chain Breach (Generic Example)", description: "Brands facing association with unsafe manufacturing hubs due to weak vendor compliance logs. Our 'ESG Sourcing' sub-module mandates vendor certification verification." },
            { icon: <Recycle />, title: "The $100M Dead-Stock Crisis (Generic Example)", description: "Unsold inventory piles leading to forced incineration backlashes. Our 'Inventory Velocity' protocol identifies slow-movers for markdown triggers before they become liability waste." },
            { icon: <ShieldAlert />, title: "The Boutique 'Swap' Fraud (Multiple Incidents)", description: "High-value garments swapped with counterfeits during trial room visits. Our 'Trial Room Command' enforces piece-count verification and tag-tamper sweeps." },
            { icon: <Shirt />, title: "Brand Standard Decay (Generic Example)", description: "Mannequins with mismatched sizes or dusty displays destroying luxury authority. Our 'VM Governance' audits enforce visual parity daily." }
        ]
    },
    retail_operations_system: {
        title: "Anatomy of a Retail Failure",
        disclaimer: "*The following real-world incidents are cited based on publicly available news reports and investigation findings for educational and illustrative purposes only.*",
        points: [
            { icon: <ShoppingBag />, title: "The $10B Shrinkage Epidemic (National Retail Federation)", description: "Retailers lose billions annually to internal theft and inventory errors. Our 'Loss Prevention' and 'Inventory Reconciliation' SOPs implement the cycle counts and POS checks needed to protect your bottom line." },
            { icon: <Zap />, title: "The Lithium Fire Crisis (Generic Electronics)", description: "Lithium-ion batteries in demo units spontaneously exploding have caused multiple showroom fires. Our 'Thermal Safety Pulse' mandates daily checks for swelling and overheating, preventing catastrophic venue damage." },
            { icon: <Thermometer />, title: "The Cold Chain Spoilage (Generic Supermarket)", description: "A single overnight refrigeration failure can wipe out 100% of fresh inventory profit. Our 'HACCP Temperature Logs' provide a verifiable early-warning system for perishable goods." },
            { icon: <Shield />, title: "The Luxury 'Swap' Heist (Generic Jewelry)", description: "High-value items are often swapped with fakes during customer viewings. Our 'Dual-Verification Protocol' and 'One-Item-Only' viewing policy eliminate substitution theft at the point of sale." }
        ]
    },
    franchise_operations_pack: {
        title: "Anatomy of a Franchise Failure",
        disclaimer: "*The following real-world incidents are cited based on publicly available news reports and investigation findings for educational and illustrative purposes only.*",
        points: [
            { icon: <RevenueIcon />, title: "The Royalty Leakage Crisis (Generic QSR)", description: "Franchisees using off-book sales and aggregator bill-cancellation hacks can silently erode 20% of franchisor royalty streams. Our 'Royalty Shield' SOP uses mandatory bill seriality checks to plug these holes." },
            { icon: <Eye />, title: "The Brand Dilution Disaster (Subway's 'Footlong' Scandal)", description: "Local 'improvisation' on portion sizes destroyed global brand trust. Our 'Brand Parity' audits use physical weight checks and photo-matching to ensure the standard never drifts between outlets." },
            { icon: <ShieldAlert />, title: "The Local Liability Trap (Generic Retail)", description: "A single outlet with an expired fire license puts the entire franchise network under regulatory scrutiny. Our 'Compliance Command' tracks statutory licenses for every unit in one master view." },
            { icon: <Users />, title: "The Training Decay (Generic Service)", description: "When a trained Unit Manager resigns, the entire outlet's service quality often collapses. Our 'Institutional Memory' layer ensures built-in trainer notes keep the system running regardless of individual turnover." }
        ]
    },
    bakery_confectionery_pack: {
        title: "Anatomy of a Bakery Failure",
        disclaimer: "*The following real-world incidents are cited based on publicly available news reports and investigation findings for educational and illustrative purposes only.*",
        points: [
            { icon: <Bug />, title: "The Fatal Allergen Mistake (Pret a Manger, UK, 2016)", description: "A teenager, Natasha Ednan-Laperouse, died from an allergic reaction to sesame baked into a baguette that was not listed on the label. This led to 'Natasha's Law' and a complete overhaul of food labeling laws. Our 'Allergen Management' and 'Labeling Compliance' checklists provide a verifiable system to prevent this life-threatening and business-ending error." },
            { icon: <Siren />, title: "The Viral Contamination (Dominique Ansel Bakery, USA, 2014)", description: "The world-famous creator of the 'Cronut' was shut down by the health department after a video of a mouse in the kitchen went viral. Our 'Pest Control' and 'Daily Cleaning' SOPs provide a documented defense against the single lapse that can cause a PR disaster." },
            { icon: <Wrench />, title: "The Inconsistent Quality Crisis (Starbucks, Global)", description: "Early in its growth, Starbucks' quality varied wildly between stores. They solved it by rigorously standardizing every step. Our checklists for 'Oven Calibration' and 'Recipe Scaling' ensure every product has the same high quality, protecting your brand's reputation." },
            { icon: <Recycle />, title: "End-of-Day Waste & Lost Profit (All Bakeries)", description: "Thousands in profit are lost annually to stale, unsold goods. Our 'Display & Freshness Management' SOP provides a clear process for stock rotation and markdown strategy to minimize waste." }
        ]
    },
    hotels_and_resorts: {
        title: "Anatomy of a Hotel Failure",
        disclaimer: "*The following real-world incidents are cited based on publicly available news reports and investigation findings for educational and illustrative purposes only.*",
        points: [
            { icon: <Siren />, title: "Hotel Arpit Palace Fire (Delhi, 2019)", description: "17 lives were lost in a fire due to illegally blocked exits and non-functional alarms. Our daily 'Fire Safety & Exit Inspection' checklist provides a verifiable audit trail to ensure this never happens." },
            { icon: <Zap />, title: "Carlton Tower Hotel Fire (Bengaluru, 2010)", description: "A short circuit in a utility area led to a fatal smoke suffocation incident. Our preventive maintenance checklists for wiring & HVAC ensure your infrastructure is safe and compliant." },
            { icon: <Users />, title: "Oberoi Trident Terror Attack (Mumbai, 2008)", description: "The 26/11 terror attack exposed a lack of coordinated emergency SOPs for lockdowns and guest safety. Our checklists provide a framework for a unified security response." },
            { icon: <Shield />, title: "DusitD2 Hotel Attack (Nairobi, 2019)", description: "A major security breach highlighted critical lapses in guest screening and perimeter control SOPs. Our security checklists harden your first line of defense." }
        ]
    },
    restaurants: {
        title: "Anatomy of a Restaurant Failure",
        disclaimer: "*The following real-world incidents are cited based on publicly available news reports and investigation findings for educational and illustrative purposes only.*",
        points: [
            { icon: <Bug />, title: "Chipotle E. coli Outbreak (USA, 2015)", description: "A nationwide E. coli outbreak cost Chipotle billions in stock value and brand damage. Our 'HACCP Kitchen Checklist' prevents cross-contamination with mandatory, logged checks." },
            { icon: <Siren />, title: "Saravana Bhavan Food Poisoning (India, multiple instances)", description: "The popular chain has faced multiple closures and legal actions over food safety lapses. Our daily hygiene SOPs provide a verifiable record of cleanliness, preventing such incidents." },
            { icon: <Bug />, title: "Delhi Restaurant Sealed (2018)", description: "A restaurant was sealed by FSSAI inspectors after cockroaches were found in the kitchen. Our waste management and pest control checklists ensure a clean, compliant environment." },
            { icon: <TrendingUp />, title: "KFC Chicken Shortage (UK, 2018)", description: "KFC ran out of chicken due to a supply chain failure, costing them millions. Our vendor verification and inventory SOPs help prevent such catastrophic stockouts." }
        ]
    },
    cinema_operations_pack: {
        title: "Anatomy of a Cinema Failure",
        disclaimer: "*The following real-world incidents are cited based on publicly available news reports and investigation findings for educational and illustrative purposes only.*",
        points: [
            { icon: <Siren />, title: "Uphaar Cinema Fire (Delhi, 1997)", description: "59 people died, not from fire, but from suffocation due to blocked exits. Our 'Fire Safety' checklist mandates daily exit checks, making such a tragedy impossible." },
            { icon: <Bug />, title: "AMC Theater Bed Bug Infestation (USA, 2010)", description: "A viral news story about bed bugs led to a PR nightmare and costly pest control. Our 'Auditorium Cleaning' SOP includes checks for pests, preventing such outbreaks." },
            { icon: <Projector />, title: "Interstellar Projection Error (Global, 2014)", description: "Many cinemas showed the film with incorrect sound mixing, ruining the experience. Our 'Projection & Sound QC' checklist ensures all technical aspects are perfect before every show." },
            { icon: <Users />, title: "Aurora Movie Theater Shooting (USA, 2012)", description: "While a horrific criminal act, this tragedy led to enhanced security protocols worldwide. Our 'Crowd Management & Security' checklists help manage entry points and monitor for suspicious behavior." }
        ]
    },
    facility_management_blueprint: {
        title: "Anatomy of a Facility Management Failure",
        disclaimer: "*The following real-world incidents are cited based on publicly available news reports and investigation findings for educational and illustrative purposes only.*",
        points: [
            { icon: <Siren />, title: "Kamala Mills Fire (Mumbai, 2017)", description: "14 lives were lost in a rooftop fire due to faulty wiring and missing fire audit logs. Our fire audit and electrical compliance checklists prevent such negligence." },
            { icon: <Zap />, title: "AIIMS Delhi Fire (2023)", description: "A major fire broke out in a building block due to a short-circuit in an AC unit, highlighting gaps in preventive maintenance. Our checklists ensure all MEP systems are regularly inspected." },
            { icon: <Building />, title: "Grenfell Tower Fire (London, 2017)", description: "72 people died from a fire fueled by non-compliant cladding and a lack of evacuation SOPs. Our vendor and material compliance checklists prevent the use of unsafe materials." },
            { icon: <Factory />, title: "LG Polymers Gas Leak (Vizag, 2020)", description: "A catastrophic gas leak from an unmonitored storage tank led to 12 deaths, a direct failure of maintenance and safety SOPs. Our checklists for critical systems make such lapses impossible." }
        ]
    },
    corporate_legal_compliance_starter_kit: {
        title: "Anatomy of a Corporate Compliance Failure",
        disclaimer: "*The following real-world incidents are cited based on publicly available news reports and investigation findings for educational and illustrative purposes only.*",
        points: [
            { icon: <FileLock />, title: "Byju's Regulatory Meltdown (India, 2023)", description: "The ed-tech giant faced massive regulatory penalties and a valuation collapse due to severely delayed financial filings and poor corporate governance. Our 'Statutory Calendar SOP' and 'Board Meeting' checklists prevent such lapses." },
            { icon: <Shield />, title: "Facebook's $5B FTC Fine (USA, 2019)", description: "The company was hit with a record-breaking fine for privacy violations. Our 'Policy Approval and Renewal' checklists help ensure that data privacy policies are up-to-date and acknowledged by all staff." },
            { icon: <Bug />, title: "Uber's $148M Data Breach Fine (USA, 2018)", description: "Uber was fined for failing to disclose a major data breach in a timely manner. Our 'Compliance Audit Trail' SOPs provide a clear, documented process for incident reporting and disclosure." },
            { icon: <TrendingUp />, title: "Yes Bank Governance Failure (India, 2020)", description: "A massive governance failure led to an RBI takeover. Our checklists for board meeting preparation and compliance documentation create the robust audit trails needed for good governance." }
        ]
    },
    enterprise_risk_cybersecurity_pack: {
        title: "Anatomy of a Cybersecurity Failure",
        disclaimer: "*The following real-world incidents are cited based on publicly available news reports and investigation findings for educational and illustrative purposes only.*",
        points: [
            { icon: <Siren />, title: "The MGM & Caesars Palace Ransomware Attacks (USA, 2023)", description: "In 2023, ransomware gangs crippled these hospitality giants not with complex hacking, but by tricking IT helpdesk staff. Our 'Phishing Simulation' SOP builds a human firewall, while our 'Incident Response' checklist provides a drilled playbook to contain an attack before it costs nine figures." },
            { icon: <Zap />, title: "WannaCry Ransomware Attack (Global, 2017)", description: "This global attack hit over 150 countries by exploiting unpatched systems. Our 'Patch Management' checklist ensures that all critical security patches are tested and deployed on time." },
            { icon: <Lock />, title: "HDFC Bank Data Leak via Vendor (India, 2020)", description: "A data leak occurred not through the bank itself, but via a third-party vendor. Our 'Vendor Security Assessment' SOP prevents this by mandating security audits for all partners." },
            { icon: <Bug />, title: "Domino’s India Data Breach (2021)", description: "Customer data was stolen and leaked on the dark web. Our 'Data Encryption and Access Control' SOPs ensure that even if a breach occurs, the data remains protected and useless to hackers." }
        ]
    },
    school_operations_pack: {
        title: "Anatomy of a School Safety Failure",
        disclaimer: "*The following real-world incidents are cited based on publicly available news reports and investigation findings for educational and illustrative purposes only.*",
        points: [
            { icon: <Siren />, title: "The Sandy Hook Elementary Shooting (USA, 2012)", description: "A gunman gained entry to the school, leading to a tragic loss of life. Our 'Visitor Management' and 'Emergency Preparedness' checklists enforce a single point of entry, ID verification, and lockdown drills to harden the security posture." },
            { icon: <Building />, title: "Our Lady of the Angels School Fire (USA, 1958)", description: "A fire at the base of a stairwell trapped students, killing 92 children. It exposed failures in fire alarms and evacuation routes. Our checklists mandate functional alarms and clear, drilled evacuation plans to prevent such a tragedy." },
            { icon: <Bug />, title: "The Jack in the Box E. coli Outbreak (USA, 1993)", description: "Contaminated meat served at a fast-food chain led to the deaths of four children. Our 'Kitchen and Food Safety Audit', based on HACCP, prevents such incidents through rigorous temperature and hygiene checks for school canteens." },
            { icon: <Bus />, title: "Japanese Kindergarten Bus Fatality (Japan, 2022)", description: "A child died of heatstroke after being forgotten on a school bus. Our 'Student Transport' checklist mandates a physical, seat-by-seat check at the end of every trip to ensure this 'never event' doesn't happen." }
        ]
    },
    university_college_ops: {
        title: "Anatomy of a University & College Failure",
        disclaimer: "*The following real-world incidents are cited based on publicly available news reports and investigation findings for educational and illustrative purposes only.*",
        points: [
            { icon: <Siren />, title: "AIIMS Hostel Fire (India, 2019)", description: "A fire caused by an electrical short circuit was made worse by inaccessible fire extinguishers. Our 'Hostel Maintenance' checklist includes regular checks of electrical systems and safety equipment." },
            { icon: <Shield />, title: "Chandigarh University Privacy Breach (India, 2022)", description: "A major privacy scandal erupted from weak CCTV access SOPs. Our checklists enforce strict access control and monitoring protocols for all campus surveillance systems." },
            { icon: <TestTube />, title: "Texas A&M Lab Explosion (USA, 2008)", description: "An explosion injured several students due to improper chemical handling. Our 'Lab Safety & PPE Audit' ensures that all safety protocols, from storage to disposal, are followed." },
            { icon: <Bug />, title: "Anna University Food Poisoning (India, 2020)", description: "Hundreds of students fell ill from contaminated food in the hostel mess. Our 'Kitchen Hygiene SOP' for large-scale canteens ensures food safety and prevents such outbreaks." }
        ]
    },
    food_manufacturing_ops: {
        title: "Anatomy of a Food Manufacturing Failure",
        disclaimer: "*The following real-world incidents are cited based on publicly available news reports and investigation findings for educational and illustrative purposes only.*",
        points: [
            { icon: <Bug />, title: "Nestlé Maggi Lead Contamination (India, 2015)", description: "A nationwide recall costing ₹500 crore was triggered by lead contamination. Our 'Batch Testing & Traceability' SOPs create a verifiable chain of quality from raw material to finished product." },
            { icon: <Bug />, title: "Britannia Biscuit Recall (India, 2020)", description: "A batch of biscuits was recalled due to mold from a storage lapse. Our 'Cold Storage Temperature Logs' and hygiene SOPs prevent the conditions that lead to spoilage and mold growth." },
            { icon: <Bug />, title: "Tyson Foods Listeria Recall (USA, 2021)", description: "A major listeria contamination led to a massive recall. Our 'Preventive Maintenance' checklists for machinery and 'Hygiene & PPE' SOPs are designed to prevent such cross-contamination." },
            { icon: <Siren />, title: "Ferrero Salmonella Outbreak (Global, 2022)", description: "A salmonella outbreak was linked to Kinder chocolate products, causing a global recall. Our 'Hygiene & Sanitization' checklists ensure that production lines are free from pathogens." }
        ]
    },
    manufacturing_operations_ehs_pack: {
        title: "Anatomy of a Manufacturing & EHS Failure",
        disclaimer: "*The following real-world incidents are cited based on publicly available news reports and investigation findings for educational and illustrative purposes only.*",
        points: [
            { icon: <Siren />, title: "LG Polymers Gas Leak (Vizag, 2020)", description: "A catastrophic chemical leak killed 12 and injured over 1,000 people due to failures in maintenance and safety protocols. Our 'Chemical Storage & Ventilation' checklists are designed to prevent such disasters." },
            { icon: <Bug />, title: "Bhopal Gas Tragedy (India, 1984)", description: "The world's worst industrial disaster, which killed thousands, was a result of catastrophic safety negligence. Our checklists enforce the basic, non-negotiable safety audits that could have prevented it." },
            { icon: <Zap />, title: "Balasore Factory Fire (India, 2023)", description: "An explosion from unsafe chemical storage caused a major fire. Our 'Chemical Storage' and 'Fire Prevention' checklists ensure that flammable materials are handled and stored according to safety standards." },
            { icon: <Factory />, title: "BP Texas City Refinery Explosion (USA, 2005)", description: "15 workers were killed due to untrained staff and poor emergency SOPs. Our 'Incident Investigation and Training' protocols ensure that staff are prepared and lessons are learned from near-misses." }
        ]
    },
    logistics_warehouse_pack: {
        title: "Anatomy of a Logistics & Warehouse Failure",
        disclaimer: "*The following real-world incidents are cited based on publicly available news reports and investigation findings for educational and illustrative purposes only.*",
        points: [
            { icon: <Siren />, title: "The Beirut Port Explosion (Lebanon, 2020)", description: "A catastrophic explosion of improperly stored ammonium nitrate killed over 200 people. This is the ultimate example of a storage and handling failure. Our checklists for 'Hazardous Materials' and 'Warehouse Safety' enforce the strict protocols that prevent such a disaster." },
            { icon: <Truck />, title: "The Ever Given Suez Canal Blockage (Global, 2021)", description: "This single incident halted $9.6 billion of trade per day, a symbol of supply chain fragility. Our SOPs ensure you have the internal resilience to withstand external shocks by optimizing stock levels and having pre-vetted alternative transport and supply options." },
            { icon: <Building />, title: "ASOS Warehouse Fire (UK, 2014)", description: "A massive fire, believed to be arson, destroyed over $30 million of inventory. Our 'Security & Visitor Control' checklists harden your facility against unauthorized access, while 'Fire Safety' SOPs ensure rapid detection and response." },
            { icon: <Wrench />, title: "Amazon Warehouse Fatality (USA, 2021)", description: "A worker was killed after being caught in a conveyor belt. Our 'Material Handling Equipment (MHE)' safety checklists and maintenance logs ensure that all machinery is safe and operated correctly, preventing tragic accidents." }
        ]
    },
    healthcare_and_hospital_operations: {
        title: "Anatomy of a Medical Failure",
        disclaimer: "*The following real-world incidents are cited based on publicly available news reports and investigation findings for educational and illustrative purposes only.*",
        points: [
            { icon: <FileCheck />, title: "Wrong-Side Brain Surgery (Rhode Island Hospital, 2007)", description: "A veteran neurosurgeon operated on the wrong side of a patient's head. Our 'Surgical Safety Checklist,' aligned with WHO standards, prevents this 'never event' through a mandatory pre-incision 'Time Out'."},
            { icon: <Sparkles />, title: "JIPMER Sterilization Failure (India, 2019)", description: "An infection outbreak was traced back to improperly sterilized surgical tools. Our 'CSSD & Sterilization' checklist, including biological indicator tests, ensures equipment is sterile." },
            { icon: <Pill />, title: "Dana-Farber Chemo Overdose (USA, 1995)", description: "A patient died after receiving a four-fold overdose of chemotherapy due to a calculation error. Our 'High-Alert Medication' SOP mandates an independent double-check for exactly these scenarios." },
            { icon: <UserCheck />, title: "Patient ID Mix-up (Multiple Cases, Global)", description: "Countless errors occur from mixing up patients with similar names. Our 'Patient Identification Protocol' requires using two identifiers (e.g., name and MRN) before any procedure or medication." }
        ]
    }
};

export type PainPointCategory = keyof typeof painPointsContent;
