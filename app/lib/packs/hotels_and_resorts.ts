
import type { PremiumPack } from "@/lib/premium-packs";

export const hotels_and_resorts: PremiumPack = {
    id: 'hotels_and_resorts',
    title: "Hotel Operating System",
    priceINR: 5999,
    priceUSD: 79,
    competitorPriceUSD: 599,
    updatedAt: "2025-02-24",
    paymentId: 'pl_RaWEBHhFLQENxC',
    lemonSqueezyUrl: 'https://moremeets.lemonsqueezy.com/buy/2f377557-d41f-4571-83d3-a52e24ac27dd',
    category: "Hospitality",
    description: "The definitive Sovereign v11.3 engine for luxury hotels and resorts. Standardizing 180+ technical control points across Front Office, Housekeeping, Engineering, and Events.",
    heroHeadline: "Eliminate Guest Safety Gaps and Viral Reputation Damage",
    heroSubheadline: "Track 180+ technical control points across 8 distinct roles—even when you’re not on property.",
    pricingUrgency: "One safety incident or a single negative viral review costs 100x more than this entire system.",
    consultingAnchor: 15000,
    icon: "building",
    badgeText: "V11.3 SOVEREIGN",
    badgeVariant: "accent",
    bestseller: true,
    whoIsItFor: ["General Managers", "Hotel Owners", "Heads of Housekeeping", "Banqueting Directors", "Security & Valet Managers"],
    sampleItems: [
        { text: "<strong>Front Office Integrity</strong>: Zero-fail guest ID compliance and C-Form registration sync.", icon: "concierge-bell" },
        { text: "<strong>Housekeeping Command</strong>: Hourly public area audits and deep-clean room inspection scores.", icon: "bed" },
        { text: "<strong>Digital Command & ORM</strong>: Rate parity audits and 24h review response pulse to protect rankings.", icon: "globe" },
        { text: "<strong>MEP & Technical Safety</strong>: Daily generator load tests and water quality TDS monitoring.", icon: "wrench" }
    ],
    checklists: [
        {
            title: "Governance & Audit",
            department: "Executive",
            frequency: "Weekly",
            role: "Owner / Managing Director",
            summary: "High-level strategic oversight of property risk and money.",
            icon: "crown",
            tasks: [
                { id: "HR-EXE-01", description: "Review 'Empire Mood' scores and total money made today.", priority: "High", riskLevel: "Low", consequence: "Operational drift and loss of team focus.", proof: "Dashboard Review" },
                { id: "HR-EXE-02", description: "Match the night audit report against actual bank money received.", priority: "High", riskLevel: "High", consequence: "Internal theft and revenue leakage.", proof: "Audit Sheet" },
                { id: "HR-EXE-03", description: "Check if the Public Liability insurance is still valid.", priority: "High", riskLevel: "High", consequence: "Financial ruin during a guest accident.", proof: "Policy File" },
                { id: "HR-EXE-04", description: "Audit commission bills from MMT/Airbnb to avoid overpaying.", priority: "High", riskLevel: "Medium", consequence: "Paying for 'No-Show' guests who never arrived.", proof: "Ledger Match" },
                { id: "HR-EXE-05", description: "Review where the mystery auditors found faults this week.", priority: "Medium", riskLevel: "Low", consequence: "Lowering of hotel standards.", proof: "Audit Report" },
                { id: "HR-EXE-06", description: "Check that the Fire License (NOC) is displayed and in-date.", priority: "High", riskLevel: "High", consequence: "Government sealing of the hotel.", proof: "NOC Certificate" },
                { id: "HR-EXE-07", description: "Review electricity and water bills for any strange spikes.", priority: "Low", riskLevel: "Low", consequence: "Wasted money on utilities.", proof: "P&L Note" },
                { id: "HR-EXE-08", description: "Check that senior managers were on the floor during peak Saturday hours.", priority: "Medium", riskLevel: "Low", consequence: "Management disconnect when guests need them most.", proof: "Roster Log" },
                { id: "HR-EXE-09", description: "Check if any guest is threatening a legal case.", priority: "High", riskLevel: "High", consequence: "Unmanaged lawsuits and court costs.", proof: "Legal Dashboard" },
                { id: "HR-EXE-10", description: "Look at photos of any ongoing repair or building work.", priority: "Medium", riskLevel: "Medium", consequence: "Budget overruns and unmonitored delays.", proof: "Project Log" },
                { id: "HR-EXE-11", description: "Audit staff payroll to make sure everyone was paid correctly.", priority: "High", riskLevel: "Medium", consequence: "Employee disputes and strikes.", proof: "Payroll Register" },
                { id: "HR-EXE-12", description: "Check the hotel's ranking on Google and TripAdvisor.", priority: "High", riskLevel: "Low", consequence: "Fewer bookings if the score drops.", proof: "CSAT Report" },
                { id: "HR-EXE-13", description: "Perform a physical count of all Master Keys.", priority: "High", riskLevel: "High", consequence: "Security risk if a master key is missing.", proof: "Audit Log" },
                { id: "HR-EXE-14", description: "Check how much was spent on new linen this month.", priority: "Low", riskLevel: "Low", consequence: "Overspending on bedsheets.", proof: "Stock Report" },
                { id: "HR-EXE-15", description: "Compare vendor prices with other suppliers to ensure we aren't overpaying.", priority: "Medium", riskLevel: "Low", consequence: "Inflated procurement costs.", proof: "Vendor Log" },
                { id: "HR-EXE-16", description: "Check if PF and ESI payments for staff are up to date.", priority: "High", riskLevel: "High", consequence: "Government fines and legal risk.", proof: "Compliance File" },
                { id: "HR-EXE-17", description: "Review how many hours of training each staff member received.", priority: "Medium", riskLevel: "Low", consequence: "Staff skills getting rusty.", proof: "Matrix File" },
                { id: "HR-EXE-18", description: "Check if the General Manager gave too many free discounts.", priority: "High", riskLevel: "Medium", consequence: "Direct loss of room profit.", proof: "POS Void Log" },
                { id: "HR-EXE-19", description: "Verify that the generator was serviced on time.", priority: "High", riskLevel: "High", consequence: "Blackout during a full house.", proof: "Service Record" },
                { id: "HR-EXE-20", description: "Final Weekly Strategic sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of board-level oversight.", proof: "Signed Summary" }
            ]
        },
        {
            title: "Front Office & Arrival",
            department: "Front Desk",
            frequency: "Daily",
            role: "General Manager",
            summary: "Legal compliance, guest arrival readiness, and billing integrity.",
            icon: "concierge-bell",
            tasks: [
                { id: "HR-FO-01", description: "Check guest IDs and send info to police (C-Form).", priority: "High", riskLevel: "High", consequence: "Criminal liability and loss of hotel license.", proof: "Compliance Log", trainerNotes: "Scan original IDs only." },
                { id: "HR-FO-02", description: "Check if MMT/Airbnb bookings match what is in our system.", priority: "High", riskLevel: "Medium", consequence: "Double-booking and angry guests.", proof: "PMS Match" },
                { id: "HR-FO-03", description: "Send 'Welcome' messages to all Airbnb arrivals for today.", priority: "Medium", riskLevel: "Low", consequence: "Poor communication scores.", proof: "App Inbox" },
                { id: "HR-FO-04", description: "Count the room keys and make sure none are missing.", priority: "High", riskLevel: "High", consequence: "Security risk for guest rooms.", proof: "Key Audit" },
                { id: "HR-FO-05", description: "Check if any guest has reached their credit limit.", priority: "Medium", riskLevel: "Medium", consequence: "Guests leaving without paying for extras.", proof: "POS Report" },
                { id: "HR-FO-06", description: "Review and approve 'Late Checkout' requests.", priority: "Low", riskLevel: "Low", consequence: "Housekeeping delays for the next guest.", proof: "Log Book" },
                { id: "HR-FO-07", description: "Check if VIP welcome fruit or gifts are ready in the room.", priority: "Medium", riskLevel: "Low", consequence: "VIP guests feeling ignored.", proof: "Photo" },
                { id: "HR-FO-08", description: "Make sure 'Walk-in' guests are quoted the correct rate.", priority: "Medium", riskLevel: "Medium", consequence: "Selling rooms for too cheap.", proof: "Rate Log" },
                { id: "HR-FO-09", description: "Check if the bell-desk trolleys are clean and working.", priority: "Low", riskLevel: "Low", consequence: "Bad first impression.", proof: "Visual Check" },
                { id: "HR-FO-10", description: "Check the flight pickup list for any changes or delays.", priority: "High", riskLevel: "Low", consequence: "Guests waiting at the airport.", proof: "Tracking Log" },
                { id: "HR-FO-11", description: "Audit staff grooming: check uniforms and ID badges.", priority: "Low", riskLevel: "Low", consequence: "Unprofessional brand image.", proof: "Daily Brief" },
                { id: "HR-FO-12", description: "Test the lobby Wi-Fi: login must work in 10 seconds.", priority: "Medium", riskLevel: "Low", consequence: "Immediate guest complaints.", proof: "Phone Test" },
                { id: "HR-FO-13", description: "Update the currency exchange board with today's rates.", priority: "High", riskLevel: "Medium", consequence: "Financial loss or legal fines.", proof: "Rate Note" },
                { id: "HR-FO-14", description: "Check 'Lost & Found': make sure all items are tagged.", priority: "Medium", riskLevel: "Medium", consequence: "Theft claims against the hotel.", proof: "Safe Entry" },
                { id: "HR-FO-15", description: "Check if repeat guests have their favorite drinks in the room.", priority: "Medium", riskLevel: "Low", consequence: "Loss of loyal guests.", proof: "Guest History" },
                { id: "HR-FO-16", description: "Check if the morning newspapers were delivered to rooms.", priority: "Low", riskLevel: "Low", consequence: "Broken luxury standard.", proof: "Door Audit" },
                { id: "HR-FO-17", description: "Audit the concierge: check if tour vendors are vetted.", priority: "Medium", riskLevel: "High", consequence: "Guest injury liability during tours.", proof: "Vendor License" },
                { id: "HR-FO-18", description: "Check stationary at the desk (pens, forms, cards).", priority: "Low", riskLevel: "Low", consequence: "Service delays.", proof: "Supply Audit" },
                { id: "HR-FO-19", description: "Verify the cash bag is sealed before the shift ends.", priority: "High", riskLevel: "High", consequence: "Internal cash theft.", proof: "Cash Bag" },
                { id: "HR-FO-20", description: "Final Daily Front Office sign-off.", priority: "High", riskLevel: "Low", consequence: "Loss of duty control.", proof: "Signed Log" }
            ]
        }
    ]
};
