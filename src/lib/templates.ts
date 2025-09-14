import type { Checklist } from './types';

export const checklistTemplates: Checklist[] = [
  // =================================================
  // 1. Events Checklists - FREE
  // =================================================
  {
    id: 'event-wedding-reception-free',
    name: 'Wedding Reception',
    category: 'Events',
    subcategory: 'Weddings',
    premium: false,
    tasks: [
      { task: 'Finalize Guest List & Seating Chart', status: 'pending', subtasks: ['Get final RSVPs', 'Assign table numbers', 'Create physical seating chart display'] },
      { task: 'Confirm Catering & Menu', status: 'pending', subtasks: ['Final meal counts to caterer', 'Confirm dietary restrictions', 'Finalize beverage selection and bar service'] },
      { task: 'Book Band/DJ & Finalize Playlist', status: 'completed', subtasks: ['Send do-not-play list', 'Confirm first dance song', 'Confirm final dance song'] },
      { task: 'Coordinate with Photographer/Videographer', status: 'in-progress', subtasks: ['Provide must-have shot list', 'Confirm timeline for arrivals and key moments', 'Share venue photo restrictions'] },
      { task: 'Arrange for Wedding Cake', status: 'completed', subtasks: ['Confirm delivery time and location at venue', 'Arrange for cake cutting utensils', 'Designate a person to save the top tier'] },
    ],
  },
  {
    id: 'event-startup-launch-party-free',
    name: 'Startup Launch Party',
    category: 'Events',
    subcategory: 'Corporate',
    premium: false,
    tasks: [
      { task: 'Set a Budget and Track Expenses', status: 'completed', subtasks: ['Estimate costs for venue, F&B, marketing', 'Use a spreadsheet to track actuals'] },
      { task: 'Book a Venue', status: 'completed', subtasks: ['Check capacity and insurance', 'Check A/V capabilities', 'Confirm booking dates and times'] },
      { task: 'Invite Key Press, Investors & Influencers', status: 'in-progress', subtasks: ['Draft personalized invitations', 'Send invites via preferred channel', 'Follow up with a call or personal message'] },
      { task: 'Prepare a Short, Engaging Product Demo', status: 'pending', subtasks: ['Script the demo (max 5 minutes)', 'Rehearse timing and flow', 'Prepare for potential Q&A'] },
      { task: 'Order Branded Swag/Merchandise', status: 'pending', subtasks: ['Design swag items (t-shirts, stickers)', 'Get quotes from multiple vendors', 'Confirm delivery date well before event'] },
    ],
  },
   {
    id: 'event-kids-birthday-party-free',
    name: 'Kids Birthday Party',
    category: 'Events',
    subcategory: 'Social',
    premium: false,
    tasks: [
      { task: 'Choose a Theme', status: 'completed', subtasks: ['Superheroes', 'Princesses', 'Dinosaurs', 'Space'] },
      { task: 'Send out Invitations', status: 'in-progress', subtasks: ['Include RSVP details (phone/email, date)', 'Mention theme for dress-up', 'Add map or clear directions to venue'] },
      { task: 'Order Birthday Cake & Food', status: 'pending', subtasks: ['Confirm cake flavor and design', 'Order kid-friendly snacks (pizza, sandwiches)', 'Check for guest allergies'] },
      { task: 'Plan Games & Activities', status: 'pending', subtasks: ['Musical chairs', 'Treasure hunt', 'Face painting', 'Prizes for winners'] },
      { task: 'Arrange for Return Gifts/Goodie Bags', status: 'pending', subtasks: ['Select age-appropriate items', 'Pack the bags', 'Personalize with thank-you notes'] },
    ],
  },

  // =================================================
  // 2. Events Checklists - PREMIUM
  // =================================================
  {
    id: 'event-sangeet-night-premium',
    name: 'Sangeet Night',
    category: 'Events',
    subcategory: 'Weddings',
    premium: true,
    premiumPack: 'The Ultimate Wedding Planner Pack',
    tasks: [
      { task: 'Book Professional Choreographer', status: 'pending', subtasks: ['Audition local choreographers', 'Negotiate rates for group and solo dances', 'Schedule practice sessions based on availability'] },
      { task: 'Finalize Family & Friends Performances', status: 'pending', subtasks: ['Create a sign-up sheet with performance type', 'Set time limits (e.g., 3-4 minutes per act)', 'Collect music files in required format (MP3, WAV)'] },
      { task: 'Set up Stage, Sound & Lighting', status: 'pending', subtasks: ['Design stage layout with backdrop', 'Rent professional audio system and microphones', 'Plan for dynamic lighting effects for each performance'] },
      { task: 'Hire Live Band or DJ', status: 'pending', subtasks: ['Review portfolios and attend a live performance if possible', 'Finalize playlist for dance floor sections', 'Sign contract with rider'] },
      { task: 'Plan a Themed Decor', status: 'pending', subtasks: ['Bollywood movie theme', 'Royal Rajasthani theme', 'Modern floral theme', 'Photo booth with props'] },
      { task: 'Arrange for a skilled Emcee/Host', status: 'pending', subtasks: ['Write a script with introductions for each act', 'Plan engaging audience games between performances', 'Confirm host a week prior'] },
    ],
  },
  {
    id: 'event-product-launch-premium',
    name: 'Product Launch Event',
    category: 'Events',
    subcategory: 'Corporate',
    premium: true,
    premiumPack: 'Corporate & Startup Launchkit',
    tasks: [
        { task: 'Define event goals & KPIs', status: 'pending', subtasks: ['Set targets for media mentions (e.g., 10+ articles)', 'Define lead generation goals (e.g., 500 new leads)', 'Establish social media engagement metrics (# of mentions, hashtag usage)'] },
        { task: 'Develop a comprehensive event marketing plan', status: 'pending', subtasks: ['Pre-event email campaign to build hype', 'Social media countdown posts', 'Paid ad strategy for target audience', 'Create event landing page with registration'] },
        { task: 'Create engaging product demos & presentations', status: 'pending', subtasks: ['Set up live demo stations with trained staff', 'Create interactive displays or touchscreens', 'Finalize keynote presentation slides and script'] },
        { task: 'Secure keynote speakers & industry influencers', status: 'pending', subtasks: ['Identify and outreach to relevant figures', 'Negotiate speaking fees and terms', 'Coordinate travel, accommodation, and itineraries'] },
        { task: 'Coordinate with PR agency for media coverage', status: 'pending', subtasks: ['Prepare detailed press kits (press release, high-res images)', 'Schedule pre-event briefings with key journalists', 'Manage on-site media interviews and photo ops'] },
    ],
  },
  {
    id: 'event-corporate-awards-night-premium',
    name: 'Corporate Awards Night',
    category: 'Events',
    subcategory: 'Corporate',
    premium: true,
    premiumPack: 'Corporate & Startup Launchkit',
    tasks: [
        { task: 'Establish award categories and nomination criteria', status: 'pending', subtasks: ['Define a judging panel of senior leaders', 'Open nominations to all employees via a form', 'Set a clear deadline for submissions'] },
        { task: 'Design and procure trophies/awards', status: 'pending', subtasks: ['Get 3-4 design mockups from vendors', 'Select vendor based on quality and price', 'Confirm engraving details and check for typos'] },
        { task: 'Book an elegant venue and catering', status: 'pending', subtasks: ['Formal dinner setting with round tables', 'Plan a cocktail reception before the ceremony', 'Select themed decor that matches corporate branding'] },
        { task: 'Hire a professional host/MC', status: 'pending', subtasks: ['Review host reels and past event footage', 'Brief host on company culture and key people', 'Write and finalize the event script with the host'] },
        { task: 'Prepare scripts and multimedia presentations', status: 'pending', subtasks: ['Create short video clips for each major nominee', 'Design winner announcement graphics and animations', 'Select appropriate background music for walk-ups'] },
    ],
  },
  {
    id: 'event-major-award-show-production-premium',
    name: 'Major Award Show Production',
    category: 'Events',
    subcategory: 'Corporate',
    premium: true,
    premiumPack: 'Corporate & Startup Launchkit',
    tasks: [
        { task: 'Red carpet setup and management', status: 'pending', subtasks: ['Design and print step-and-repeat banner', 'Hire celebrity interviewers and hosts', 'Manage and allocate space for photographer pits'] },
        { task: 'Multi-camera broadcast coordination', status: 'pending', subtasks: ['Create a detailed show flow document (minute-by-minute)', 'Plan all camera angles and shots', 'Coordinate with broadcast director and technical crew'] },
        { task: 'Teleprompter script finalization for presenters', status: 'pending', subtasks: ['Load all scripts into the teleprompter system', 'Conduct rehearsals with presenters to check pacing', 'Have hard-copy backup scripts on hand'] },
        { task: 'Backstage management and celebrity handling', status: 'pending', subtasks: ['Set up green rooms with specific amenities', 'Create a detailed talent movement schedule', 'Assign dedicated talent liaisons for high-profile guests'] },
        { task: 'Post-show press conference logistics', status: 'pending', subtasks: ['Set up press room with proper lighting and audio', 'Prepare moderator notes and potential questions', 'Coordinate with security for smooth entry and exit of talent'] },
    ],
  },
  {
    id: 'event-haldi-ceremony-premium',
    name: 'Haldi Ceremony',
    category: 'Events',
    subcategory: 'Weddings',
    premium: true,
    premiumPack: 'The Ultimate Wedding Planner Pack',
    tasks: [
      { task: 'Venue Setup with Yellow Theme', status: 'pending', subtasks: ['Marigold flower decorations', 'Seating mats for guests', 'Low seating for bride/groom', 'Designate a clean area for the ceremony'] },
      { task: 'Arrange for Haldi Paste Ingredients', status: 'pending', subtasks: ['Turmeric, sandalwood, gram flour, rose water', 'Prepare fresh paste on the morning of the event', 'Arrange small bowls for guests to apply'] },
      { task: 'Coordinate Bride/Groom Outfits', status: 'pending', subtasks: ['Simple matching yellow outfits', 'Floral jewelry (gajras)', 'Arrange for comfortable, older clothing as it will get stained'] },
      { task: 'Book Photographer for candid shots', status: 'pending', subtasks: ['Brief photographer to focus on expressions and fun', 'Capture the playful atmosphere of applying haldi'] },
      { task: 'Plan a light, festive music playlist', status: 'pending', subtasks: ['Traditional folk songs related to weddings', 'Shehnai music for ambiance'] },
    ],
  },
  {
    id: 'event-south-indian-wedding-premium',
    name: 'South Indian Wedding',
    category: 'Events',
    subcategory: 'Weddings',
    premium: true,
    premiumPack: 'The Ultimate Wedding Planner Pack',
    tasks: [
        { task: 'Book temple or mandapam for ceremony', status: 'pending', subtasks: ['Check availability for auspicious dates', 'Understand temple rules regarding decor and timing'] },
        { task: 'Arrange for traditional nadaswaram & thavil musicians', status: 'pending', subtasks: ['Book artists well in advance', 'Confirm their arrival time'] },
        { task: 'Procure all items for rituals', status: 'pending', subtasks: ['Kanyadaanam ritual items', 'Mangalsutra and toe rings', 'Garlands for exchange'] },
        { task: 'Plan a traditional South Indian feast (Sadhya)', status: 'pending', subtasks: ['Arrange for serving on banana leaves', 'Confirm number of dishes (e.g., 21-course sadhya)', 'Hire a specialized caterer'] },
        { task: 'Coordinate silk sarees and veshtis for the family', status: 'pending', subtasks: ['Choose color themes for bride and groom sides', 'Arrange for tailoring and blouse stitching'] },
    ],
  },
  {
    id: 'event-sikh-wedding-anand-karaj-premium',
    name: 'Sikh Wedding (Anand Karaj)',
    category: 'Events',
    subcategory: 'Weddings',
    premium: true,
    premiumPack: 'The Ultimate Wedding Planner Pack',
    tasks: [
        { task: 'Confirm booking at the Gurdwara', status: 'pending', subtasks: ['Finalize date and time (usually in the morning)', 'Discuss protocols and etiquette with the Granthi (ceremonial reader)'] },
        { task: 'Arrange for Raagi Jatha for kirtan', status: 'pending', subtasks: ['Select the shabads (hymns) to be sung during the ceremony', 'Confirm timings for their performance'] },
        { task: 'Organize the Laavan Pheras ceremony', status: 'pending', subtasks: ['Distribute pallas (sashes) to the key family members', 'Brief family on the significance and their roles during the four rounds'] },
        { task: 'Prepare Karah Prasad for distribution', status: 'pending', subtasks: ['Arrange for its preparation in the Gurdwara kitchen', 'Organize volunteers for respectful distribution after the ceremony'] },
        { task: 'Plan and organize the post-ceremony Langar', status: 'pending', subtasks: ['Plan a simple, vegetarian menu', 'Arrange for volunteers (sewadars) for cooking and cleaning', 'Organize seating arrangements for all guests'] },
    ],
  },

  // =================================================
  // 3. Hospitality Checklists - FREE
  // =================================================
  {
    id: 'hosp-hotel-daily-housekeeping-free',
    name: 'Hotel Daily Housekeeping',
    category: 'Hospitality',
    subcategory: 'Operations',
    premium: false,
    tasks: [
      { task: 'Change Bed Linens & Make Bed', status: 'pending', subtasks: ['Check for any stains or damage', 'Ensure crisp, tight corners on sheets'] },
      { task: 'Clean Bathroom & Replenish Toiletries', status: 'completed', subtasks: ['Clean mirror and counter surfaces', 'Scrub toilet and shower area', 'Replenish towels, soap, and shampoo'] },
      { task: 'Vacuum, Dust & Mop the Room', status: 'in-progress', subtasks: ['Dust all surfaces including tables and headboard', 'Vacuum entire carpet area', 'Mop any hard floors'] },
      { task: 'Restock Mini-Bar & Coffee/Tea Station', status: 'pending', subtasks: ['Check inventory against consumption sheet', 'Refill used items and charge to room', 'Clean coffee maker and cups'] },
      { task: 'Empty All Trash Bins', status: 'pending', subtasks: ['Replace liners in all trash bins'] },
    ],
  },
  {
    id: 'hosp-restaurant-daily-opening-free',
    name: 'Restaurant Daily Opening',
    category: 'Restaurants',
    subcategory: 'Operations',
    premium: false,
    tasks:      [
      { task: 'Check Reservation System for Bookings', status: 'completed', subtasks: ['Note any special requests (birthdays, allergies)', 'Plan table allocation for large groups'] },
      { task: 'Set Tables with Clean Linens & Cutlery', status: 'completed', subtasks: ['Polish all silverware and glassware', 'Fold napkins according to standard', 'Set centerpieces'] },
      { task: 'Review Daily Specials with Kitchen Staff', status: 'in-progress', subtasks: ['Understand ingredients and preparation', 'Note any 86\'d items to inform servers'] },
      { task: 'Turn on Music & Adjust Lighting', status: 'pending', subtasks: ['Set music to appropriate volume and genre', 'Ensure lighting is warm and inviting'] },
      { task: 'Brief Front of House Staff', status: 'pending', subtasks: ['Discuss specials and 86\'d items', 'Assign server sections', 'Review service standards and upsell opportunities'] },
    ],
  },

  // =================================================
  // 4. Hospitality Checklists - PREMIUM
  // =================================================
  {
    id: 'hosp-restaurant-daily-closing-premium',
    name: 'Restaurant Daily Closing',
    category: 'Restaurants',
    subcategory: 'Operations',
    premium: true,
    premiumPack: 'Hospitality Excellence Suite',
    tasks: [
        { task: 'Complete end-of-day financial reconciliation', status: 'pending', subtasks: ['Count and balance cash drawer', 'Generate and verify credit card sales report', 'Calculate and distribute server tip-outs'] },
        { task: 'Deep clean all kitchen surfaces and equipment', status: 'pending', subtasks: ['Clean grills, fryers, and ovens', 'Wipe down all stainless steel surfaces', 'Sanitize all prep areas and cutting boards'] },
        { task: 'Take inventory of perishable and non-perishable goods', status: 'pending', subtasks: ['Update stock sheets for all key items', 'Prepare an order list for the next day\'s deliveries'] },
        { task: 'Ensure all gas lines are off and equipment is powered down', status: 'pending', subtasks: ['Double check that all ovens and stoves are off', 'Turn off coffee machines and other small appliances'] },
        { task: 'Set security alarm and lock all entrances', status: 'pending', subtasks: ['Check that all windows and back doors are secure', 'Activate the main alarm system'] },
    ],
  },
  {
    id: 'hosp-catering-event-management-premium',
    name: 'Catering Event Management',
    category: 'Hospitality',
    subcategory: 'Events',
    premium: true,
    premiumPack: 'Hospitality Excellence Suite',
    tasks: [
        { task: 'Finalize menu with client, noting all dietary needs', status: 'pending', subtasks: ['Get final headcount 48 hours prior', 'Confirm service style (buffet, plated, stations)', 'Create labels for all dishes, highlighting allergens'] },
        { task: 'Plan for staffing: chefs, servers, and bartenders', status: 'pending', subtasks: ['Create a detailed work schedule and roles', 'Brief team on event flow, menu, and special requests'] },
        { task: 'Rent and confirm delivery of all necessary equipment', status: 'pending', subtasks: ['Tables, chairs, linens, and glassware', 'Serving platters, chafing dishes, and utensils', 'Portable cooking equipment and power sources'] },
        { task: 'Coordinate logistics for food transport and on-site setup', status: 'pending', subtasks: ['Use temperature-controlled containers for food safety', 'Create a setup diagram for the venue kitchen/prep area'] },
        { task: 'Post-event breakdown and cleanup checklist', status: 'pending', subtasks: ['Pack all leftover food safely for client or disposal', 'Thoroughly clean the service and prep areas', 'Account for all rental equipment before leaving the venue'] },
    ],
  },
  {
    id: 'hosp-new-hotel-staff-onboarding-premium',
    name: 'New Hotel Staff Onboarding',
    category: 'Training',
    subcategory: 'Hospitality',
    premium: true,
    premiumPack: 'Hospitality Excellence Suite',
    tasks: [
        { task: 'Complete HR paperwork and issue uniform', status: 'pending', subtasks: ['Collect tax forms and identification', 'Sign employment contract', 'Provide uniform and explain dress code'] },
        { task: 'Tour of the property and introduction to department heads', status: 'pending', subtasks: ['Front office, housekeeping, F&B, security, engineering', 'Show emergency exits, fire extinguishers, and assembly points'] },
        { task: 'Training on Property Management System (PMS)', status: 'pending', subtasks: ['Practice check-in/check-out process', 'Learn billing and payment procedures', 'Understand how to manage reservations and room status'] },
        { task: 'Review brand standards and customer service protocols', status: 'pending', subtasks: ['Role-play greeting guests', 'Train on the L.E.A.R.N. model for handling complaints', 'Practice upselling services and amenities'] },
        { task: 'Shadow an experienced staff member for one week', status: 'pending', subtasks: ['Observe guest interactions and daily tasks', 'Practice procedures under direct supervision', 'Receive daily feedback and a final review'] },
    ],
  },
  {
    id: 'sustain-hotel-energy-efficiency-premium',
    name: 'Hotel Energy Audit',
    category: 'Sustainability',
    subcategory: 'Hospitality',
    premium: true,
    premiumPack: 'Sustainability Starter Kit',
    tasks: [
        { task: 'Conduct a weekly energy audit of all departments', status: 'pending', subtasks: ['Read gas, water, and electric meters', 'Identify and log areas of high consumption', 'Compare week-over-week usage'] },
        { task: 'Install smart thermostats and key-card activated power in rooms', status: 'pending', subtasks: ['Create an installation schedule for all rooms', 'Train maintenance staff on the new systems'] },
        { task: 'Switch all lighting to high-efficiency LED bulbs', status: 'pending', subtasks: ['Inventory all bulb types across the property', 'Schedule phased replacement for lobby, hallways, guest rooms, and back-of-house'] },
        { task: 'Implement a "turn off" policy for unused areas and equipment', status: 'pending', subtasks: ['Create signage for meeting rooms and offices', 'Train kitchen staff to power down equipment during off-peak hours'] },
        { task: 'Train staff on energy-saving practices', status: 'pending', subtasks: ['Incorporate energy efficiency modules into onboarding', 'Run monthly awareness campaigns with incentives for the best department'] },
    ],
  }
];
