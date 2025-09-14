
import type { Checklist } from './types';

export const checklistTemplates: Checklist[] = [
  // == FREE (B2C) CHECKLISTS ==
  {
    id: 'wedding_haldi',
    category: 'Events',
    name: 'Wedding Haldi Ceremony',
    visibility: 'free',
    importance: 'Ensures traditional rituals and guest arrangements are not missed during Haldi.',
    items: [
      'Arrange haldi paste and bowls',
      'Set up seating for bride/groom',
      'Decorate with yellow flowers/drapes',
      'Organize music & dhol',
      'Prepare simple outfits for rituals',
      'Photography arrangements',
      'Arrange towels and water for cleanup'
    ]
  },
  {
    id: 'wedding_mehndi',
    category: 'Events',
    name: 'Wedding Mehndi Ceremony',
    visibility: 'free',
    importance: 'Smooth flow of functions and proper guest engagement for Mehndi celebration.',
    items: [
      'Book mehndi artist(s)',
      'Prepare comfortable seating for bride',
      'Organize lighting and music',
      'Arrange snacks & drinks',
      'Prepare guest mehndi cones/kits',
      'Finalize decorations (e.g., drapes, cushions)'
    ]
  },
  {
    id: 'birthday_party',
    category: 'Events',
    name: 'Kids Birthday Party',
    visibility: 'free',
    importance: 'Ensures a fun and well-organized party for a child\'s special day.',
    items: [
        'Choose a theme',
        'Send out invitations (digital/physical)',
        'Order birthday cake & candles',
        'Arrange food and drinks for kids and adults',
        'Plan games & activities',
        'Arrange for return gifts/goodie bags'
    ]
  },
  {
    id: 'housewarming_party',
    category: 'Events',
    name: 'Housewarming Party',
    visibility: 'free',
    importance: 'Helps new homeowners celebrate their new space with friends and family smoothly.',
    items: [
      'Set a date and create a guest list',
      'Send out invitations with the new address',
      'Plan a simple menu (e.g., finger foods, BBQ)',
      'Organize drinks and glassware',
      'Set up a music playlist or system',
      'Arrange a small tour of the house'
    ]
  },

  // == PAID (B2B) CHECKLISTS ==

  // Hospitality
  {
    id: 'hotel_daily_cleaning',
    category: 'Hospitality',
    name: 'Hotel Daily Room Cleaning',
    visibility: 'paid',
    premiumPack: 'Hospitality Excellence Suite',
    importance: 'Maintains hygiene standards, ensures guest satisfaction, and avoids negative reviews.',
    items: [
      'Change bed linens & make bed to standard',
      'Clean bathroom, disinfect toilet, and wipe mirrors',
      'Replenish all toiletries (soap, shampoo, etc.)',
      'Replace used towels',
      'Vacuum, dust all surfaces, and mop floors',
      'Restock mini-bar and coffee/tea station',
      'Empty all trash bins',
      'Log room as cleaned in the Property Management System (PMS)'
    ]
  },
  {
    id: 'restaurant_opening',
    category: 'Hospitality',
    name: 'Restaurant Opening',
    visibility: 'paid',
    premiumPack: 'Hospitality Excellence Suite',
    importance: 'Ensures the restaurant is perfectly prepared for service, preventing delays and ensuring a quality guest experience.',
    items: [
      'Turn on all lights, signage, and music',
      'Check reservation system for bookings and special requests',
      'Set all tables with clean linens, cutlery, and glassware',
      'Brief front-of-house staff on daily specials and 86\'d items',
      'Check cleanliness of restrooms and restock supplies',
      'Verify Point of Sale (POS) system is online and functioning',
      'Ensure kitchen is prepped for first orders'
    ]
  },
  {
    id: 'restaurant_closing',
    category: 'Hospitality',
    name: 'Restaurant Closing',
    visibility: 'paid',
    premiumPack: 'Hospitality Excellence Suite',
    importance: 'Ensures the restaurant is properly shut down, secure, and ready for the next day.',
    items: [
      'Complete end-of-day financial reconciliation (cash, credit cards)',
      'Deep clean all kitchen surfaces and equipment',
      'Take inventory of key perishable goods',
      'Ensure all gas lines are off and equipment is powered down',
      'Clean and sanitize all dining areas and restrooms',
      'Set security alarm and lock all entrances'
    ]
  },

  // Training
  {
    id: 'staff_training_hotel',
    category: 'Training',
    name: 'Hotel New Staff Onboarding',
    visibility: 'paid',
    premiumPack: 'Hospitality Excellence Suite',
    importance: 'Helps onboard new staff quickly while maintaining consistent service quality.',
    items: [
      'Complete HR paperwork and issue uniform',
      'Conduct a full tour of the property',
      'Train on Property Management System (PMS)',
      'Review brand standards and customer service protocols',
      'Provide safety & emergency evacuation training',
      'Schedule one week of shadowing a senior staff member'
    ]
  },

  // Sustainability
  {
    id: 'sustainability_hotel',
    category: 'Sustainability',
    name: 'Hotel Sustainability Audit',
    visibility: 'paid',
    premiumPack: 'Sustainability Starter Kit',
    importance: 'Helps hotels comply with eco-friendly practices, reduce costs, and attract conscious guests.',
    items: [
      'Conduct weekly energy audit of all departments',
      'Verify that all lighting is high-efficiency (LED)',
      'Check for and report any water leaks',
      'Ensure recycling and composting bins are correctly used',
      'Audit single-use plastic usage in rooms and restaurants',
      'Log carbon footprint data for monthly review'
    ]
  },

  // Airport
  {
    id: 'airport_runway_inspection',
    category: 'Airport',
    name: 'Airport Daily Runway Inspection',
    visibility: 'paid',
    premiumPack: 'Airport Operations Pack',
    importance: 'Critical for aviation safety and compliance with regulatory bodies like FAA/EASA.',
    items: [
      'Check for Foreign Object Debris (FOD)',
      'Verify runway and taxiway lighting systems are operational',
      'Inspect runway surface for cracks or damage',
      'Confirm markings (e.g., numbers, centerlines) are visible',
      'Check for wildlife presence near the runway',
      'Log inspection completion in the airport\'s official logbook'
    ]
  },

  // Manufacturing
  {
    id: 'manufacturing_safety',
    category: 'Manufacturing',
    name: 'Manufacturing Plant Safety',
    visibility: 'paid',
    premiumPack: 'Manufacturing & Compliance Pack',
    importance: 'Prevents workplace accidents and ensures compliance with OSHA and other safety regulations.',
    items: [
      'Check that all fire extinguishers are accessible and charged',
      'Verify all employees are using required Personal Protective Equipment (PPE)',
      'Inspect machine guards to ensure they are in place and functional',
      'Confirm emergency exits and pathways are clear of obstructions',
      'Conduct daily pre-shift safety briefing',
      'Ensure spill kits are stocked and accessible'
    ]
  },

  // Security
  {
    id: 'security_guard_patrol',
    category: 'Security',
    name: 'Security Guard Hourly Patrol',
    visibility: 'paid',
    premiumPack: 'Security & Compliance Pack',
    importance: 'Ensures regular security monitoring and reduces risks of theft, vandalism, or intrusion.',
    items: [
      'Inspect all designated entry/exit points',
      'Check perimeter fencing for breaches',
      'Verify all CCTV cameras are operational and recording',
      'Patrol parking areas and sensitive zones',
      'Check that all secure doors are properly locked',
      'Log patrol start and end times, noting any incidents'
    ]
  },

  // Compliance
  {
    id: 'compliance_fire_safety',
    category: 'Compliance',
    name: 'Workplace Fire Safety Compliance',
    visibility: 'paid',
    premiumPack: 'Security & Compliance Pack',
    importance: 'Mandatory for business licenses, insurance, and reduces the risk of fire-related incidents.',
    items: [
      'Inspect and test all fire alarms monthly',
      'Test sprinkler system functionality quarterly',
      'Ensure all fire exits are clearly marked and unobstructed',
      'Check that all fire extinguishers are inspected and tagged annually',
      'Conduct and log a full evacuation drill semi-annually',
      'Verify emergency lighting is operational'
    ]
  }
];
