
import React from 'react';
import { Bug, Siren, HandCoins, Users, Shield, TrendingUp, Lock, Zap, FileLock, HeartPulse, Bus, Home, TestTube, DatabaseZap, BriefcaseBusiness, ShieldCheck, Handshake, BookOpen, Car, Drill, SprayCan, Megaphone, Stethoscope, Microscope, FileWarning, Ambulance, DoorClosed, CircleDollarSign, Watch, Barcode, Wrench, LifeBuoy, DollarSign, Thermometer, UserCog2, Key, Router, Package, Drama, Eye, Cog, Route, CalendarDays, ClipboardList, HelpingHand, Map, DramaIcon, UserRound, Sparkles, Code, ScanFace, HandPlatter, Scissors, Fish, Cloud, Theater, PackageCheck, UserCheck, KeyRound, Building2, Wind, PawPrint, PersonStanding, Dumbbell, ShoppingCart, Waves, Utensils, Building, MonitorPlay, Film, Tv, Shirt, Gem, Factory, HardHat, GraduationCap, School, Sprout, ShoppingBasket, Wifi, Link, BrainCircuit, Bot, Syringe, Popcorn, Ticket, Lamp, Aperture, Sailboat, Anchor, CakeSlice, Computer, Landmark, FerrisWheel, GalleryVertical, Guitar, Gamepad, Rabbit, VenetianMask, Store, Pill, Ship, Sun, AnchorIcon, Clapperboard, Library, Recycle, FileCheck } from 'lucide-react';

export const painPointsContent = {
    bakery_confectionery_pack: {
        title: "Anatomy of a Bakery Failure",
        points: [
            { icon: <Bug />, title: "The Fatal Allergen Mistake (Pret a Manger, UK, 2016)", description: "A teenager died from an allergic reaction to sesame in a baguette that was not listed on the label, leading to 'Natasha's Law.' Our 'Allergen Management' and 'Labeling Compliance' checklists provide a verifiable system to prevent this life-threatening and business-ending error." },
            { icon: <Siren />, title: "The Viral Contamination (Dominique Ansel Bakery, USA, 2014)", description: "The world-famous creator of the 'Cronut' was shut down by the health department after a video of a mouse in the kitchen went viral. Our 'Pest Control' and 'Daily Cleaning' SOPs provide a documented defense against the single lapse that can cause a PR disaster." },
            { icon: <Wrench />, title: "The Inconsistent Quality Crisis (Starbucks, Global)", description: "Early in its growth, Starbucks' quality varied wildly between stores. They solved it by rigorously standardizing every step. Our checklists for 'Oven Calibration' and 'Recipe Scaling' ensure every product has the same high quality, protecting your brand's reputation." },
            { icon: <Recycle />, title: "End-of-Day Waste & Lost Profit (All Bakeries)", description: "Thousands in profit are lost annually to stale, unsold goods. Our 'Display & Freshness Management' SOP provides a clear process for stock rotation and markdown strategy to minimize waste." }
        ]
    },
     franchise_operations_pack: {
        title: "Anatomy of a Franchise Failure",
        points: [
            { icon: <Eye />, title: "The Brand Dilution Disaster (Subway's 'Footlong' Scandal, USA)", description: "Franchisees were caught using shorter bread, leading to lawsuits and a PR crisis. Our 'Brand Audit' and 'Supply Chain SOPs' enforce portion control and supplier compliance, protecting your brand's core promise." },
            { icon: <FileCheck />, title: "The 'He Said, She Said' Lawsuit (Service Franchise, 2021)", description: "A terminated franchisee sued, claiming lack of support. Without a documented system, the franchisor lost. Our checklists for 'Onboarding' and 'Performance Reviews' create a verifiable legal audit trail, making your agreement defensible." },
            { icon: <TrendingUp />, title: "The Franchisee Failure Cascade (Quiznos, USA, 2010s)", description: "Thousands of franchisees went bankrupt from a flawed model and lack of support, crippling the brand. Our 'Financial Audit' and 'Monthly Performance Review' checklists help you proactively coach franchisees to ensure their profitability and your royalty stream." },
            { icon: <KeyRound />, title: "The Chaotic Grand Opening (New Franchise, 2022)", description: "A new store launch was a disaster with IT issues and untrained staff. Our 'New Franchisee Onboarding' checklist is a master guide to ensure every new unit opens flawlessly and starts generating revenue from day one." }
        ]
    },
    hotels_and_resorts: {
        title: "Anatomy of a Hotel Failure",
        points: [
            { icon: <Siren />, title: "Hotel Arpit Palace, Delhi (2019)", description: "17 lives were lost in a fire due to illegally blocked exits and non-functional alarms. Our daily 'Fire Safety & Exit Inspection' checklist provides a verifiable audit trail to ensure this never happens." },
            { icon: <Zap />, title: "Carlton Tower Hotel, Bengaluru (2010)", description: "A short circuit led to a fatal smoke suffocation incident. Our preventive maintenance checklists for wiring & HVAC ensure your infrastructure is safe and compliant." },
            { icon: <Users />, title: "Oberoi Trident, Mumbai (2008)", description: "The 26/11 terror attack exposed a lack of coordinated emergency SOPs for lockdowns and guest safety. Our checklists provide a framework for a unified security response." },
            { icon: <Shield />, title: "DusitD2 Hotel, Nairobi (2019)", description: "A major security breach highlighted critical lapses in guest screening and perimeter control SOPs. Our security checklists harden your first line of defense." }
        ]
    },
    restaurants: {
        title: "Anatomy of a Restaurant Failure",
        points: [
            { icon: <Bug />, title: "Chipotle E. coli Outbreak (USA, 2015)", description: "A nationwide E. coli outbreak cost Chipotle billions in stock value and brand damage. Our 'HACCP Kitchen Checklist' prevents cross-contamination with mandatory, logged checks." },
            { icon: <Siren />, title: "Indore Eatery Food Poisoning (2022)", description: "Over 50 people were hospitalized after eating at a local eatery, leading to its closure. Our daily hygiene SOPs provide a verifiable record of cleanliness, preventing such incidents." },
            { icon: <Bug />, title: "Delhi Restaurant Sealed (2018)", description: "A restaurant was sealed by FSSAI inspectors after cockroaches were found in the kitchen. Our waste management and pest control checklists ensure a clean, compliant environment." },
            { icon: <TrendingUp />, title: "KFC Chicken Shortage (UK, 2018)", description: "KFC ran out of chicken due to a supply chain failure, costing them millions. Our vendor verification and inventory SOPs help prevent such catastrophic stockouts." }
        ]
    },
    fashion_and_apparel_retail: {
        title: "Anatomy of a Fashion Retail Failure",
        points: [
            { icon: <Siren />, title: "Tanishq Showroom Fire (Delhi, 2022)", description: "A fire due to a short-circuit caused damage worth ₹2 crores. Our fire safety and electrical maintenance audits prevent the overloaded circuits and faulty wiring that cause these fires." },
            { icon: <Factory />, title: "Zara Factory Fire (Bangladesh, 2012)", description: "A worker died in a factory fire due to non-compliance, causing a global brand crisis. Our vendor compliance audits ensure your supply chain meets ethical and safety standards." },
            { icon: <Building />, title: "Pantaloon Store Ceiling Collapse (Mumbai, 2019)", description: "A structural failure due to poor maintenance endangered staff and customers. Our facility maintenance checklists include checks for structural integrity, preventing such disasters." },
            { icon: <Zap />, title: "Primark Electrical Fire (UK, 2018)", description: "An electrical fire forced a store evacuation, but a lack of staff drills created chaos. Our SOPs include mandatory evacuation drills to ensure an orderly and safe response." }
        ]
    },
    electronics_showroom_pack: {
        title: "Anatomy of an Electronics Retail Failure",
        points: [
            { icon: <Siren />, title: "Croma Store Fire (Mumbai, 2021)", description: "A devastating fire was traced back to a short circuit from a demo unit. Our 'Electrical Safety Audit' mandates checks for wiring loads and prevents the use of unsafe multi-plugs, stopping fires before they start." },
            { icon: <Zap />, title: "Apple Store Battery Explosion (Sydney, 2018)", description: "A phone's battery exploded while charging, causing an emergency evacuation. Our 'Demo Unit Safety' SOP includes daily checks for battery swelling and heat, preventing fires." },
            { icon: <Bug />, title: "Best Buy Theft Ring (USA, 2019)", description: "A sophisticated theft ring stole over $43 million in goods by exploiting inventory loopholes. Our inventory control and tagging SOPs make such large-scale theft impossible." },
            { icon: <Wrench />, title: "Reliance Digital Installation Injury (Pune, 2020)", description: "An employee was injured during an unsupervised product installation. Our SOPs ensure that all installations are performed by trained staff following a strict safety protocol." }
        ]
    },
    supermarket_grocery_retail_pack: {
        title: "Anatomy of a Supermarket Failure",
        points: [
            { icon: <Siren />, title: "Tesco Rodent Infestation (UK, 2017)", description: "A Tesco store was hit with heavy fines after a rodent infestation was discovered. Our store hygiene and pest control schedules prevent the conditions that allow for such infestations." },
            { icon: <Bug />, title: "Big Bazaar Slip Injury Lawsuit (Delhi, 2018)", description: "A customer slipped on a wet floor, leading to a major lawsuit. Our 'Hourly Floor Inspection & Spill Response' SOP ensures hazards are identified and cleaned up immediately, with a log to prove diligence." },
            { icon: <Zap />, title: "D-Mart Fire Near Cold Storage (Hyderabad, 2021)", description: "A fire near a cold storage area threatened massive inventory loss. Our electrical safety audits for refrigeration units prevent the faulty wiring and short circuits that cause such fires." },
            { icon: <Recycle />, title: "More Retail Fined for Expired Goods (Mumbai, 2020)", description: "The chain was fined after an inspection found expired items on shelves. Our 'Expiry Date & FIFO Rotation' checklist provides a daily, verifiable system to ensure this never happens." }
        ]
    },
    ott_platform_pack: {
        title: "Anatomy of an OTT Platform Failure",
        points: [
            { icon: <Users />, title: "Hotstar World Cup Crash (2019)", description: "The platform crashed during a crucial India match, infuriating millions. Our 'Live Event Readiness' checklist prevents this with mandatory load testing and disaster recovery drills before major events." },
            { icon: <Shield />, title: "SonyLIV User Data Leak (2021)", description: "User data was leaked due to an API misconfiguration, a common security flaw. Our cybersecurity checklists include API security reviews to prevent such breaches." },
            { icon: <Lock />, title: "Zee5 Server Hack (2021)", description: "A server hack compromised user data, leading to regulatory scrutiny. Our patch management and vulnerability checklists ensure systems are not left exposed to known exploits." },
            { icon: <FileLock />, title: "Amazon Prime Legal Issues (2022)", description: "The platform faced legal action over unreviewed content that violated local laws. Our pre-release QC and legal content review process ensures all content is compliant before going live." }
        ]
    },
    theme_park_ops_pack: {
        title: "Anatomy of a Theme Park Failure",
        points: [
            { icon: <Siren />, title: "The Smiler Crash at Alton Towers (UK, 2015)", description: "Two carriages collided, causing life-changing injuries. The cause was human error overriding a safety system. Our Ride Safety SOP includes a mandatory 'no-override' policy and dual-operator verification, preventing this exact failure." },
            { icon: <Shield />, title: "The Mindbender Derailment (Canada, 1986)", description: "A roller coaster derailed, killing three people, because of missing bolts on a wheel assembly—a clear maintenance failure. Our daily pre-opening inspection checklist mandates a multi-point physical check of critical components, catching such issues before the first guest arrives." },
            { icon: <Bug />, title: "Action Park (USA, 1980s-90s)", description: "Dubbed 'Class Action Park,' this venue was notorious for poorly designed rides and untrained staff, leading to multiple deaths. Our checklists for ride design, operator training, and daily safety audits are the antidote to such a catastrophic operational culture." },
            { icon: <FerrisWheel />, title: "Dreamworld River Rapids Tragedy (Australia, 2016)", description: "Four people died on a river rapids ride due to a conveyor belt malfunction that was a known issue. Our preventive maintenance checklists ensure that every component, from pumps to belts, is regularly inspected, logged, and repaired before it can cause a disaster." }
        ]
    },
    fitness_centers_gyms_pack: {
        title: "Anatomy of a Fitness Center Failure",
        points: [
            { icon: <Siren />, title: "Jabalpur Gym Accident (2023)", description: "A youth died after gym equipment snapped due to poor maintenance; machine had not been serviced in 14 months. Prevented by: Monthly equipment inspection and preventive maintenance SOP." },
            { icon: <Stethoscope />, title: "Anytime Fitness AED Failure (Delhi, 2022)", description: "A member suffered a heart attack, but the gym's AED was not functional. Our 'First Aid & AED Readiness' SOP includes weekly checks of emergency equipment, ensuring it works when needed most." },
            { icon: <Bug />, title: "California Gym Infection Outbreak (2020)", description: "A bacterial infection spread via unclean exercise mats. Our 'Hygiene & Disinfection Schedule' provides a verifiable log that all equipment is sanitized daily." },
            { icon: <Building />, title: "Bangalore Gym Ceiling Fan Collapse (2023)", description: "A member was injured by a falling ceiling fan due to poor facility maintenance. Our checklists include regular facility audits to spot and fix such hidden dangers." }
        ]
    },
    facility_management_blueprint: {
        title: "Anatomy of a Facility Management Failure",
        points: [
            { icon: <Siren />, title: "Kamala Mills Fire (Mumbai, 2017)", description: "14 lives were lost in a rooftop fire due to faulty wiring and missing fire audit logs. Our fire audit and electrical compliance checklists prevent such negligence." },
            { icon: <Zap />, title: "AIIMS Delhi Fire (2023)", description: "A major fire broke out in a building block due to a short-circuit in an AC unit, highlighting gaps in preventive maintenance. Our checklists ensure all MEP systems are regularly inspected." },
            { icon: <Building />, title: "Grenfell Tower Fire (London, 2017)", description: "72 people died from a fire fueled by non-compliant cladding and a lack of evacuation SOPs. Our vendor and material compliance checklists prevent the use of unsafe materials." },
            { icon: <Factory />, title: "LG Polymers Gas Leak (Vizag, 2020)", description: "A catastrophic gas leak from an unmonitored storage tank led to 12 deaths, a direct failure of maintenance and safety SOPs. Our checklists for critical systems make such lapses impossible." }
        ]
    },
    corporate_legal_compliance_starter_kit: {
        title: "Anatomy of a Corporate Compliance Failure",
        points: [
            { icon: <FileLock />, title: "Byju's Regulatory Penalties (2023)", description: "The ed-tech giant faced significant regulatory penalties for delayed financial filings. Our 'Regulatory Calendar' checklist with automated reminders ensures all statutory deadlines are met." },
            { icon: <Shield />, title: "Facebook's $5B FTC Fine (2021)", description: "The company was hit with a massive fine for privacy violations. Our 'Policy Approval and Renewal' checklists help ensure that data privacy policies are up-to-date and acknowledged by all staff." },
            { icon: <Bug />, title: "Uber's $148M Data Breach Fine (2018)", description: "Uber was fined for failing to disclose a major data breach in a timely manner. Our 'Compliance Audit Trail' SOPs provide a clear, documented process for incident reporting and disclosure." },
            { icon: <TrendingUp />, title: "Yes Bank Governance Failure (2020)", description: "A massive governance failure led to an RBI takeover. Our checklists for board meeting preparation and compliance documentation create the robust audit trails needed for good governance." }
        ]
    },
    enterprise_risk_cybersecurity_pack: {
        title: "Anatomy of a Cybersecurity Failure",
        points: [
            { icon: <Siren />, title: "AIIMS Cyberattack (2022)", description: "The hospital's systems were down for weeks due to a ransomware attack, with no clear backup restoration SOP. Our 'Incident Response' and 'Backup & Recovery' checklists are designed to handle exactly this scenario." },
            { icon: <Zap />, title: "WannaCry Ransomware Attack (2017)", description: "This global attack hit over 150 countries by exploiting unpatched systems. Our 'Patch Management' checklist ensures that all critical security patches are tested and deployed on time." },
            { icon: <Lock />, title: "HDFC Bank Data Leak (2020)", description: "A data leak occurred not through the bank itself, but via a third-party vendor. Our 'Vendor Security Assessment' SOP prevents this by mandating security audits for all partners." },
            { icon: <Bug />, title: "Domino’s India Data Breach (2021)", description: "Customer data was stolen and leaked on the dark web. Our 'Data Encryption and Access Control' SOPs ensure that even if a breach occurs, the data remains protected and useless to hackers." }
        ]
    },
    school_operations_pack: {
        title: "Anatomy of a School Safety Failure",
        points: [
            { icon: <Siren />, title: "The Sandy Hook Elementary Shooting (USA, 2012)", description: "A gunman gained entry to the school, leading to a tragic loss of life. Our Visitor Management and Emergency Preparedness checklists enforce a single point of entry, ID verification, and lockdown drills to harden the security posture." },
            { icon: <Building />, title: "Our Lady of the Angels School Fire (USA, 1958)", description: "A fire at the base of a stairwell trapped students, killing 92 children and 3 nuns. It exposed failures in fire alarms and evacuation routes. Our checklists mandate functional alarms and clear, drilled evacuation plans to prevent such a tragedy." },
            { icon: <Bug />, title: "Jack in the Box E. coli Outbreak (USA, 1993)", description: "Contaminated meat served at a fast-food chain led to the deaths of four children. Our Kitchen and Food Safety Audit, based on HACCP, prevents such incidents through rigorous temperature and hygiene checks for school canteens." },
            { icon: <Bus />, title: "Japanese Kindergarten Bus Fatality (2018)", description: "A child died of heatstroke after being forgotten on a school bus. Our Student Transport checklist mandates a physical, seat-by-seat check at the end of every trip to ensure this 'never event' doesn't happen." }
        ]
    },
    university_college_ops: {
        title: "Anatomy of a University & College Failure",
        points: [
            { icon: <Siren />, title: "AIIMS Hostel Fire (2019)", description: "A fire caused by an electrical short circuit was made worse by inaccessible fire extinguishers. Our 'Hostel Maintenance' checklist includes regular checks of electrical systems and safety equipment." },
            { icon: <Shield />, title: "Chandigarh University Privacy Breach (2022)", description: "A major privacy scandal erupted from weak CCTV access SOPs. Our checklists enforce strict access control and monitoring protocols for all campus surveillance systems." },
            { icon: <TestTube />, title: "Texas A&M Lab Explosion (USA, 2008)", description: "An explosion injured several students due to improper chemical handling. Our 'Lab Safety & PPE Audit' ensures that all safety protocols, from storage to disposal, are followed." },
            { icon: <Bug />, title: "Anna University Food Poisoning (2020)", description: "Hundreds of students fell ill from contaminated food in the hostel mess. Our 'Kitchen Hygiene SOP' for large-scale canteens ensures food safety and prevents such outbreaks." }
        ]
    },
    food_manufacturing_ops: {
        title: "Anatomy of a Food Manufacturing Failure",
        points: [
            { icon: <Bug />, title: "Nestlé Maggi Lead Contamination (India, 2015)", description: "A nationwide recall costing ₹500 crore was triggered by lead contamination. Our 'Batch Testing & Traceability' SOPs create a verifiable chain of quality from raw material to finished product." },
            { icon: <Bug />, title: "Britannia Biscuit Recall (2020)", description: "A batch of biscuits was recalled due to mold from a storage lapse. Our 'Cold Storage Temperature Logs' and hygiene SOPs prevent the conditions that lead to spoilage and mold growth." },
            { icon: <Bug />, title: "Tyson Foods Listeria Recall (USA, 2021)", description: "A major listeria contamination led to a massive recall. Our 'Preventive Maintenance' checklists for machinery and 'Hygiene & PPE' SOPs are designed to prevent such cross-contamination." },
            { icon: <Siren />, title: "Ferrero Salmonella Outbreak (2022)", description: "A salmonella outbreak was linked to Kinder chocolate products, causing a global recall. Our 'Hygiene & Sanitization' checklists ensure that production lines are free from pathogens." }
        ]
    },
    manufacturing_operations_ehs_pack: {
        title: "Anatomy of a Manufacturing & EHS Failure",
        points: [
            { icon: <Siren />, title: "LG Polymers Gas Leak (Vizag, 2020)", description: "A catastrophic chemical leak killed 12 and injured over 1,000 people due to failures in maintenance and safety protocols. Our 'Chemical Storage & Ventilation' checklists are designed to prevent such disasters." },
            { icon: <Bug />, title: "Bhopal Gas Tragedy (1984)", description: "The world's worst industrial disaster, which killed over 3,000 people, was a result of catastrophic safety negligence. Our checklists enforce the basic, non-negotiable safety audits that could have prevented it." },
            { icon: <Zap />, title: "Balasore Factory Fire (2023)", description: "An explosion from unsafe chemical storage caused a major fire. Our 'Chemical Storage' and 'Fire Prevention' checklists ensure that flammable materials are handled and stored according to safety standards." },
            { icon: <Factory />, title: "BP Texas City Refinery Explosion (2005)", description: "15 workers were killed due to untrained staff and poor emergency SOPs. Our 'Incident Investigation and Training' protocols ensure that staff are prepared and lessons are learned from near-misses." }
        ]
    },
    logistics_warehouse_pack: {
        title: "Anatomy of a Logistics & Warehouse Failure",
        points: [
            { icon: <Siren />, title: "Amazon Warehouse Fire (Delhi, 2022)", description: "A massive fire destroyed ₹5 crore worth of inventory, likely caused by faulty wiring. Our 'Fire Prevention and Zoning' SOPs include regular electrical audits to prevent this." },
            { icon: <Factory />, title: "Flipkart Hub Injury (Bengaluru, 2021)", description: "A worker was severely injured by a falling pallet due to improper stacking. Our 'Daily Warehouse Inspection' checklist includes checks for pallet stability and stacking height to prevent such accidents." },
            { icon: <Building />, title: "Beirut Port Explosion (2020)", description: "A catastrophic explosion was caused by improperly stored chemicals in a warehouse, a failure of basic safety SOPs. Our checklists for hazardous materials ensure this never happens." },
            { icon: <Wrench />, title: "FedEx Hub Conveyor Belt Accident (2020)", description: "Two workers were injured by a conveyor belt malfunction. Our 'Lifting and Handling Training' and equipment maintenance checklists prevent such machinery-related accidents." }
        ]
    },
    animal_shelter_pack: {
        title: "Anatomy of an Animal Shelter Failure",
        points: [
            { icon: <Bug />, title: "Delhi Shelter Parvovirus Outbreak (2023)", description: "A parvovirus outbreak killed 20 dogs, forcing a temporary shutdown. Our 'Cleaning and Disinfection' schedule is designed to prevent the spread of such infectious diseases." },
            { icon: <Siren />, title: "Pune NGO Shelter Sealed (2021)", description: "A shelter was sealed by authorities due to unsanitary conditions. Our checklists provide a verifiable record of daily cleaning and hygiene, ensuring compliance and animal welfare." },
            { icon: <Stethoscope />, title: "Kerala Rabies Death (2022)", description: "A tragic death occurred due to a missed vaccination SOP for a rescued animal. Our 'Medical Stock & Vaccine Tracker' ensures that every animal's vaccination schedule is up-to-date." },
            { icon: <Users />, title: "Chennai Volunteer Bitten (2019)", description: "A volunteer was bitten by a dog with no recorded aggression protocol. Our 'Animal Behavior Monitoring' SOP helps identify and manage at-risk animals, protecting staff and volunteers." }
        ]
    },
    sports_clubs_stadium_operations_pack: {
        title: "Anatomy of a Sports Venue Failure",
        points: [
            { icon: <Users />, title: "Hillsborough Disaster (UK, 1989)", description: "A human crush at a football match killed 97 people due to severe overcrowding and failed crowd control. Our 'Crowd Management' SOPs, including capacity monitoring and steward positioning, are designed to prevent such a catastrophe." },
            { icon: <Dumbbell />, title: "Jabalpur Gym Accident (India, 2023)", description: "A youth died after gym equipment snapped due to poor maintenance; the machine had not been serviced in 14 months. Prevented by: Our 'Monthly Equipment Inspection' and preventive maintenance SOP, which creates a mandatory, verifiable service log." },
            { icon: <Siren />, title: "Bradford City Stadium Fire (UK, 1985)", description: "A pile of litter under wooden stands caught fire, killing 56 people. No fire audit had been done. Prevented by: Our 'Fire Safety' and 'Housekeeping' SOPs, which mandate checks for flammable debris and functional fire equipment." },
            { icon: <Bug />, title: "Wankhede Stadium Water Contamination (India, 2019)", description: "Several spectators fell ill due to untested drinking water points during an IPL match. Prevented by: Our 'Daily Sanitation' and 'F&B Hygiene Audit' checklists, ensuring all public amenities are safe." }
        ]
    },
    film_production_pack: {
        title: "Anatomy of a Film Production Failure",
        points: [
            { icon: <FileLock />, title: "The '$2M Mistake' Life Rights Disaster", description: "A biopic was halted and sued because producers failed to secure the life rights of its subject. Our 'Pre-production Legal' checklist makes this impossible to miss." },
            { icon: <Siren />, title: "Rust Movie Set Shooting (2021)", description: "A tragic on-set death occurred due to a failure in weapons handling protocols. Our 'On-Set Safety' and 'High-Risk Scene' checklists enforce strict, verifiable safety procedures." },
            { icon: <Car />, title: "Midnight Rider Train Accident (2014)", description: "A crew member was killed filming on a live train track without proper permits or safety coordination. Our 'Location Scouting & Permitting' SOP ensures all legal and safety clearances are met." },
            { icon: <Lock />, title: "The 'Deadpool' Leak (2014)", description: "Test footage was leaked online, but it actually generated huge buzz and got the movie greenlit. While this was a happy accident, our 'Data Security' SOPs prevent unauthorized leaks of valuable IP." }
        ]
    },
    healthcare_and_hospital_operations: {
        title: "Anatomy of a Medical Failure",
        points: [
            { icon: <FileCheck />, title: "Wrong-Side Brain Surgery (Rhode Island, 2007)", description: "A veteran neurosurgeon operated on the wrong side of a patient's head. Our 'Surgical Safety Checklist,' aligned with WHO standards, prevents this 'never event' through a mandatory pre-incision 'Time Out'."},
            { icon: <Sparkles />, title: "JIPMER Sterilization Failure (2019)", description: "An infection outbreak was traced back to improperly sterilized surgical tools. Our 'CSSD & Sterilization' checklist, including biological indicator tests, ensures equipment is sterile." },
            { icon: <Pill />, title: "Dana-Farber Chemo Overdose (1995)", description: "A patient died after receiving a four-fold overdose of chemotherapy due to a calculation error. Our 'High-Alert Medication' SOP mandates an independent double-check for exactly these scenarios." },
            { icon: <UserCheck />, title: "Patient ID Mix-up (Multiple Cases)", description: "Countless errors occur from mixing up patients with similar names. Our 'Patient Identification Protocol' requires using two identifiers (e.g., name and MRN) before any procedure or medication." }
        ]
    }
};

type PainPoints = typeof painPointsContent;
export type PainPointCategory = keyof PainPoints;
