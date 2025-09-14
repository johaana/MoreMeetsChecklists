
import type { Checklist } from './types';

export const checklistTemplates: Checklist[] = [
  // 1. Events Checklists (20 total)
  {
    id: 'event_wedding_haldi',
    name: 'Wedding - Haldi Ceremony',
    category: 'Events',
    items: [
      { task: 'Book venue & seating', status: 'pending' },
      { task: 'Arrange turmeric & essentials', status: 'pending' },
      { task: 'Hire photographer', status: 'pending' },
      { task: 'Set up decoration (flowers, yellow theme)', status: 'pending' },
      { task: 'Organize traditional music/dhol', status: 'pending' },
      { task: 'Arrange catering/snacks', status: 'pending' },
      { task: 'Set up guest welcome area', status: 'pending' },
      { task: 'Confirm priest/pandit availability', status: 'pending' },
    ],
    pricing: {
        free: "true",
        premium: ""
    }
  },
  {
    id: 'event_wedding_mehndi',
    name: 'Wedding - Mehndi',
    category: 'Events',
    items: [
      {
        task: 'Hire mehndi artists',
        status: 'pending',
        subtasks: ['Finalize artist for bride', 'Arrange artists for guests', 'Confirm designs & pricing'],
      },
      { task: 'Book DJ/music', status: 'pending' },
      { task: 'Set up seating (low seating with bolsters)', status: 'pending' },
      { task: 'Provide mehndi cones & oils', status: 'pending' },
      { task: 'Plan catering menu (finger foods)', status: 'pending' },
    ],
  },
  {
    id: 'event_wedding_sangeet',
    name: 'Wedding - Sangeet',
    category: 'Events',
    items: [
      { task: 'Stage setup & sound check', status: 'pending' },
      { task: 'Choreography rehearsals', status: 'pending' },
      { task: 'Lighting decoration', status: 'pending' },
      { task: 'Food & beverages', status: 'pending' },
      { task: 'Guest welcome desk', status: 'pending' },
    ],
  },
  {
    id: 'event_wedding_day',
    name: 'Wedding Day',
    category: 'Events',
    items: [
        { task: 'Book mandap & seating', status: 'pending' },
        { task: 'Confirm pandit/priest', status: 'pending' },
        { task: 'Arrange varmala & garlands', status: 'pending' },
        { task: 'Sound system for rituals', status: 'pending' },
        { task: 'Bride/groom entry planning', status: 'pending' },
    ]
  },
  {
      id: "event_wedding_reception",
      name: "Wedding Reception",
      category: "Events",
      items: [
          { task: "Stage decoration", status: "pending" },
          { task: "Buffet arrangement", status: "pending" },
          { task: "Lighting & seating", status: "pending" },
          { task: "Live band/DJ", status: "pending" },
          { task: "Photo booth setup", status: "pending" },
      ]
  },
  {
    id: 'event_engagement',
    name: 'Engagement Ceremony',
    category: 'Events',
    items: [
      { task: 'Book venue', status: 'pending' },
      { task: 'Finalize guest list', status: 'pending' },
      { task: 'Order rings', status: 'pending' },
      { task: 'Hire photographer/videographer', status: 'pending' },
      { task: 'Plan decorations', status: 'pending' },
      { task: 'Arrange catering', status: 'pending' },
      { task: 'Send invitations', status: 'pending' },
    ],
  },
  {
    id: 'event_baby_naming',
    name: 'Baby Naming Ceremony',
    category: 'Events',
    items: [
      { task: 'Choose and finalize baby name', status: 'pending' },
      { task: 'Book priest/officiant', status: 'pending' },
      { task: 'Decorate venue', status: 'pending' },
      { task: 'Arrange for religious rituals/prayers', status: 'pending' },
      { task: 'Plan lunch/dinner menu', status: 'pending' },
      { task: 'Arrange return gifts for guests', status: 'pending' },
    ],
  },
  {
    id: 'event_birthday_party',
    name: 'Birthday Party',
    category: 'Events',
    items: [
      { task: 'Choose a theme', status: 'pending' },
      { task: 'Book venue or plan for home setup', status: 'pending' },
      { task: 'Order cake and desserts', status: 'pending' },
      { task: 'Plan games and entertainment', status: 'pending' },
      { task: 'Arrange for food and drinks', status: 'pending' },
      { task: 'Buy decorations and party supplies', status: 'pending' },
    ],
  },
  {
    id: 'event_anniversary',
    name: 'Anniversary Party',
    category: 'Events',
    items: [
      { task: 'Set a budget', status: 'pending' },
      { task: 'Create guest list and send invitations', status: 'pending' },
      { task: 'Book venue and catering', status: 'pending' },
      { task: 'Plan entertainment (DJ, band, or playlist)', status: 'pending' },
      { task: 'Arrange for a special cake', status: 'pending' },
      { task: 'Prepare a toast or speech', status: 'pending' },
    ],
  },
  {
    id: 'event_product_launch',
    name: 'Product Launch Event',
    category: 'Events',
    items: [
      { task: 'Finalize product demo', status: 'pending' },
      { task: 'Invite media and influencers', status: 'pending' },
      { task: 'Prepare press kits', status: 'pending' },
      { task: 'Set up AV and technical equipment', status: 'pending' },
      { task: 'Plan for Q&A session', status: 'pending' },
      { task: 'Arrange for product samples/giveaways', status: 'pending' },
    ],
  },
  {
    id: 'event_corporate_conference',
    name: 'Corporate Conference Setup',
    category: 'Events',
    items: [
      { task: 'Finalize agenda and speakers', status: 'pending' },
      { task: 'Set up registration desk', status: 'pending' },
      { task: 'Arrange seating and stage setup', status: 'pending' },
      { task: 'Test projectors, screens, and microphones', status: 'pending' },
      { task: 'Coordinate with catering for breaks and lunch', status: 'pending' },
      { task: 'Prepare name badges and conference materials', status: 'pending' },
    ],
  },
  {
    id: 'event_exhibition_booth',
    name: 'Exhibition Booth Setup',
    category: 'Events',
    items: [
      { task: 'Design booth layout', status: 'pending' },
      { task: 'Print banners and marketing materials', status: 'pending' },
      { task: 'Set up product displays', status: 'pending' },
      { task: 'Ensure proper lighting', status: 'pending' },
      { task: 'Train booth staff', status: 'pending' },
      { task: 'Have lead capture mechanism ready (e.g., forms, scanner)', status: 'pending' },
    ],
  },
  {
    id: 'event_award_ceremony',
    name: 'Award Ceremony',
    category: 'Events',
    items: [
      { task: 'Finalize award categories and nominees', status: 'pending' },
      { task: 'Order trophies/plaques', status: 'pending' },
      { task: 'Book a host/emcee', status: 'pending' },
      { task: 'Prepare scripts for presenters', status: 'pending' },
      { task: 'Plan seating arrangement for nominees and guests', status: 'pending' },
      { task: 'Coordinate with AV team for winner announcements', status: 'pending' },
    ],
  },
  {
    id: 'event_music_concert',
    name: 'Music Concert',
    category: 'Events',
    items: [
      { task: 'Book artist and opening acts', status: 'pending' },
      { task: 'Secure venue and all necessary permits', status: 'pending' },
      { task: 'Set up stage, sound, and lighting rigs', status: 'pending' },
      { task: 'Arrange for security and crowd control', status: 'pending' },
      { task: 'Manage ticketing and entry', status: 'pending' },
      { task: 'Set up merchandise stalls', status: 'pending' },
    ],
  },
  {
    id: 'event_college_fest',
    name: 'College Festival',
    category: 'Events',
    items: [
      { task: 'Get college administration permissions', status: 'pending' },
      { task: 'Form student committees for various tasks', status: 'pending' },
      { task: 'Secure sponsorships', status: 'pending' },
      { task: 'Plan and schedule various events and competitions', status: 'pending' },
      { task: 'Promote the fest on social media and campus', status: 'pending' },
      { task: 'Coordinate with security and volunteers', status: 'pending' },
    ],
  },
  {
    id: 'event_religious_ceremony',
    name: 'Religious Ceremony (Pooja/Havan)',
    category: 'Events',
    items: [
      { task: 'Book priest/pandit', status: 'pending' },
      { task: 'Purchase all required pooja materials', status: 'pending' },
      { task: 'Clean and prepare the designated ceremony area', status: 'pending' },
      { task: 'Inform guests of the date and time', status: 'pending' },
      { task: 'Arrange for prasad/food distribution', status: 'pending' },
    ],
  },
  {
    id: 'event_housewarming',
    name: 'Housewarming',
    category: 'Events',
    items: [
      { task: 'Complete any remaining moving-in tasks', status: 'pending' },
      { task: 'Clean and decorate the house', status: 'pending' },
      { task: 'Plan a menu for food and drinks', status: 'pending' },
      { task: 'Create a music playlist', status: 'pending' },
      { task: 'Give guests a tour of the new home', status: 'pending' },
    ],
  },
  {
    id: 'event_farewell_party',
    name: 'Farewell Party',
    category: 'Events',
    items: [
      { task: 'Arrange for a farewell gift', status: 'pending' },
      { task: 'Collect messages from colleagues/friends', status: 'pending' },
      { task: 'Prepare speeches or a presentation', status: 'pending' },
      { task: 'Book a venue or arrange in-office setup', status: 'pending' },
      { task: 'Order a cake and refreshments', status: 'pending' },
    ],
  },
  {
    id: 'event_vendor_management',
    name: 'Vendor Management Master List',
    category: 'Events',
    items: [
      { task: 'Finalize contracts with all vendors', status: 'pending' },
      { task: 'Create a master contact sheet for all vendors', status: 'pending' },
      { task: 'Confirm arrival and setup times with each vendor', status: 'pending' },
      { task: 'Share event schedule and floor plan with vendors', status: 'pending' },
      { task: 'Process advance payments', status: 'pending' },
      { task: 'Plan for vendor meals and breaks', status: 'pending' },
      { task: 'Schedule final payments post-event', status: 'pending' },
    ],
    pricing: {
        free: "",
        premium: "$29 one-time for full event pack"
    }
  },
  {
    id: 'event_budget_tracker',
    name: 'Event Budget Tracker',
    category: 'Events',
    items: [
      { task: 'Estimate total budget', status: 'pending' },
      { task: 'Track venue costs', status: 'pending' },
      { task: 'Log catering expenses', status: 'pending' },
      { task: 'Track decor and rental costs', status: 'pending' },
      { task: 'Log entertainment and vendor fees', status: 'pending' },
      { task: 'Keep a record of all miscellaneous expenses', status: 'pending' },
      { task: 'Compare actual spending against estimates', status: 'pending' },
    ],
  },

  // 2. Hospitality Ops Checklists (15 total)
  {
    id: 'hosp_housekeeping_daily',
    name: 'Hotel Housekeeping (Daily)',
    category: 'Hospitality Ops',
    items: [
      { task: 'Change bedsheets & pillow covers', status: 'pending' },
      { task: 'Clean and sanitize bathrooms', status: 'pending' },
      { task: 'Dust all surfaces', status: 'pending' },
      { task: 'Vacuum carpet / Mop floor', status: 'pending' },
      { task: 'Restock toiletries and towels', status: 'pending' },
      { task: 'Empty trash bins', status: 'pending' },
    ],
    pricing: {
        free: "true",
        premium: ""
    }
  },
  {
    id: 'hosp_housekeeping_deep_clean',
    name: 'Hotel Housekeeping (Deep Clean)',
    category: 'Hospitality Ops',
    items: [
      { task: 'Shampoo carpets and upholstery', status: 'pending' },
      { task: 'Wash windows and mirrors', status: 'pending' },
      { task: 'Clean inside all closets and drawers', status: 'pending' },
      { task: 'Disinfect light switches, remote controls, and door handles', status: 'pending' },
      { task: 'Descale bathroom fixtures', status: 'pending' },
    ],
  },
  {
    id: 'hosp_maintenance_checklist',
    name: 'Hotel Maintenance Checklist',
    category: 'Hospitality Ops',
    items: [
      { task: 'Check AC filters', status: 'pending' },
      { task: 'Inspect plumbing for leaks', status: 'pending' },
      { task: 'Test all lighting fixtures', status: 'pending' },
      { task: 'Check fire extinguishers and smoke detectors', status: 'pending' },
      { task: 'Inspect elevators for proper functioning', status: 'pending' },
    ],
  },
  {
    id: 'hosp_front_office_sop',
    name: 'Hotel Front Office SOP',
    category: 'Hospitality Ops',
    items: [
      { task: 'Check reservation system for new bookings', status: 'pending' },
      { task: 'Prepare for VIP arrivals', status: 'pending' },
      { task: 'Handle check-ins and check-outs efficiently', status: 'pending' },
      { task: 'Answer phone calls and emails promptly', status: 'pending' },
      { task: 'Reconcile cash and credit card transactions', status: 'pending' },
    ],
  },
  {
    id: 'hosp_food_safety_audit',
    name: 'Restaurant Food Safety Audit',
    category: 'Hospitality Ops',
    items: [
      { task: 'Check temperatures of refrigerators and freezers', status: 'pending' },
      { task: 'Verify proper food labeling and dating', status: 'pending' },
      { task: 'Ensure separation of raw and cooked foods', status: 'pending' },
      { task: 'Check for signs of pests', status: 'pending' },
      { task: 'Confirm staff are following hygiene protocols', status: 'pending' },
    ],
  },
  {
    id: 'hosp_restaurant_hygiene',
    name: 'Restaurant Hygiene Checklist',
    category: 'Hospitality Ops',
    items: [
        { task: "Handwashing stations functional", status: "pending"},
        { task: "Gloves, masks, caps available", status: "pending"},
        { task: "Food storage at correct temperatures", status: "pending"},
        { task: "Raw vs cooked food separation", status: "pending"},
        { task: "Expiry dates checked", status: "pending"},
        { task: "Surfaces sanitized hourly", status: "pending"},
        { task: "Pest control log updated", status: "pending"}
    ],
  },
  {
    id: 'hosp_inventory_control',
    name: 'F&B Stock & Inventory Control',
    category: 'Hospitality Ops',
    items: [
      { task: 'Conduct daily/weekly stock count', status: 'pending' },
      { task: 'Place orders with suppliers', status: 'pending' },
      { task: 'Receive and inspect deliveries', status: 'pending' },
      { task: 'Update inventory management system', status: 'pending' },
      { task: 'Monitor for spoilage and waste', status: 'pending' },
    ],
  },
  {
    id: 'hosp_guest_experience',
    name: 'Guest Experience Feedback Checklist',
    category: 'Hospitality Ops',
    items: [
      { task: 'Monitor online reviews (Google, TripAdvisor, etc.)', status: 'pending' },
      { task: 'Collect and analyze guest feedback forms', status: 'pending' },
      { task: 'Follow up on negative feedback personally', status: 'pending' },
      { task: 'Share positive feedback with the team', status: 'pending' },
      { task: 'Identify trends and areas for improvement', status: 'pending' },
    ],
  },
  {
    id: 'hosp_banquet_setup',
    name: 'Banquet Hall Setup Checklist',
    category: 'Hospitality Ops',
    items: [
      { task: 'Arrange tables and chairs as per floor plan', status: 'pending' },
      { task: 'Set up AV equipment (projector, microphones)', status: 'pending' },
      { task: 'Lay out linens, cutlery, and glassware', status: 'pending' },
      { task: 'Coordinate with kitchen for buffet setup and timing', status: 'pending' },
      { task: 'Check lighting and temperature', status: 'pending' },
    ],
  },
  {
    id: 'hosp_spa_operations',
    name: 'Spa Operations Checklist',
    category: 'Hospitality Ops',
    items: [
      { task: 'Check booking schedule for the day', status: 'pending' },
      { task: 'Ensure all treatment rooms are clean and stocked', status: 'pending' },
      { task: 'Maintain hygiene of steam, sauna, and jacuzzi areas', status: 'pending' },
      { task: 'Check inventory of oils, lotions, and towels', status: 'pending' },
      { task: 'Ensure therapists are aware of their appointments', status: 'pending' },
    ],
  },
  {
    id: 'hosp_pool_safety',
    name: 'Pool Safety & Hygiene',
    category: 'Hospitality Ops',
    items: [
      { task: 'Test water quality (pH, chlorine levels)', status: 'pending' },
      { task: 'Clean pool and surrounding area', status: 'pending' },
      { task: 'Ensure life-saving equipment is accessible and in good condition', status: 'pending' },
      { task: 'Check that safety signs are clearly visible', status: 'pending' },
      { task: 'Ensure lifeguard is on duty during operational hours', status: 'pending' },
    ],
  },
  {
    id: 'hosp_kitchen_equipment_maintenance',
    name: 'Kitchen Equipment Maintenance',
    category: 'Hospitality Ops',
    items: [
      { task: 'Clean ovens, grills, and fryers daily', status: 'pending' },
      { task: 'Check and clean exhaust hoods and filters weekly', status: 'pending' },
      { task: 'Calibrate thermometers monthly', status: 'pending' },
      { task: 'Schedule professional servicing for major equipment annually', status: 'pending' },
      { task: 'Keep a log of all maintenance activities', status: 'pending' },
    ],
  },
  {
    id: 'hosp_night_audit',
    name: 'Night Audit Checklist',
    category: 'Hospitality Ops',
    items: [
      { task: 'Post all room charges and taxes', status: 'pending' },
      { task: 'Reconcile all departmental revenues', status: 'pending' },
      { task: 'Process credit card settlements', status: 'pending' },
      { task: 'Generate end-of-day reports', status: 'pending' },
      { task: 'Prepare for the next business day (e.g., check-in reports)', status: 'pending' },
    ],
  },
  {
    id: 'hosp_restaurant_opening_closing',
    name: 'Restaurant Opening & Closing Checklist',
    category: 'Hospitality Ops',
    items: [
      { task: 'Opening: Set up tables and stations', status: 'pending' },
      { task: 'Opening: Brief staff on specials and reservations', status: 'pending' },
      { task: 'Closing: Clean all areas and equipment', status: 'pending' },
      { task: 'Closing: Reconcile cash and sales reports', status: 'pending' },
      { task: 'Closing: Secure premises and set alarm', status: 'pending' },
    ],
  },
  {
    id: 'hosp_emergency_response_sop',
    name: 'Emergency Response SOP',
    category: 'Hospitality Ops',
    items: [
      { task: 'Review evacuation routes and assembly points', status: 'pending' },
      { task: 'Check fire alarm and sprinkler system functionality', status: 'pending' },
      { task: 'Ensure first aid kits are fully stocked', status: 'pending' },
      { task: 'Have emergency contact numbers clearly displayed', status: 'pending' },
      { task: 'Conduct regular drills for staff', status: 'pending' },
    ],
    pricing: {
        free: "",
        premium: "$19/month for full hospitality pack"
    }
  },

  // 3. Training Checklists (10 total)
  {
    id: 'train_hotel_staff_orientation',
    name: 'Hotel Staff Orientation',
    category: 'Training',
    items: [
      { task: 'Introduction to company history, vision, and values', status: 'pending' },
      { task: 'Tour of the property and introduction to department heads', status: 'pending' },
      { task: 'Review of employee handbook and HR policies', status: 'pending' },
      { task: 'Uniform issuance and grooming standards overview', status: 'pending' },
      { task: 'Basic safety and security procedures', status: 'pending' },
    ],
    pricing: {
        free: "true",
        premium: ""
    }
  },
  {
    id: 'train_restaurant_wait_staff',
    name: 'Restaurant Wait Staff Training',
    category: 'Training',
    items: [
      { task: 'Menu knowledge test (ingredients, allergens)', status: 'pending' },
      { task: 'Steps of service role-play (from greeting to farewell)', status: 'pending' },
      { task: 'POS system operation practice', status: 'pending' },
      { task: 'Upselling and recommendation techniques', status: 'pending' },
      { task: 'Handling guest complaints gracefully', status: 'pending' },
    ],
  },
  {
    id: 'train_chef_kitchen_staff',
    name: 'Chef/Kitchen Staff Training',
    category: 'Training',
    items: [
      { task: 'Knife skills and safety training', status: 'pending' },
      { task: 'Station setup and mise en place standards', status: 'pending' },
      { task: 'Recipe and plating standards for all menu items', status: 'pending' },
      { task: 'Food safety and HACCP principles', status: 'pending' },
      { task: 'Kitchen cleaning and equipment maintenance procedures', status: 'pending' },
    ],
  },
  {
    id: 'train_housekeeping_staff',
    name: 'Housekeeping Staff Training',
    category: 'Training',
    items: [
      { task: 'Standard room cleaning sequence (top to bottom)', status: 'pending' },
      { task: 'Proper use of cleaning chemicals and equipment', status: 'pending' },
      { task: 'Bed making and linen folding techniques', status: 'pending' },
      { task: 'Handling guest laundry and lost & found items', status: 'pending' },
      { task: 'Guest interaction and privacy protocols', status: 'pending' },
    ],
  },
  {
    id: 'train_front_office',
    name: 'Front Office Training',
    category: 'Training',
    items: [
      { task: 'Mastering the Property Management System (PMS)', status: 'pending' },
      { task: 'Check-in/check-out procedure role-play', status: 'pending' },
      { task: 'Handling different types of reservations (corporate, group, OTA)', status: 'pending' },
      { task: 'Cash handling and credit card security procedures', status: 'pending' },
      { task: 'Concierge skills and local area knowledge', status: 'pending' },
    ],
  },
  {
    id: 'train_guest_complaint_handling',
    name: 'Guest Complaint Handling Training',
    category: 'Training',
    items: [
      { task: 'L.A.T.T.E. method (Listen, Acknowledge, Take Action, Thank, Explain)', status: 'pending' },
      { task: 'Role-playing common complaint scenarios', status: 'pending' },
      { task: 'Empowerment levels for service recovery', status: 'pending' },
      { task: 'Documentation and follow-up procedures', status: 'pending' },
      { task: 'Knowing when to escalate to a manager', status: 'pending' },
    ],
  },
  {
    id: 'train_cross_selling_upselling',
    name: 'Cross-selling & Upselling Training',
    category: 'Training',
    items: [
      { task: 'Identifying upselling opportunities (e.g., room upgrades, packages)', status: 'pending' },
      { task: 'Identifying cross-selling opportunities (e.g., spa, restaurant)', status: 'pending' },
      { task: 'Language and techniques for making offers', status: 'pending' },
      { task: 'Product knowledge across all departments', status: 'pending' },
      { task: 'Tracking and incentive programs', status: 'pending' },
    ],
  },
  {
    id: 'train_fire_safety_evacuation',
    name: 'Fire Safety & Evacuation Training',
    category: 'Training',
    items: [
      { task: 'Identifying fire extinguisher types and uses (P.A.S.S. method)', status: 'pending' },
      { task: 'Understanding the fire alarm panel', status: 'pending' },
      { task: 'Evacuation routes and assembly points from different areas', status: 'pending' },
      { task: 'Procedures for assisting guests with special needs', status: 'pending' },
      { task: 'Annual fire drill participation and review', status: 'pending' },
    ],
  },
  {
    id: 'train_food_hygiene_handling',
    name: 'Food Hygiene & Handling Training',
    category: 'Training',
    items: [
      { task: 'Proper handwashing techniques', status: 'pending' },
      { task: 'Understanding the temperature danger zone', status: 'pending' },
      { task: 'Cross-contamination prevention (color-coded boards)', status: 'pending' },
      { task: 'Allergen awareness and communication protocols', status: 'pending' },
      { task: 'Receiving and storage procedures for food supplies', status: 'pending' },
    ],
  },
  {
    id: 'train_leadership_management',
    name: 'Leadership & Team Management Training',
    category: 'Training',
    items: [
      { task: 'Effective communication and feedback delivery', status: 'pending' },
      { task: 'Delegation and empowerment techniques', status: 'pending' },
      { task: 'Conflict resolution and mediation skills', status: 'pending' },
      { task: 'Performance management and appraisal process', status: 'pending' },
      { task: 'Time management and prioritization for managers', status: 'pending' },
    ],
    pricing: {
        free: "",
        premium: "$59 one-time for full training pack"
    }
  },

  // 4. Sustainability Checklists (10 total)
  {
    id: 'sustain_energy_saving',
    name: 'Hotel Energy Saving Checklist',
    category: 'Sustainability',
    items: [
      { task: 'Switch to 100% LED lighting', status: 'pending' },
      { task: 'Install motion sensors for lights in common areas', status: 'pending' },
      { task: 'Perform regular maintenance on HVAC systems', status: 'pending' },
      { task: 'Use energy-efficient appliances', status: 'pending' },
      { task: 'Track and analyze monthly energy consumption', status: 'pending' },
    ],
    pricing: {
        free: "true",
        premium: ""
    }
  },
  {
    id: 'sustain_water_conservation',
    name: 'Water Conservation Checklist',
    category: 'Sustainability',
    items: [
      { task: 'Install low-flow fixtures in bathrooms and kitchens', status: 'pending' },
      { task: 'Implement a linen and towel reuse program for guests', status: 'pending' },
      { task: 'Check for and repair any water leaks regularly', status: 'pending' },
      { task: 'Use drought-resistant plants for landscaping', status: 'pending' },
      { task: 'Harvest rainwater for non-potable uses', status: 'pending' },
    ],
  },
  {
    id: 'sustain_waste_management',
    name: 'Waste Segregation & Recycling',
    category: 'Sustainability',
    items: [
      { task: 'Set up clearly labeled bins for different types of waste', status: 'pending' },
      { task: 'Train staff on proper waste segregation', status: 'pending' },
      { task: 'Partner with a reliable recycling vendor', status: 'pending' },
      { task: 'Compost food waste', status: 'pending' },
      { task: 'Minimize use of single-use plastics', status: 'pending' },
    ],
  },
  {
    id: 'sustain_eco_friendly_event',
    name: 'Eco-friendly Event Checklist',
    category: 'Sustainability',
    items: [
      { task: 'Choose a venue with green certifications', status: 'pending' },
      { task: 'Use digital invitations instead of paper', status: 'pending' },
      { task: 'Source food from local and sustainable suppliers', status: 'pending' },
      { task: 'Avoid single-use plastics for catering', status: 'pending' },
      { task: 'Arrange for waste segregation and recycling at the event', status: 'pending' },
    ],
  },
  {
    id: 'sustain_carbon_footprint_tracking',
    name: 'Carbon Footprint Tracking',
    category: 'Sustainability',
    items: [
      { task: 'Measure electricity consumption', status: 'pending' },
      { task: 'Track water usage', status: 'pending' },
      { task: 'Calculate emissions from transportation (company vehicles)', status: 'pending' },
      { task: 'Monitor waste generation and disposal', status: 'pending' },
      { task: 'Set reduction targets and review progress quarterly', status: 'pending' },
    ],
  },
  {
    id: 'sustain_green_procurement',
    name: 'Green Procurement Checklist',
    category: 'Sustainability',
    items: [
      { task: 'Prioritize vendors with sustainable practices', status: 'pending' },
      { task: 'Purchase products made from recycled materials', status: 'pending' },
      { task: 'Choose energy-efficient electronics and appliances', status: 'pending' },
      { task: 'Buy in bulk to reduce packaging waste', status: 'pending' },
      { task: 'Source from local suppliers to reduce transportation emissions', status: 'pending' },
    ],
  },
  {
    id: 'sustain_sustainable_menu_planning',
    name: 'Sustainable Menu Planning',
    category: 'Sustainability',
    items: [
      { task: 'Prioritize seasonal and locally sourced ingredients', status: 'pending' },
      { task: 'Offer more plant-based options', status: 'pending' },
      { task: 'Minimize food waste through portion control and creative use of leftovers', status: 'pending' },
      { task: 'Choose seafood from sustainable sources (e.g., MSC certified)', status: 'pending' },
      { task: 'Communicate your sustainable sourcing to guests', status: 'pending' },
    ],
  },
  {
    id: 'sustain_composting_food_waste',
    name: 'Composting & Food Waste Management',
    category: 'Sustainability',
    items: [
      { task: 'Set up a system for segregating food scraps in the kitchen', status: 'pending' },
      { task: 'Establish a composting site or partner with a composting service', status: 'pending' },
      { task: 'Train kitchen staff on what can and cannot be composted', status: 'pending' },
      { task: 'Track the amount of food waste diverted from landfills', status: 'pending' },
      { task: 'Use compost for on-site gardens or offer to the community', status: 'pending' },
    ],
  },
  {
    id: 'sustain_guest_awareness_program',
    name: 'Guest Awareness Sustainability Program',
    category: 'Sustainability',
    items: [
      { task: 'Create in-room signage about water and energy saving options', status: 'pending' },
      { task: 'Highlight sustainable practices on the hotel website and social media', status: 'pending' },
      { task: 'Offer incentives for guests who participate in green initiatives', status: 'pending' },
      { task: 'Inform guests about local eco-tourism activities', status: 'pending' },
      { task: 'Collect guest feedback on sustainability efforts', status: 'pending' },
    ],
  },
  {
    id: 'sustain_monthly_eco_audit',
    name: 'Monthly Eco-Audit Report',
    category: 'Sustainability',
    items: [
      { task: 'Review energy and water consumption data', status: 'pending' },
      { task: 'Assess waste and recycling volumes', status: 'pending' },
      { task: 'Check compliance with green procurement policies', status: 'pending' },
      { task: 'Identify areas for improvement', status: 'pending' },
      { task: 'Share audit results with all departments', status: 'pending' },
    ],
    pricing: {
        free: "",
        premium: "$39 one-time for full sustainability pack"
    }
  },
];
