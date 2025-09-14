import type { Checklist } from './types';

export const checklistTemplates: Checklist[] = [
  // Events
  {
    id: 'evt-wd-haldi',
    title: 'Wedding - Haldi Ceremony',
    category: 'Events',
    type: 'Wedding - Haldi',
    tasks: [
      { id: '1', text: 'Book venue & confirm details', completed: true, subtasks: [
        { id: '1-1', text: 'Finalize guest count', completed: true },
        { id: '1-2', text: 'Confirm date and time', completed: true },
        { id: '1-3', text: 'Check power backup and facilities', completed: true },
      ] },
      { id: '2', text: 'Arrange ceremony essentials', completed: true, subtasks: [
        { id: '2-1', text: 'Order turmeric and sandalwood paste', completed: true },
        { id: '2-2', text: 'Get floral assortments (marigolds)', completed: true },
        { id: '2-3', text: 'Arrange sacred grass and other ritual items', completed: true },
      ] },
      { id: '3', text: 'Hire vendors', completed: true, subtasks: [
        { id: '3-1', text: 'Book photographer and videographer', completed: true },
        { id: '3-2', text: 'Hire caterer and finalize menu', completed: true },
        { id: '3-3', text: 'Book priest/pandit', completed: true },
      ] },
      { id: '4', text: 'Plan decor and setup', completed: false, subtasks: [
        { id: '4-1', text: 'Choose a color theme (traditionally yellow)', completed: false },
        { id: '4-2', text: 'Set up backdrop with marigold strings', completed: false },
        { id: '4-3', text: 'Arrange low seating for the ceremony', completed: false },
        { id: '4-4', text: 'Plan for floral rangoli or entrance decor', completed: false },
      ] },
      { id: '5', text: 'Organize entertainment', completed: false, subtasks: [
        { id: '5-1', text: 'Create music playlist with traditional Haldi songs', completed: false },
        { id: '5-2', text: 'Book live traditional musicians (e.g., Dholki players)', completed: false },
        { id: '5-3', text: 'Test sound system and speakers', completed: false },
      ] },
      { id: '6', text: 'Manage guest list and invitations', completed: true },
      { id: '7', text: 'Coordinate outfits', completed: false, subtasks: [
        { id: '7-1', text: 'Finalize Haldi outfit for the bride', completed: false },
        { id: '7-2', text: 'Finalize Haldi outfit for the groom', completed: false },
        { id: '7-3', text: 'Decide on a dress code for immediate family', completed: false },
      ] },
      { id: '8', text: 'Arrange for guest favors or return gifts', completed: false, subtasks: [
        { id: '8-1', text: 'Choose favors (e.g., bangles, bindis, sweets)', completed: false },
        { id: '8-2', text: 'Order and package the favors', completed: false },
      ] },
    ],
  },
  {
    id: 'evt-wd-mehndi',
    title: 'Wedding - Mehndi Night',
    category: 'Events',
    type: 'Wedding - Mehndi',
    tasks: [
      { id: '1', text: 'Book professional mehndi artist(s)', completed: true, subtasks: [
        { id: '1-1', text: 'Finalize artist for the bride', completed: true },
        { id: '1-2', text: 'Arrange artists for guests', completed: false },
        { id: '1-3', text: 'Confirm designs and pricing', completed: true },
      ] },
      { id: '2', text: 'Arrange comfortable seating for guests', completed: true, subtasks: [
        { id: '2-1', text: 'Arrange low seating with bolsters for mehndi application', completed: true },
        { id: '2-2', text: 'Set up general seating for other guests', completed: false },
      ] },
      { id: '3', text: 'Decorate venue with colorful elements', completed: false, subtasks: [
        { id: '3-1', text: 'Select color theme (e.g., vibrant pinks, oranges, greens)', completed: false },
        { id: '3-2', text: 'Hang colorful drapes and fabrics', completed: false },
        { id: '3-3', text: 'Install string lights or lanterns for ambiance', completed: false },
        { id: '3-4', text: 'Arrange fresh flower decorations', completed: false },
      ] },
      { id: '4', text: 'Entertainment planning', completed: false, subtasks: [
        { id: '4-1', text: 'Create a lively music playlist (Bollywood & folk)', completed: false },
        { id: '4-2', text: 'Hire a DJ or dhol players', completed: false },
        { id: '4-3', text: 'Plan and schedule family dance performances', completed: false },
      ] },
      { id: '5', text: 'Finalize food and drink menu', completed: false, subtasks: [
        { id: '5-1', text: 'Plan a menu of easy-to-eat finger foods', completed: false },
        { id: '5-2', text: 'Set up a chaat station or food truck', completed: false },
        { id: '5-3', text: 'Arrange a beverage and cocktail bar', completed: false },
      ] },
      { id: '6', text: 'Ensure ample mehndi supplies', completed: false, subtasks: [
        { id: '6-1', text: 'Purchase high-quality, natural mehndi cones', completed: false },
        { id: '6-2', text: 'Prepare lemon-sugar solution and clove oil for aftercare', completed: false },
      ] },
      { id: '7', text: 'Book photographer/videographer to capture candid moments', completed: false },
      { id: '8', text: 'Prepare and pack guest favors', completed: false, subtasks: [
        { id: '8-1', text: 'Select favors like bangles, bindis, or potli bags', completed: false },
        { id: '8-2', text: 'Package favors beautifully', completed: false },
      ] },
      { id: '9', text: 'Set up a photo booth', completed: false, subtasks: [
        { id: '9-1', text: 'Design and set up a themed backdrop', completed: false },
        { id: '9-2', text: 'Gather fun, relevant props (e.g., signs, sunglasses)', completed: false },
      ] },
    ],
  },
   {
    id: 'evt-wd-sangeet',
    title: 'Wedding - Sangeet',
    category: 'Events',
    type: 'Wedding - Sangeet',
    tasks: [
        { id: '1', text: 'Book entertainment and host', completed: true, subtasks: [
          { id: '1-1', text: 'Finalize DJ or live band', completed: true },
          { id: '1-2', text: 'Book an emcee for the evening', completed: true },
          { id: '1-3', text: 'Confirm playlist and do-not-play list with DJ', completed: false },
        ] },
        { id: '2', text: 'Venue and stage setup', completed: true, subtasks: [
          { id: '2-1', text: 'Set up stage, backdrop, and professional lighting', completed: true },
          { id: '2-2', text: 'Ensure sound system is tested and working', completed: true },
          { id: '2-3', text: 'Check dance floor size and condition', completed: true },
          { id: '2-4', text: 'Set up LED screens for visuals if planned', completed: false },
        ] },
        { id: '3', text: 'Coordinate performances', completed: true, subtasks: [
          { id: '3-1', text: 'Create and share rehearsal schedule', completed: true },
          { id: '3-2', text: 'Appoint a performance coordinator', completed: true },
          { id: '3-3', text: 'Finalize song selection and track order for all performances', completed: true },
          { id: '3-4', text: 'Do a final run-through on the stage', completed: false },
        ] },
        { id: '4', text: 'Finalize dinner and cocktail menu', completed: false, subtasks: [
            { id: '4-1', text: 'Finalize menu with caterer', completed: false },
            { id: '4-2', text: 'Arrange for a cocktail bar and bartender', completed: false },
            { id: '4-3', text: 'Plan for appetizer circulation during performances', completed: false },
        ] },
        { id: '5', text: 'Plan guest seating arrangements and table assignments', completed: false },
        { id: '6', text: 'Brief photographer/videographer on key moments to capture', completed: false },
        { id: '7', text: 'Arrange for a backup generator in case of power failure', completed: false },
        { id: '8', text: 'Prepare a thank-you speech', completed: false },
    ],
  },
  {
    id: 'evt-wd-south-indian',
    title: 'South Indian Wedding',
    category: 'Events',
    type: 'Wedding - South Indian',
    tasks: [
      { id: '1', text: 'Pre-Wedding Rituals', completed: false, subtasks: [
        { id: '1-1', text: 'Finalize details for Nischayathartham (Engagement)', completed: false },
        { id: '1-2', text: 'Arrange Sumangali Prarthanai (prayers for married women)', completed: false },
        { id: '1-3', text: 'Plan for Pandh Kaal Muhurtham (erecting the wedding canopy)', completed: false },
        { id: '1-4', text: 'Coordinate travel and accommodation for visiting relatives', completed: false },
      ]},
      { id: '2', text: 'Wedding Day - Morning', completed: false, subtasks: [
        { id: '2-1', text: 'Arrange items for Kashi Yatra ritual (umbrella, book, walking stick)', completed: false },
        { id: '2-2', text: 'Prepare for Maalai Maatral (garland exchange)', completed: false },
        { id: '2-3', text: 'Set up Oonjal (swing) and decorate it', completed: false },
        { id: '2-4', text: 'Coordinate with priest for Muhurtham timings', completed: false },
      ]},
      { id: '3', text: 'Main Ceremony', completed: false, subtasks: [
        { id: '3-1', text: 'Arrange for Kanyadaanam essentials', completed: false },
        { id: '3-2', text: 'Procure the Mangalyam (Thali) and get it blessed', completed: false },
        { id: '3-3', text: 'Arrange for Saptapadi (seven steps) ritual items', completed: false },
        { id: '3-4', text: 'Confirm traditional musicians (Nadaswaram and Thavil)', completed: false },
      ]},
      { id: '4', text: 'Attire & Jewelry', completed: false, subtasks: [
        { id: '4-1', text: 'Purchase Koorai Pudavai (9-yard saree) for the bride', completed: false },
        { id: '4-2', text: 'Purchase Veshti and Angavastram for the groom', completed: false },
        { id: '4-3', text: 'Finalize traditional gold jewelry (e.g., Manga Maalai, Vanki)', completed: false },
      ]},
      { id: '5', text: 'Feast (Kalyana Sappadu)', completed: false, subtasks: [
        { id: '5-1', text: 'Hire caterer specialized in South Indian wedding feasts', completed: false },
        { id: '5-2', text: 'Finalize menu to be served on banana leaves', completed: false },
        { id: '5-3', text: 'Arrange seating for panthi (communal seating for feast)', completed: false },
      ]},
    ],
  },
  {
    id: 'evt-wd-sikh',
    title: 'Sikh Wedding (Anand Karaj)',
    category: 'Events',
    type: 'Wedding - Sikh (Anand Karaj)',
    tasks: [
      { id: '1', text: 'Pre-Wedding Ceremonies', completed: false, subtasks: [
        { id: '1-1', text: 'Plan for Roka and Thaka (engagement ceremonies)', completed: false },
        { id: '1-2', text: 'Arrange Akhand Paath (reading of Guru Granth Sahib)', completed: false },
        { id: '1-3', text: 'Organize Sangeet/Jaggo night', completed: false },
      ]},
      { id: '2', text: 'Anand Karaj Ceremony', completed: false, subtasks: [
        { id: '2-1', text: 'Book Gurdwara for the ceremony', completed: false },
        { id: '2-2', text: 'Arrange for Kirtani Jatha (hymn singers)', completed: false },
        { id: '2-3', text: 'Procure Palla (sash for the ceremony)', completed: false },
        { id: '2-4', text: 'Arrange Karah Prasad (sacred pudding)', completed: false },
        { id: '2-5', text: 'Ensure all guests have head coverings (Ramal)', completed: false },
      ]},
      { id: '3', text: 'Wedding Day Logistics', completed: false, subtasks: [
        { id: '3-1', text: 'Arrange Baraat procession (horses, band)', completed: false },
        { id: '3-2', text: 'Organize Milni ceremony (meeting of the families)', completed: false },
        { id: '3-3', text: 'Plan for Langar (communal meal) post-ceremony', completed: false },
      ]},
      { id: '4', text: 'Post-Wedding Traditions', completed: false, subtasks: [
        { id: '4-1', text: 'Plan Doli (bride\'s departure)', completed: false },
        { id: '4-2', text: 'Arrange for Paani Varna (welcome ritual for the bride)', completed: false },
        { id: '4-3', text: 'Organize the wedding reception', completed: false },
      ]},
      { id: '5', text: 'Attire', completed: false, subtasks: [
        { id: '5-1', text: 'Select wedding attire for bride (e.g., Salwar Kameez, Lehenga)', completed: false },
        { id: '5-2', text: 'Select Sherwani and Kirpan for the groom', completed: false },
      ]},
    ],
  },
  {
    id: 'evt-prod-launch',
    title: 'Product Launch Event',
    category: 'Events',
    type: 'Product Launch',
    tasks: [
      { id: '1', text: 'Secure venue and necessary permits', completed: true },
      { id: '2', text: 'Design and print branding materials', completed: true, subtasks: [
        { id: '2-1', text: 'Design banners and standees with product colors', completed: false },
        { id: '2-2', text: 'Print brochures or info cards', completed: false },
        { id: '2-3', text: 'Order branded swag (pens, notebooks, etc.)', completed: false },
      ] },
      { id: '3', text: 'Prepare product demonstration', completed: false, subtasks: [
        { id: '3-1', text: 'Finalize demo script and key talking points', completed: false },
        { id: '3-2', text: 'Test all hardware and software components thoroughly', completed: false },
        { id: '3-3', text: 'Have a pre-recorded video of the demo as backup', completed: false },
      ] },
      { id: '4-Kalyana', text: 'Arrange catering, including snacks and beverages', completed: false },
      { id: '5-Sappadu', text: 'Manage guest list and track RSVPs online', completed: false },
      { id: '6', text: 'Media and PR', completed: false, subtasks: [
        { id: '6-1', text: 'Draft and schedule press release distribution', completed: false },
        { id: '6-2', text: 'Prepare digital press kits with high-res images', completed: false },
        { id: '6-3', text: 'Schedule pre-event interviews with key spokespeople', completed: false },
        { id: '6-4', text: 'Create a list of target media and influencers', completed: false },
      ] },
      { id: '7', text: 'Hire a professional photographer and videographer', completed: false },
      { id: '8', text: 'Conduct a thorough AV system and microphone check', completed: false },
      { id: '9', text: 'Prepare product samples or trial codes for attendees', completed: false },
      { id: '10', text: 'Plan event agenda, including speaker timings and Q&A session', completed: false },
    ],
  },
  {
    id: 'evt-startup-launch',
    title: 'Startup Launch Party',
    category: 'Events',
    type: 'Startup Launch',
    tasks: [
      { id: '1', text: 'Define launch goals and budget', completed: true },
      { id: '2', text: 'Create a target guest list (investors, press, partners, users)', completed: true },
      { id: '3', text: 'Select and book a unique venue that reflects brand identity', completed: false },
      { id: '4', text: 'Design and send out digital invitations with RSVP tracking', completed: false },
      { id: '5', text: 'Plan a short, engaging presentation or product demo', completed: false },
      { id: '6', text: 'Arrange for catering with trendy food and drink options', completed: false, subtasks: [
        { id: '6-1', text: 'Book a food truck or a popular local caterer', completed: false },
        { id: '6-2', text: 'Create a signature cocktail that matches the brand color', completed: false },
      ] },
      { id: '7', text: 'Set up networking zones or icebreaker activities', completed: false },
      { id: '8', text: 'Prepare branded swag/goodie bags for guests', completed: false },
      { id: '9', text: 'Hire a photographer/videographer to capture the event', completed: false },
      { id: '10', text: 'Set up a social media wall with a unique event hashtag', completed: false },
      { id: '11', text: 'Coordinate with speakers and test AV equipment', completed: false },
      { id: '12', text: 'Follow up with attendees with a thank-you note and press kit', completed: false },
    ],
  },
  {
    id: 'evt-birthday-party',
    title: 'Kids Birthday Party',
    category: 'Events',
    type: 'Birthday Party',
    tasks: [
      { id: '1', text: 'Set Budget and Theme', completed: false, subtasks: [
        { id: '1-1', text: 'Decide on a total party budget', completed: false },
        { id: '1-2', text: 'Choose a theme with the birthday child', completed: false },
        { id: '1-3', text: 'Create a guest list to estimate headcount', completed: false },
      ]},
      { id: '2', text: 'Book Venue & Entertainment', completed: false, subtasks: [
        { id: '2-1', text: 'Select and book party venue (if not at home)', completed: false },
        { id: '2-2', text: 'Book entertainer (e.g., magician, character)', completed: false },
        { id: '2-3', text: 'Arrange for any large rentals (e.g., bouncy castle)', completed: false },
      ]},
      { id: '3', text: 'Send Invitations', completed: false, subtasks: [
        { id: '3-1', text: 'Design/purchase invitations matching the theme', completed: false },
        { id: '3-2', text: 'Send out invitations 3-4 weeks in advance', completed: false },
        { id: '3-3', text: 'Track RSVPs and follow up with non-responders', completed: false },
      ]},
      { id: '4', text: 'Plan Menu & Order Cake', completed: false, subtasks: [
        { id: '4-1', text: 'Plan a kid-friendly menu (pizza, nuggets, etc.)', completed: false },
        { id: '4-2', text: 'Check for guest allergies or dietary restrictions', completed: false },
        { id: '4-3', text: 'Order a themed birthday cake and candles', completed: false },
        { id: '4-4', text: 'Purchase drinks, snacks, and paper goods', completed: false },
      ]},
      { id: '5', text: 'Shop for Decorations & Supplies', completed: false, subtasks: [
        { id: '5-1', text: 'Purchase decorations (balloons, streamers, banners)', completed: false },
        { id: '5-2', text: 'Buy tableware (plates, cups, napkins, cutlery)', completed: false },
        { id: '5-3', text: 'Get party game supplies and prizes', completed: false },
      ]},
      { id: '6', text: 'Prepare Party Favors', completed: false, subtasks: [
        { id: '6-1', text: 'Choose age-appropriate party favors', completed: false },
        { id: '6-2', text: 'Purchase items for goody bags', completed: false },
        { id: '6-3', text: 'Assemble and pack party favors', completed: false },
      ]},
      { id: '7', text: 'Final Preparations (Week of Party)', completed: false, subtasks: [
        { id: '7-1', text: 'Confirm bookings with venue and entertainer', completed: false },
        { id: '7-2', text: 'Create a party day schedule and playlist', completed: false },
        { id: '7-3', text: 'Buy any remaining food items', completed: false },
        { id: '7-4', text: 'Prepare a space for gifts', completed: false },
      ]},
    ],
  },
  {
    id: 'evt-destination-wedding',
    title: 'Destination Wedding Planning',
    category: 'Events',
    type: 'Wedding - Destination',
    tasks: [
      { id: '1', text: 'Initial Planning (12-18 Months Out)', completed: false, subtasks: [
        { id: '1-1', text: 'Set overall wedding budget', completed: false },
        { id: '1-2', text: 'Choose a destination and time of year', completed: false },
        { id: '1-3', text: 'Create initial guest list', completed: false },
        { id: '1-4', text: 'Research local marriage requirements and legalities', completed: false },
        { id: '1-5', text: 'Hire a wedding planner specializing in the destination', completed: false },
      ]},
      { id: '2', text: 'Vendor & Venue Booking (9-12 Months Out)', completed: false, subtasks: [
        { id: '2-1', text: 'Visit destination to scout venues (if possible)', completed: false },
        { id: '2-2', text: 'Book ceremony and reception venues', completed: false },
        { id: '2-3', text: 'Book photographer, videographer, and officiant', completed: false },
        { id: '2-4', text: 'Send out "Save the Dates" to guests', completed: false },
        { id: '2-5', text: 'Launch wedding website with travel info', completed: false },
      ]},
      { id: '3', text: 'Guest & Travel Logistics (6-9 Months Out)', completed: false, subtasks: [
        { id: '3-1', text: 'Reserve a block of hotel rooms for guests', completed: false },
        { id: '3-2', text: 'Send formal invitations', completed: false },
        { id: '3-3', text: 'Finalize menu with caterer and book florist/decor', completed: false },
        { id: '3-4', text: 'Arrange transportation for guests (e.g., airport to hotel)', completed: false },
      ]},
      { id: '4', text: 'Final Details (1-3 Months Out)', completed: false, subtasks: [
        { id: '4-1', text: 'Obtain marriage license and any necessary documents', completed: false },
        { id: '4-2', text: 'Confirm all vendor details and timelines', completed: false },
        { id: '4-3', text: 'Finalize seating chart and event flow', completed: false },
        { id: '4-4', text: 'Assemble welcome bags for guests', completed: false },
        { id: '4-5', text: 'Confirm travel arrangements and pack your bags', completed: false },
      ]},
    ]
  },
  {
    id: 'evt-corp-awards',
    title: 'Corporate Awards Night',
    category: 'Events',
    type: 'Corporate Awards',
    tasks: [
      { id: '1', text: 'Planning & Strategy', completed: false, subtasks: [
        { id: '1-1', text: 'Define event objectives and success metrics', completed: false },
        { id: '1-2', text: 'Set a detailed budget', completed: false },
        { id: '1-3', text: 'Form an event planning committee', completed: false },
        { id: '1-4', text: 'Choose an event theme and format (virtual, hybrid, in-person)', completed: false },
      ]},
      { id: '2', text: 'Nominations & Judging', completed: false, subtasks: [
        { id: '2-1', text: 'Define award categories and criteria', completed: false },
        { id: '2-2', text: 'Open call for nominations', completed: false },
        { id: '2-3', text: 'Assemble a judging panel', completed: false },
        { id: '2-4', text: 'Finalize and notify winners confidentially', completed: false },
      ]},
      { id: '3', text: 'Venue & Logistics', completed: false, subtasks: [
        { id: '3-1', text: 'Select and book venue', completed: false },
        { id: '3-2', text: 'Arrange for catering and beverage service', completed: false },
        { id: '3-3', text: 'Book AV equipment and technical support', completed: false },
        { id: '3-4', text: 'Plan seating arrangements', completed: false },
      ]},
      { id: '4', text: 'Event Programming & Content', completed: false, subtasks: [
        { id: '4-1', text: 'Design and order trophies/awards', completed: false },
        { id: '4-2', text: 'Book a host/Master of Ceremonies (MC)', completed: false },
        { id: '4-3', text: 'Script speeches and presentations', completed: false },
        { id: '4-4', text: 'Create video clips or presentations for nominees', completed: false },
      ]},
      { id: '5', text: 'Marketing & Invitations', completed: false, subtasks: [
        { id: '5-1', text: 'Create event branding and promotional materials', completed: false },
        { id: '5-2', text: 'Send out invitations and manage RSVPs', completed: false },
        { id: '5-3', text: 'Coordinate with press and media partners', completed: false },
      ]},
    ]
  },
  {
    id: 'evt-award-show',
    title: 'Major Award Show Production',
    category: 'Events',
    type: 'Award Show',
    tasks: [
      { id: '1', text: 'Pre-Production & Planning', completed: false, subtasks: [
        { id: '1-1', text: 'Finalize overall budget and secure sponsorships', completed: false },
        { id: '1-2', text: 'Book a large-scale venue (theater, arena)', completed: false },
        { id: '1-3', text: 'Hire key production heads (Director, Producer, Showrunner)', completed: false },
        { id: '1-4', text: 'Obtain all necessary permits and insurance', completed: false },
      ]},
      { id: '2', text: 'Talent & Presenters', completed: false, subtasks: [
        { id: '2-1', text: 'Book celebrity host and co-hosts', completed: false },
        { id: '2-2', text: 'Confirm award presenters and performers', completed: false },
        { id: '2-3', text: 'Manage travel, accommodation, and contracts for all talent', completed: false },
        { id: '2-4', text: 'Arrange green rooms and talent riders', completed: false },
      ]},
      { id: '3', text: 'Show Flow & Content Creation', completed: false, subtasks: [
        { id: '3-1', text: 'Develop a minute-by-minute run of show', completed: false },
        { id: '3-2', text: 'Write scripts for hosts, presenters, and voice-over', completed: false },
        { id: '3-3', text: 'Produce nominee packages and show graphics', completed: false },
        { id: '3-4', text: 'Plan and rehearse musical performances', completed: false },
      ]},
      { id: '4', text: 'Technical Production', completed: false, subtasks: [
        { id: '4-1', text: 'Finalize stage and scenic design', completed: false },
        { id: '4-2', text: 'Design lighting and sound plots', completed: false },
        { id: '4-3', text: 'Plan multi-camera setup for live broadcast/streaming', completed: false },
        { id: '4-4', text: 'Schedule and run technical rehearsals (cue-to-cue)', completed: false },
      ]},
      { id: '5', text: 'Red Carpet & Press', completed: false, subtasks: [
        { id: '5-1', text: 'Design and layout the red carpet arrival area', completed: false },
        { id: '5-2', text: 'Manage press and photographer credentials', completed: false },
        { id: '5-3', text: 'Schedule red carpet interviews and photo calls', completed: false },
      ]},
      { id: '6', text: 'Live Show & Post-Show', completed: false, subtasks: [
        { id: '6-1', text: 'Execute live show according to the run of show', completed: false },
        { id: '6-2', text: 'Coordinate stage transitions and talent movements', completed: false },
        { id: '6-3', text: 'Manage the official after-party', completed: false },
        { id: '6-4', text: 'Distribute press release with the official winners list', completed: false },
      ]},
    ]
  },
  // Hospitality
  {
    id: 'hosp-hk-daily',
    title: 'Hotel Daily Housekeeping',
    category: 'Hospitality',
    type: 'Hotel Daily Housekeeping',
    tasks: [
      { id: '1', text: 'Clean and sanitize guest room', completed: true, requiresPhoto: true, subtasks: [
        { id: '1-1', text: 'Make the bed with fresh linens', completed: true },
        { id: '1-2', text: 'Clean bathroom (toilet, shower, sink, mirror)', completed: true },
        { id: '1-3', text: 'Dust all surfaces (tables, lamps, etc.)', completed: true },
        { id: '1-4', text: 'Wipe down high-touch points (switches, handles)', completed: false },
      ] },
      { id: '2', text: 'Restock amenities', completed: true, requiresPhoto: true, subtasks: [
        { id: '2-1', text: 'Replenish towels (bath, hand, face)', completed: true },
        { id: '2-2', text: 'Restock toiletries (shampoo, soap, conditioner)', completed: true },
        { id: '2-3', text: 'Refill tea, coffee, sugar, and water supplies', completed: true },
        { id: '2-4', text: 'Check and restock stationery', completed: false },
      ] },
      { id: '3', text: 'Vacuum carpets and mop hard floors', completed: true },
      { id: '4', text: 'Check and restock minibar, recording any consumption', completed: false },
      { id: '5', text: 'Inspect all room electronics (TV, AC, lights, chargers)', completed: false },
      { id: '6', text: 'Report any maintenance issues or damages immediately', completed: false },
      { id: '7', text: 'Empty all trash bins and replace liners', completed: false },
      { id: '8', text: 'Update room status in the housekeeping management system', completed: false },
      { id: '9', text: 'Check for and collect any guest laundry requests', completed: false },
      { id: '10', text: 'Perform a final room inspection against the checklist', completed: false },
    ],
  },
  {
    id: 'hosp-res-open',
    title: 'Restaurant Daily Opening',
    category: 'Hospitality',
    type: 'Restaurant Daily Opening',
    tasks: [
      { id: '1', text: 'Wipe and set tables & chairs per floor plan', completed: true },
      { id: '2', text: 'Deep clean and sanitize all kitchen surfaces and equipment', completed: true, requiresPhoto: true },
      { id: '3', text: 'Receive and stock raw materials, checking for quality', completed: false },
      { id: '4', text: 'Check temperatures of all refrigerators and freezers', completed: false },
      { id: '5', text: 'Polish and arrange all tableware, glassware, and cutlery', completed: false, subtasks: [
        { id: '5-1', text: 'Check for spots on glassware', completed: false },
        { id: '5-2', text: 'Ensure cutlery is polished and fingerprint-free', completed: false },
        { id: '5-3', text: 'Fold napkins according to restaurant standard', completed: false },
      ] },
      { id: '6', text: 'Switch on all lights, air conditioning, and music systems', completed: false },
      { id: '7', text: 'Conduct daily staff briefing', completed: false, subtasks: [
        { id: '7-1', text: 'Discuss daily specials', completed: false },
        { id: '7-2', text: 'Review reservation list', completed: false },
        { id: '7-3', text: 'Assign staff sections', completed: false },
      ] },
      { id: '8', text: 'Check and clean restrooms, restocking supplies', completed: false },
      { id: '9', a: '9', text: 'Ensure point-of-sale systems are online and functional', completed: false },
      { id: '10', text: 'Review reservation list and plan for large parties', completed: false },
    ],
  },
  {
    id: 'hosp-res-close',
    title: 'Restaurant Daily Closing',
    category: 'Hospitality',
    type: 'Restaurant Daily Closing',
    tasks: [
      { id: '1', text: 'Clean and sanitize all kitchen stations, grills, and surfaces', completed: true, requiresPhoto: true },
      { id: '2', text: 'Switch off all cooking equipment, ovens, and exhaust fans', completed: false },
      { id: '3', text: 'Dispose of all trash and food waste properly', completed: false },
      { id: '4', text: 'Securely lock all food and beverage storage areas', completed: false },
      { id: '5', text: 'Sweep and mop all kitchen and dining area floors', completed: false },
      { id: '6', text: 'Run end-of-day sales reports and reconcile cash drawer', completed: false, subtasks: [
        { id: '6-1', text: 'Print Z-report from POS', completed: false },
        { id: '6-2', text: 'Count cash and match with report', completed: false },
        { id: '6-3', text: 'Secure cash in the safe', completed: false },
      ] },
      { id: '7', text: 'Ensure all staff have completed and signed their closing checklists', completed: false },
      { id: '8', text: 'Turn off dining room lights, music, and climate control', completed: false },
      { id: '9', text: 'Set security alarm and lock all entrance doors', completed: false },
      { id: '10', text: 'Properly store any leftover prepared food with date labels', completed: false },
    ],
  },
  {
    id: 'hosp-catering-event',
    title: 'Catering Event Management',
    category: 'Hospitality',
    type: 'Catering Event',
    tasks: [
      { id: '1', text: 'Initial Client Consultation', completed: false, subtasks: [
        { id: '1-1', text: 'Discuss event date, time, and location', completed: false },
        { id: '1-2', text: 'Determine estimated guest count', completed: false },
        { id: '1-3', text: 'Understand client\'s vision, style, and budget', completed: false },
      ]},
      { id: '2', text: 'Proposal and Menu Planning', completed: false, subtasks: [
        { id: '2-1', text: 'Create a custom menu proposal with pricing', completed: false },
        { id: '2-2', text: 'Schedule a menu tasting with the client', completed: false },
        { id: '2-3', text: 'Finalize menu and sign catering contract', completed: false },
      ]},
      { id: '3', text: 'Logistics and Rentals', completed: false, subtasks: [
        { id: '3-1', text: 'Conduct a site visit to plan layout and logistics', completed: false },
        { id: '3-2', text: 'Order all necessary rentals (tables, chairs, linens, etc.)', completed: false },
        { id: '3-3', text: 'Plan for kitchen/prep area setup if off-site', completed: false },
        { id: '3-4', text: 'Arrange for necessary permits and licenses', completed: false },
      ]},
      { id: '4', text: 'Food and Staffing', completed: false, subtasks: [
        { id: '4-1', text: 'Order all food and beverage ingredients', completed: false },
        { id: '4-2', text: 'Schedule kitchen staff, servers, and bartenders', completed: false },
        { id: '4-3', text: 'Hold a pre-event briefing with all staff', completed: false },
      ]},
      { id: '5', text: 'Event Day Execution', completed: false, requiresPhoto: true, subtasks: [
        { id: '5-1', text: 'Transport all equipment, food, and supplies to venue', completed: false },
        { id: '5-2', text: 'Set up prep areas and serving stations', completed: false },
        { id: '5-3', text: 'Execute food and beverage service according to timeline', completed: false },
        { id: '5-4', text: 'Manage on-site staff and troubleshoot any issues', completed: false },
      ]},
      { id: '6', text: 'Post-Event Wrap-Up', completed: false, subtasks: [
        { id: '6-1', text: 'Break down and clean all event areas', completed: false },
        { id: '6-2', text: 'Pack and inventory all equipment and leftover supplies', completed: false },
        { id: '6-3', text: 'Manage return of all rental items', completed: false },
        { id: '6-4', text: 'Send final invoice and thank you note to client', completed: false },
      ]},
    ]
  },
  // Training (Example)
  {
    id: 'train-onboard-hotel',
    title: 'New Hotel Staff Onboarding',
    category: 'Training',
    type: 'New Hotel Staff Onboarding',
    tasks: [
      { id: '1', text: 'Company orientation', completed: true, subtasks: [
        { id: '1-1', text: 'Present mission, vision, and values', completed: true },
        { id: '1-2', text: 'Tour of the property', completed: true },
        { id: '1-3', text: 'Introduction to department heads', completed: true },
      ] },
      { id: '2', text: 'Complete mandatory compliance training', completed: true, subtasks: [
        { id: '2-1', text: 'Fire safety and emergency procedure drill', completed: true },
        { id: '2-2', text: 'Workplace health and safety training', completed: false },
      ] },
      { id: '3', text: 'Training module on guest interaction and service standards', completed: false },
      { id: '4', text: 'Hands-on demonstration of room cleaning SOPs', completed: false },
      { id: '5', text: 'Shadow a senior staff member in the assigned role for one full shift', completed: false },
      { id: '6', text: 'Issue uniform and review grooming and presentation standards', completed: false },
      { id: '7', text: 'Complete and review performance on the 30-day evaluation checklist', completed: false },
      { id: '8', text: 'Introduction to hotel software (PMS, POS)', completed: false },
      { id: '9', text: 'Review of HR policies and employee handbook', completed: false },
      { id: '10', text: 'Set up employee ID, email, and system access', completed: false },
    ],
  },
    // Sustainability (Example)
  {
    id: 'sustain-energy-hotel',
    title: 'Hotel Energy Efficiency',
    category: 'Sustainability',
    type: 'Hotel Energy Efficiency',
    tasks: [
      { id: '1', text: 'Audit and ensure lights are switched off in all unused areas', completed: true, requiresPhoto: true },
      { id: '2', text: 'Verify AC thermostats are set to the optimal temperature (e.g., 24°C)', completed: false },
      { id: '3', text: 'Ensure laundry is run only with full, optimized loads', completed: false },
      { id: '4', text: 'Monthly check for replacement of any non-LED bulbs', completed: false },
      { id: '5', text: 'Record and review monthly energy usage from utility bills', completed: false },
      { id: '6', 'text': 'Inspect building envelope for inefficiencies', completed: false, subtasks: [
        { id: '6-1', text: 'Check window and door seals for any air leaks', completed: false },
        { id: '6-2', text: 'Inspect insulation in roof and walls where accessible', completed: false },
      ] },
      { id: '7', text: 'Promote "green" program to guests for reusing towels and linens', completed: false },
      { id: '8', text: 'Schedule regular maintenance for HVAC systems', completed: false },
    ],
  },
];
