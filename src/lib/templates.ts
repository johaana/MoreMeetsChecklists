
import type { Checklist } from './types';

// This file is now primarily for reference, as the single-page app focuses on packs.
// The data is still available if we need to build out detailed checklist pages later.
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
];
