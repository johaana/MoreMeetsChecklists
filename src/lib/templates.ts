
import type { Checklist } from './types';

export const checklistTemplates: Checklist[] = [
  // 1. Events Checklists (20 total)
  {
    id: 'event_wedding_haldi',
    name: 'Wedding - Haldi Ceremony',
    category: 'Events',
    items: [
      { task: 'Venue setup (flowers, haldi bowl, seating mats)', status: 'pending' },
      { task: 'Bride/groom outfits + backup outfits', status: 'pending' },
      { task: 'Mehendi artist (if combined event)', status: 'pending' },
      { task: 'Snacks & beverages', status: 'pending' },
      { task: 'Photographer booking', status: 'pending' },
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
        task: 'Guest list & RSVP tracking',
        status: 'pending',
      },
      { task: 'Mehndi artists & assistants', status: 'pending' },
      { task: 'Seating, décor, lighting', status: 'pending' },
      { task: 'Music playlist (Bollywood, traditional)', status: 'pending' },
      { task: 'Caterer setup', status: 'pending' },
    ],
  },
  {
    id: 'event_wedding_sangeet',
    name: 'Wedding - Sangeet',
    category: 'Events',
    items: [
      { task: 'Stage & sound system check', status: 'pending' },
      { task: 'Family performance rehearsals', status: 'pending' },
      { task: 'Outfit coordination (bride, groom, family)', status: 'pending' },
      { task: 'DJ/band booking', status: 'pending' },
      { task: 'Alcohol & snacks arrangements', status: 'pending' },
    ],
  },
  {
    id: 'event_wedding_day_hindu',
    name: 'Hindu Wedding Day',
    category: 'Events',
    items: [
        { task: 'Priest / Purohit confirmation', status: 'pending' },
        { task: 'Wedding mandap decoration', status: 'pending' },
        { task: 'Baraat arrangements (music, horse/car)', status: 'pending' },
        { task: 'Wedding garlands & ritual items', status: 'pending' },
        { task: 'Bridal entry coordination', status: 'pending' },
        { task: 'Videography & livestream (for NRIs)', status: 'pending' },
    ]
  },
   {
    id: 'event_wedding_day_christian',
    name: 'Christian Wedding Day',
    category: 'Events',
    items: [
        { task: 'Church booking confirmation', status: 'pending' },
        { task: 'Priest availability check', status: 'pending' },
        { task: 'Bridal gown + tux + bridesmaids/groomsmen outfits', status: 'pending' },
        { task: 'Choir/music team coordination', status: 'pending' },
        { task: 'Wedding cake & catering', status: 'pending' },
        { task: 'Reception hall booking', status: 'pending' },
        { task: 'Return gifts preparation', status: 'pending' },
    ]
  },
   {
    id: 'event_wedding_day_muslim',
    name: 'Muslim Wedding (Nikaah)',
    category: 'Events',
    items: [
        { task: 'Qazi / Maulana booking', status: 'pending' },
        { task: 'Nikah Nama printing', status: 'pending' },
        { task: 'Venue with women/men seating arrangements', status: 'pending' },
        { task: 'Bridal trousseau check', status: 'pending' },
        { task: 'Mehendi & Dholki function planning', status: 'pending' },
        { task: 'Walima arrangements', status: 'pending' },
    ]
  },
   {
    id: 'event_wedding_day_sikh',
    name: 'Sikh Wedding (Anand Karaj)',
    category: 'Events',
    items: [
        { task: 'Gurdwara booking', status: 'pending' },
        { task: 'Langar preparation coordination', status: 'pending' },
        { task: 'Palki Sahib arrangement', status: 'pending' },
        { task: 'Shabad Kirtan performers booking', status: 'pending' },
        { task: 'Dhol for baraat arrangement', status: 'pending' },
    ]
  },
  {
      id: "event_wedding_reception",
      name: "Wedding Reception",
      category: "Events",
      items: [
          { task: "Guest seating chart finalization", status: "pending" },
          { task: "Catering menu finalization", status: "pending" },
          { task: "Couple entry sequence planning", status: "pending" },
          { task: "Thank-you speeches preparation", status: "pending" },
          { task: "Return gifts / souvenirs distribution", status: "pending" },
      ]
  },
  {
    id: 'event_engagement',
    name: 'Engagement Ceremony',
    category: 'Events',
    items: [
      { task: 'Ring exchange planning', status: 'pending' },
      { task: 'Décor planning', status: 'pending' },
      { task: 'Photographers booking', status: 'pending' },
      { task: 'Gift registry setup', status: 'pending' },
    ],
  },
  {
    id: 'event_baby_naming',
    name: 'Baby Naming Ceremony',
    category: 'Events',
    items: [
      { task: 'Priest booking', status: 'pending' },
      { task: 'Baby clothes selection', status: 'pending' },
      { task: 'Silver items purchase', status: 'pending' },
      { task: 'Puja items arrangement', status: 'pending' },
      { task: 'Food menu planning', status: 'pending' },
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
      { task: 'Stage setup', status: 'pending' },
      { task: 'AV testing', status: 'pending' },
      { task: 'Press kits preparation', status: 'pending' },
      { task: 'Influencer outreach', status: 'pending' },
      { task: 'Live demo rehearsal', status: 'pending' },
    ],
  },
  {
    id: 'event_corporate_conference',
    name: 'Corporate Conference Setup',
    category: 'Events',
    items: [
      { task: 'Registration desk setup', status: 'pending' },
      { task: 'Delegate badges preparation', status: 'pending' },
      { task: 'Sponsor booths setup', status: 'pending' },
      { task: 'Speaker green room setup', status: 'pending' },
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
      { task: 'Have lead capture mechanism ready', status: 'pending' },
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
      { task: 'Promote the fest on social media and campus', status: 'pending' },
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
      { task: 'Process advance payments', status: 'pending' },
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
      { task: 'Compare actual spending against estimates', status: 'pending' },
    ],
  },

  // 2. Hospitality Ops Checklists (15 total)
  {
    id: 'hosp_housekeeping_daily',
    name: 'Hotel Housekeeping (Daily)',
    category: 'Hospitality Ops',
    items: [
      { task: 'Front desk: check reservation list, welcome kits ready', status: 'pending' },
      { task: 'Housekeeping: room cleaning, mini-bar refill, laundry requests', status: 'pending' },
      { task: 'Security: CCTV check, fire exits clear', status: 'pending' },
      { task: 'Restaurant: breakfast buffet setup, staff briefing', status: 'pending' },
    ],
    pricing: {
        free: "true",
        premium: ""
    }
  },
  {
    id: 'hosp_housekeeping_weekly',
    name: 'Hotel Housekeeping (Weekly)',
    category: 'Hospitality Ops',
    items: [
      { task: 'Deep cleaning of lobby, elevators, banquet halls', status: 'pending' },
      { task: 'Linen stock audit', status: 'pending' },
      { task: 'Pest control check', status: 'pending' },
      { task: 'Staff roster planning', status: 'pending' },
    ],
  },
    {
    id: 'hosp_housekeeping_monthly',
    name: 'Hotel Housekeeping (Monthly)',
    category: 'Hospitality Ops',
    items: [
      { task: 'Staff training (grooming, service etiquette)', status: 'pending' },
      { task: 'Energy efficiency audit', status: 'pending' },
      { task: 'Kitchen hygiene audit (food storage, expiry checks)', status: 'pending' },
      { task: 'Guest feedback review meeting', status: 'pending' },
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
    ],
  },
    {
    id: 'hosp_restaurant_opening',
    name: 'Restaurant Opening Checklist',
    category: 'Hospitality Ops',
    items: [
        { task: "Kitchen equipment switched on", status: "pending"},
        { task: "Ingredients stocked & checked for expiry", status: "pending"},
        { task: "Dining area cleaned & set up", status: "pending"},
        { task: "POS & billing system check", status: "pending"},
        { task: "Music/ambience ready", status: "pending"},
    ],
  },
    {
    id: 'hosp_restaurant_closing',
    name: 'Restaurant Closing Checklist',
    category: 'Hospitality Ops',
    items: [
        { task: "Cash & sales reconciliation", status: "pending"},
        { task: "Kitchen cleaning & waste disposal", status: "pending"},
        { task: "Leftover food storage log", status: "pending"},
        { task: "Lights & AC off", status: "pending"},
        { task: "Lockdown security check", status: "pending"},
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
    ],
  },
  {
    id: 'hosp_guest_experience',
    name: 'Guest Experience Feedback Checklist',
    category: 'Hospitality Ops',
    items: [
      { task: 'Monitor online reviews', status: 'pending' },
      { task: 'Collect and analyze guest feedback forms', status: 'pending' },
      { task: 'Follow up on negative feedback personally', status: 'pending' },
      { task: 'Share positive feedback with the team', status: 'pending' },
    ],
  },
  {
    id: 'hosp_banquet_setup',
    name: 'Banquet Hall Setup Checklist',
    category: 'Hospitality Ops',
    items: [
      { task: 'Arrange tables and chairs as per floor plan', status: 'pending' },
      { task: 'Set up AV equipment', status: 'pending' },
      { task: 'Lay out linens, cutlery, and glassware', status: 'pending' },
      { task: 'Coordinate with kitchen for buffet setup and timing', status: 'pending' },
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
    ],
  },
  {
    id: 'hosp_pool_safety',
    name: 'Pool Safety & Hygiene',
    category: 'Hospitality Ops',
    items: [
      { task: 'Test water quality (pH, chlorine levels)', status: 'pending' },
      { task: 'Clean pool and surrounding area', status: 'pending' },
      { task: 'Ensure life-saving equipment is accessible', status: 'pending' },
      { task: 'Ensure lifeguard is on duty during operational hours', status: 'pending' },
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
    ],
    pricing: {
        free: "true",
        premium: ""
    }
  },
    {
    id: 'train_restaurant_staff_training',
    name: 'Restaurant Staff Training',
    category: 'Training',
    items: [
      { task: 'Grooming check (uniforms, hygiene)', status: 'pending' },
      { task: 'Greeting & seating practice', status: 'pending' },
      { task: 'Menu knowledge quiz', status: 'pending' },
      { task: 'Fire safety drill', status: 'pending' },
      { task: 'Complaint handling role-play', status: 'pending' },
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
    ],
  },
  {
    id: 'train_front_office',
    name: 'Front Office Training',
    category: 'Training',
    items: [
      { task: 'Mastering the Property Management System (PMS)', status: 'pending' },
      { task: 'Check-in/check-out procedure role-play', status: 'pending' },
      { task: 'Handling different types of reservations', status: 'pending' },
      { task: 'Cash handling and credit card security procedures', status: 'pending' },
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
    ],
  },
  {
    id: 'train_cross_selling_upselling',
    name: 'Cross-selling & Upselling Training',
    category: 'Training',
    items: [
      { task: 'Identifying upselling opportunities', status: 'pending' },
      { task: 'Identifying cross-selling opportunities', status: 'pending' },
      { task: 'Language and techniques for making offers', status: 'pending' },
      { task: 'Product knowledge across all departments', status: 'pending' },
    ],
  },
  {
    id: 'train_fire_safety_evacuation',
    name: 'Fire Safety & Evacuation Training',
    category: 'Training',
    items: [
      { task: 'Identifying fire extinguisher types and uses', status: 'pending' },
      { task: 'Understanding the fire alarm panel', status: 'pending' },
      { task: 'Evacuation routes and assembly points', status: 'pending' },
      { task: 'Procedures for assisting guests with special needs', status: 'pending' },
    ],
  },
  {
    id: 'train_food_hygiene_handling',
    name: 'Food Hygiene & Handling Training',
    category: 'Training',
    items: [
      { task: 'Proper handwashing techniques', status: 'pending' },
      { task: 'Understanding the temperature danger zone', status: 'pending' },
      { task: 'Cross-contamination prevention', status: 'pending' },
      { task: 'Allergen awareness and communication protocols', status: 'pending' },
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
      { task: 'Daily energy usage log', status: 'pending' },
      { task: 'Laundry water recycling system check', status: 'pending' },
      { task: 'Linen reuse policy cards in rooms check', status: 'pending' },
      { task: 'Kitchen oil recycling process check', status: 'pending' },
      { task: 'Plastic-free toiletries check', status: 'pending' },
    ],
    pricing: {
        free: "true",
        premium: ""
    }
  },
    {
    id: 'sustain_restaurant_sustainability',
    name: 'Restaurant Sustainability Checklist',
    category: 'Sustainability',
    items: [
      { task: 'Buy from local farms weekly', status: 'pending' },
      { task: 'Track food wastage per day', status: 'pending' },
      { task: 'Compost setup for kitchen waste', status: 'pending' },
      { task: 'Ban plastic straws / bottles', status: 'pending' },
      { task: 'Menu redesign for seasonal produce', status: 'pending' },
    ],
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
    ],
  },
  {
    id: 'sustain_eco_friendly_event',
    name: 'Eco-friendly Event Checklist',
    category: 'Sustainability',
    items: [
      { task: 'Digital invites instead of paper', status: 'pending' },
      { task: 'Reusable décor (cloth backdrops, LED lights)', status: 'pending' },
      { task: 'Local & seasonal food menu', status: 'pending' },
      { task: 'Waste segregation bins placed visibly', status: 'pending' },
      { task: 'Partner with NGOs for leftover food donation', status: 'pending' },
    ],
  },
  {
    id: 'sustain_carbon_footprint_tracking',
    name: 'Carbon Footprint Tracking',
    category: 'Sustainability',
    items: [
      { task: 'Measure electricity consumption', status: 'pending' },
      { task: 'Track water usage', status: 'pending' },
      { task: 'Calculate emissions from transportation', status: 'pending' },
      { task: 'Monitor waste generation and disposal', status: 'pending' },
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
    ],
  },
  {
    id: 'sustain_sustainable_menu_planning',
    name: 'Sustainable Menu Planning',
    category: 'Sustainability',
    items: [
      { task: 'Prioritize seasonal and locally sourced ingredients', status: 'pending' },
      { task: 'Offer more plant-based options', status: 'pending' },
      { task: 'Minimize food waste through portion control', status: 'pending' },
      { task: 'Choose seafood from sustainable sources', status: 'pending' },
    ],
  },
  {
    id: 'sustain_composting_food_waste',
    name: 'Composting & Food Waste Management',
    category: 'Sustainability',
    items: [
      { task: 'Set up a system for segregating food scraps', status: 'pending' },
      { task: 'Establish a composting site or partner with a service', status: 'pending' },
      { task: 'Train kitchen staff on what can be composted', status: 'pending' },
      { task: 'Track food waste diverted from landfills', status: 'pending' },
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
      { task: 'Share audit results with all departments', status: 'pending' },
    ],
    pricing: {
        free: "",
        premium: "$39 one-time for full sustainability pack"
    }
  },
];
