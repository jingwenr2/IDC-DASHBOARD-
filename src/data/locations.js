const categories = [
  {
    key: 'eats',
    label: 'Eats & Cafes',
    description: 'Aesthetic breakfast, coffee, and cozy food stops to fuel a girl’s NYC day.',
    emoji: '🥐',
    color: '#ffd7db',
  },
  {
    key: 'legacy',
    label: 'Legacy Spots',
    description: 'Hidden monuments and memory-rich sites that make the city feel meaningful.',
    emoji: '🏛️',
    color: '#e8d4f4',
  },
  {
    key: 'sisterly',
    label: 'Sisterly Sites',
    description: 'Women-centered spaces that nurture connection, community, and quiet power.',
    emoji: '👭',
    color: '#f5c8dc',
  },
  {
    key: 'rec',
    label: 'Fun & Creative',
    description: 'Playful studios, craft corners, and social spots for a girls’ city day out.',
    emoji: '🎨',
    color: '#fadfc3',
  },
]

const locations = [
  {
    name: 'The Back Room',
    category: 'eats',
    categoryLabel: 'Eats & Cafes',
    location: '102 Norfolk St, New York, NY 10002',    lat: 40.7189,
    lng: -73.9862,    description:
      'As one of the two last-standing speakeasies from the Prohibition era in New York City, The Back Room offers a hidden oasis in the Lower East Side that transports visitors to the early 1920s. The bar’s interior includes plush velvet seats and baroque paintings, with drinks served “prohibition style” in mugs and brown paper bags. Live music fills the space every night, creating a playful place where history, nightlife, and performance meet.',
    badge: 'hidden gem',
    emoji: '🍸',
    mapLabel: 'Lower East Side',
    tags: ['girls day', 'cozy', 'photo spot'],
    tag: 'Cozy Nights',
  },
  {
    name: 'Prison Ship Martyrs’ Monument',
    category: 'legacy',
    categoryLabel: 'Legacy Spots',
    location: '100 Washington Park, Brooklyn, NY 11205',    lat: 40.6913,
    lng: -73.9756,    description:
      'The Prison Ship Martyrs’ Monument is a war memorial at Fort Greene Park in Brooklyn. It commemorates more than 11,500 American prisoners of war who died in captivity aboard British prison ships during the American Revolutionary War. Located at one of the park’s highest points, the monument connects visitors to history while offering a powerful view of the city skyline.',
    badge: 'NYC must go',
    emoji: '🕊️',
    mapLabel: 'Brooklyn',
    tags: ['history', 'photo spot', 'study date'],
    tag: 'Quiet History',
  },
  {
    name: 'Maleeha Cafe',
    category: 'sisterly',
    categoryLabel: 'Sisterly Sites',
    location: '1807 Hunt Ave, Bronx, NY 10462',    lat: 40.8495,
    lng: -73.8618,    description:
      'Maleeha Cafe is a Yemeni-owned women-only cafe in the Bronx that serves Yemeni coffee and local baked goods. The space allows women to gather comfortably, remove face coverings, and relax in a community that values safety, culture, and dignity. With private rooms available for events, the cafe creates a calming environment centered on women’s comfort and community.',
    badge: 'girls day',
    emoji: '☕',
    mapLabel: 'Bronx',
    tags: ['cozy', 'women-centered', 'community'],
    tag: 'Sisterly Spot',
  },
  {
    name: 'Happy Medium',
    category: 'rec',
    categoryLabel: 'Fun & Creative',
    location: '49 Market St, New York, NY 10002',    lat: 40.7134,
    lng: -73.9947,    description:
      'Nestled in Chinatown, Happy Medium is an arts club for casual artists that offers pottery classes, workshops, and all the supplies needed for a crafty afternoon. Instead of ordering food, visitors choose from an “Art Cafe Menu” with packaged creative experiences like watercolors, friendship bracelets, and air-dry clay. It is a warm place to spend quality time with friends while leaving with a handmade memory.',
    badge: 'photo spot',
    emoji: '🎨',
    mapLabel: 'Chinatown',
    tags: ['creative', 'girls day', 'hidden gem'],
    tag: 'Art Cafe',
  },
  {
    name: 'Women’s Rights Pioneers Monument',
    category: 'legacy',
    categoryLabel: 'Legacy Spots',
    location: 'Central Park, Literary Walk',    lat: 40.7724,
    lng: -73.9718,    description:
      'Created by Meredith Bergmann and installed in 2020, the Women’s Rights Pioneers Monument honors Sojourner Truth, Susan B. Anthony, and Elizabeth Cady Stanton. It was the first monument in Central Park to depict real women. The sculpture shows the three women working together, symbolizing activism, friendship, and shared purpose.',
    badge: 'study date',
    emoji: '👩‍🎨',
    mapLabel: 'Central Park',
    tags: ['history', 'NYC must go', 'women-centered'],
    tag: 'Iconic Monument',
  },
  {
    name: 'Gather Cafe',
    category: 'eats',
    categoryLabel: 'Eats & Cafes',
    location: '54 Orchard St, Storefront 2, New York, NY 10002',
    lat: 40.7160,
    lng: -73.9912,
    description:
      'Located on the Lower East Side, Gather Cafe is a women-owned cafe, espresso bar, and wine bar. It presents itself as a community hub where creativity meets comfort, using food and drink to connect people and elevate everyday moments. With locally sourced ingredients, fresh pastries, sandwiches, salads, and rotating workshops, Gather Cafe blends hospitality, creativity, and community.',
    badge: 'cozy',
    emoji: '🥐',
    mapLabel: 'Lower East Side',
    tags: ['community', 'cute', 'hidden gem'],
    tag: 'Warm Cafe',
  },
]

export { categories, locations }
