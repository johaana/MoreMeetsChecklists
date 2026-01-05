
import type { PremiumPack } from "@/lib/premium-packs";

export const animal_shelter_pack: PremiumPack = {
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

  