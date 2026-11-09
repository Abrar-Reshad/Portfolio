// All the content of the site lives here. Edit this file, not the components.

export const profile = {
  name: 'Syed Abrar Reshad',
  email: 'reshad0057@gmail.com',
  // Empty values are hidden on the page.
  github: 'https://github.com/Abrar-Reshad',
  linkedin: 'https://www.linkedin.com/in/syed-abrar-reshad-5b2b3043a/',
  facebook: 'https://www.facebook.com/reshad0057',
  instagram: 'https://www.instagram.com/abrar_reshad/',
  tagline: 'Building Ideas into Intelligent Solutions',
  about: [
    "Recently graduated in Computer Science, I'm eager to turn what I've learned into meaningful work and keep pushing beyond what I already know.",
    'My interests span web and mobile development, with a growing focus on deep learning and research. I enjoy solving practical problems, exploring new ideas, and building solutions that make a difference.',
    "I'm at the start of my professional journey, with a lot left to learn and plenty I want to achieve. I'm looking forward to taking on bigger challenges, growing through experience, and seeing how far curiosity and consistent effort can take me.",
  ],
  contactNote:
    "Always curious, always exploring what's next. Open to creative collaborations, ambitious ideas, and building something meaningful. Let's connect.",
}

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

// `meta` is the small text on the right of each row.
export const work = [
  {
    id: 'datana',
    title: 'Datana',
    kind: 'Mobile and web platform for a client',
    meta: 'Sep 2025 – Present',
    status: 'Live, maintained by me',
    summary:
      'Built end to end for a business client: a field app, an admin dashboard, a live deployment, and the support that keeps it running.',
    points: [
      'React Native app for collecting data in the field, with separate admin and employee interfaces.',
      'Web dashboard where admins manage, search and report on everything collected.',
      "Saves collected contacts directly to the admin's phone.",
      'Gathered requirements from the client, tested the system, and keep the live product updated and supported.',
    ],
    stack: ['React Native', 'Firebase', 'Web dashboard'],
  },
  {
    id: 'cad',
    title: 'Coronary artery disease detection',
    kind: 'Research with NICVD',
    meta: 'Jun 2026 – Nov 2026',
    status: 'Manuscript under journal review',
    summary:
      'Deep learning models that detect coronary artery disease from RGB and thermal facial images, built together with doctors and engineers.',
    points: [
      'Developed and evaluated deep learning models on RGB and thermal facial images.',
      'Prepared the research datasets and analysed model performance for publication.',
      'Worked in a team of doctors and engineers.',
    ],
    stack: ['Deep learning', 'Computer vision', 'PyTorch'],
  },
  {
    id: 'solar',
    title: 'Solar panel defect detection',
    kind: 'Research at North South University',
    meta: 'May 2026 – Sep 2026',
    status: 'Manuscript under journal review',
    summary: 'A computer vision model that finds defects in industrial solar panels.',
    points: [
      'Built and evaluated a deep learning model for defect detection on industrial solar panels.',
      'Prepared the dataset and analysed results for publication.',
    ],
    stack: ['Deep learning', 'Computer vision'],
  },
]

export const projects = [
  {
    id: 'cloud',
    github: true,
    title: 'Unified Cloud Storage Platform',
    kind: 'Web application',
    meta: 'Full stack',
    summary:
      'One workspace for many cloud accounts. Link as many Google Drive and Dropbox accounts as you need and use their free space as a single, larger drive.',
    points: [
      'See your combined storage at a glance and manage every file from one interface.',
      'Uploads are balanced across accounts automatically, so no single account fills up first.',
      'Secure sign-in for each service. It saves people from paying for bigger storage plans.',
    ],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Google Drive API', 'Dropbox API', 'OAuth 2.0'],
  },
  {
    id: 'hotel',
    github: true,
    title: 'Hotel Crown Management System',
    kind: 'Hotel website and admin system',
    meta: 'PHP + MySQL',
    summary:
      'A hotel website guests can book through, with one admin area that runs the whole property behind it.',
    points: [
      'Guests browse rooms, amenities and the restaurant menu, then send booking details.',
      'Staff track bookings, guests, payments, restaurant and amenity billing, and live room availability.',
      'Replaces scattered paperwork with one system the whole hotel can use.',
    ],
    stack: ['PHP', 'MySQL', 'HTML', 'CSS'],
  },
  {
    id: 'movies',
    github: true,
    title: 'Movie Recommendation System',
    kind: 'Machine learning',
    meta: 'Python',
    summary:
      'A recommender that does not trust a single method. It compares six approaches to find the movies a person is most likely to enjoy.',
    points: [
      'Learns from plot, genres, cast, director and ratings.',
      'Tests text similarity, hybrid scoring, genre classification and clustering side by side.',
      'Shows which approach gives the best suggestions, not just one that works.',
    ],
    stack: ['Python', 'TF-IDF', 'KNN', 'SVM', 'K-means'],
  },
  {
    id: 'auction',
    github: true,
    title: 'Football Player Auction',
    kind: 'Terminal application',
    meta: 'Java',
    summary:
      'A full football player auction that runs from the command line. It turns a noisy, manual event into a clear and fair process.',
    points: [
      'Create teams, add players with positions and base prices, and run the auction.',
      'Tracks every bid and assigns each player to the winning team.',
    ],
    stack: ['Java', 'OOP'],
  },
  {
    id: 'nationid',
    github: true,
    title: 'NationID Recorder',
    kind: 'Terminal application',
    meta: 'C',
    summary:
      'A fast, lightweight record system for national ID data. Add, find, review and remove citizen records in seconds.',
    points: [
      'Search by name or ID and view every record on demand.',
      'Data is saved between sessions, so nothing is lost when the program closes.',
    ],
    stack: ['C', 'File handling'],
  },
]

export const stack = [
  { label: 'Languages', items: ['Python', 'JavaScript', 'PHP', 'Java', 'C', 'C++', 'SQL'] },
  { label: 'Frontend and mobile', items: ['React', 'React Native', 'Tailwind CSS', 'HTML', 'CSS'] },
  {
    label: 'Backend and data',
    items: ['Node.js', 'Express.js', 'REST APIs', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firebase'],
  },
  {
    label: 'AI and ML',
    items: ['PyTorch', 'OpenCV', 'CNN', 'RNN', 'GRU', 'Transformers', 'Vision Transformer', 'Reinforcement learning'],
  },
  {
    label: 'Foundations',
    items: ['OOP', 'Data structures', 'Database design', 'Technical documentation'],
  },
  { label: 'Tools', items: ['Git', 'GitHub'] },
]

export const education = [
  {
    school: 'North South University',
    degree: 'B.Sc. in Computer Science and Engineering',
    years: '2022 – 2026',
  },
  {
    school: 'Rajuk Uttara Model College',
    degree: 'Higher Secondary Certificate',
    years: '2018 – 2020',
  },
  {
    school: 'Monipur High School and College',
    degree: 'Secondary School Certificate',
    years: '2016 – 2018',
  },
]
