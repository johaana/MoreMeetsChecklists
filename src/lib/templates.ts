
import type { Checklist } from './types';

export const checklistTemplates: Checklist[] = [
  // == PREMIUM (B2B & Detailed Wedding) CHECKLISTS ==

  // Wedding Pack
  {
    id: 'wedding_haldi',
    category: 'Events',
    name: 'Wedding - Haldi Ceremony',
    visibility: 'paid',
    premiumPack: 'The Ultimate Wedding Planner Pack',
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
    name: 'Wedding - Mehndi Night',
    visibility: 'paid',
    premiumPack: 'The Ultimate Wedding Planner Pack',
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
    id: 'wedding_sangeet_premium',
    category: 'Events',
    name: 'Wedding - Sangeet',
    visibility: 'paid',
    premiumPack: 'The Ultimate Wedding Planner Pack',
    importance: 'A vibrant celebration of music and dance before the wedding.',
    items: [
      'Book venue and arrange for a large dance floor',
      'Hire a choreographer for family performances',
      'Finalize a playlist with a DJ or live band',
      'Arrange for professional stage lighting and sound',
      'Plan a detailed schedule of performances',
      'Organize a special anchor or MC for the evening',
      'Set up a photo booth with fun props'
    ]
  },
  {
    id: 'south_indian_wedding_premium',
    category: 'Events',
    name: 'South Indian Wedding',
    visibility: 'paid',
    premiumPack: 'The Ultimate Wedding Planner Pack',
    importance: 'Covers all the unique rituals of a traditional South Indian wedding.',
    items: [
      'Arrange for \'Kashi Yatra\' items (umbrella, walking stick)',
      'Set up the \'Oonjal\' (swing) and decorate it',
      'Prepare the \'Mangalsutra\' and \'Koorai\' saree',
      'Coordinate the \'Sapthapadi\' (seven steps) ritual',
      'Organize the traditional plantain leaf feast',
      'Book Nadaswaram and Thavil musicians'
    ]
  },
   {
    id: 'sikh_wedding_premium',
    category: 'Events',
    name: 'Sikh Wedding (Anand Karaj)',
    visibility: 'paid',
    premiumPack: 'The Ultimate Wedding Planner Pack',
    importance: 'Ensures all aspects of the Anand Karaj ceremony at the Gurdwara are respected and organized.',
    items: [
        'Confirm booking with the Gurdwara',
        'Arrange for Palki for Guru Granth Sahib Ji',
        'Organize head coverings for all guests',
        'Arrange for Karah Prasad',
        'Coordinate the Laavan Phere timings',
        'Organize Langar (community meal) post-ceremony'
    ]
  },
  {
    id: 'destination_wedding',
    category: 'Events',
    name: 'Destination Wedding Planning',
    visibility: 'paid',
    premiumPack: 'The Ultimate Wedding Planner Pack',
    importance: 'Manages the unique complexities of a wedding away from home.',
    items: [
        'Select and book destination/venue',
        'Arrange travel and accommodation for guests',
        'Hire local vendors (planner, photographer, etc.)',
        'Plan pre-wedding events and local activities',
        'Understand local marriage legalities',
        'Communicate travel details clearly to all guests'
    ]
  },

  // Hospitality Pack
  {
    id: 'hotel_daily_housekeeping',
    category: 'Hospitality',
    name: 'Hotel Daily Housekeeping',
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
    id: 'restaurant_daily_opening',
    category: 'Hospitality',
    name: 'Restaurant Daily Opening',
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
    id: 'restaurant_daily_closing',
    category: 'Hospitality',
    name: 'Restaurant Daily Closing',
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
  {
    id: 'catering_event_management',
    category: 'Hospitality',
    name: 'Catering Event Management',
    visibility: 'paid',
    premiumPack: 'Hospitality Excellence Suite',
    importance: 'Critical for flawless off-site food and beverage service.',
    items: [
        'Finalize menu with client and confirm dietary restrictions',
        'Arrange logistics: transport, equipment, and staff',
        'Conduct a site visit to plan setup (kitchen, buffet)',
        'Ensure all food safety and handling permits are in order',
        'Brief serving staff on menu and service standards',
        'Plan for waste disposal and site cleanup post-event'
    ]
  },
  {
    id: 'hotel_staff_onboarding',
    category: 'Training',
    name: 'New Hotel Staff Onboarding',
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

  // Sustainability Pack
  {
    id: 'hotel_energy_efficiency',
    category: 'Sustainability',
    name: 'Hotel Energy Efficiency Audit',
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
  
  // Corporate & Startup Launchkit
   {
    id: 'product_launch_event',
    category: 'Events',
    name: 'Product Launch Event',
    visibility: 'paid',
    premiumPack: 'Corporate & Startup Launchkit',
    importance: 'Critical for creating market buzz and making a strong first impression.',
    items: [
      'Finalize product messaging and USP',
      'Book venue and arrange AV equipment',
      'Send invites to media and influencers',
      'Prepare product demo stations',
      'Plan event flow and speaker schedule',
      'Arrange for event photography and videography'
    ]
  },
  {
    id: 'corporate_awards_night',
    category: 'Events',
    name: 'Corporate Awards Night',
    visibility: 'paid',
    premiumPack: 'Corporate & Startup Launchkit',
    importance: 'Recognizes employee achievement and boosts company morale.',
    items: [
        'Finalize award categories and nominee list',
        'Procure trophies and certificates',
        'Book a formal venue and catering',
        'Hire an MC and arrange for entertainment',
        'Prepare presentations for each award',
        'Coordinate photography and live streaming'
    ]
  },
  {
    id: 'major_award_show_production',
    category: 'Events',
    name: 'Major Award Show Production',
    visibility: 'paid',
    premiumPack: 'Corporate & Startup Launchkit',
    importance: 'Manages the immense complexity of a large-scale, televised awards ceremony.',
    items: [
        'Coordinate with broadcast partner on technical requirements',
        'Manage celebrity arrivals and red carpet logistics',
        'Run detailed rehearsals with presenters and performers',
        'Secure all necessary permits and security clearances',
        'Manage backstage area: green rooms, hair & makeup',
        'Plan post-show press conferences'
    ]
  },
   {
    id: 'startup_launch_party',
    category: 'Events',
    name: 'Startup Launch Party',
    visibility: 'free',
    importance: 'Celebrates a new venture and helps in networking with investors and early adopters.',
    items: [
        'Set a budget and guest list',
        'Choose a theme and venue',
        'Send out digital invitations',
        'Arrange for catering and drinks',
        'Plan a short founder\'s speech or presentation',
        'Organize some light entertainment or music'
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
  }
];
