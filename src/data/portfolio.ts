/**
 * TIME KAMU — THE SERIES
 * Portfolio data by INDRAJIT
 *
 * Edit this file to update portfolio content.
 */

// ==========================================
// TYPES
// ==========================================

export type Palette = {
  from: string;
  via: string;
  to: string;
  accent: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export type Certification = {
  issuer: string;
  name: string;
  link: string;
};

export type Skill = {
  name: string;
  mono: string;
  note?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export type TopPick = {
  label: string;
  title: string;
  detail: string;
  palette: Palette;
};

export type IntroSlide = {
  kicker: string;
  title: string;
  lines: string[];
  chips?: string[];
};

export type ProfileId =
  | 'indrajit'
  | 'client'
  | 'creator'
  | 'editor';

export type SectionId =
  | 'about'
  | 'journey'
  | 'originals'
  | 'picks'
  | 'skills'
  | 'moments'
  | 'story';

// ==========================================
// COLOR PALETTES
// ==========================================

const crimson: Palette = {
  from: '#24060b',
  via: '#780d25',
  to: '#090609',
  accent: '#ff3155',
};

const amber: Palette = {
  from: '#201006',
  via: '#754018',
  to: '#090706',
  accent: '#ffb547',
};

const ocean: Palette = {
  from: '#071521',
  via: '#123d59',
  to: '#05080d',
  accent: '#4cc9ff',
};

const violet: Palette = {
  from: '#160a27',
  via: '#48206c',
  to: '#08060d',
  accent: '#bd8aff',
};

const jade: Palette = {
  from: '#061b13',
  via: '#125b40',
  to: '#050a08',
  accent: '#46e3a8',
};

// ==========================================
// BRAND PROFILE
// ==========================================

export const profile = {
  fullName: 'Indrajit Bhunia',
  displayName: 'INDRAJIT',
  firstName: 'INDRA',
  seriesTag: 'THE SERIES',
  originalLabel: 'A TIME KAMU ORIGINAL',

  role: 'Video Editor & Digital Creator',

  tagline: [
    'Video Editor',
    'Motion Designer',
    'Digital Creator',
  ],

  intro:
    'I am Indrajit Bhunia, the creator behind TIME KAMU. I create cinematic video edits, motion graphics, 2D animations and visual stories that turn imagination into memorable experiences.',

  location: 'Tamluk, Purba Medinipur, West Bengal, India',

  email: '',

  links: {
    instagram: 'https://www.instagram.com/time.kamu/',
    youtube: 'https://www.youtube.com/@time.kamu',
    github: 'https://github.com/',
    linkedin: '',
  },

  resumePdf: '',

  portrait: {
    src: '/assets/indra-portrait.webp',
    srcSet: '/assets/indra-portrait.webp',
    alt: 'INDRAJIT — TIME KAMU creator portrait',
  },

  interests: [
    'Cinematic Editing',
    'Motion Graphics',
    '2D Animation',
    'Visual Storytelling',
    'Creative Direction',
  ],
};

// ==========================================
// EDUCATION
// ==========================================

export const education = [
  {
    school: 'Engineering Studies',
    place: 'West Bengal, India',
    degree: 'Engineering',
    period: 'Present',
    score: 'Engineering',
  },
];

// ==========================================
// EXPERIENCE
// ==========================================

export const experience = [
  {
    company: 'TIME KAMU',
    role: 'Independent Video Editor & Creator',
    place: 'West Bengal, India',
    period: 'Ongoing',
    points: [
      'Creating cinematic edits and visual content for digital platforms.',
      'Developing motion graphics, 2D animation and creative video concepts.',
      'Building a personal editing brand through TIME KAMU.',
    ],
  },
];

// ==========================================
// PROJECTS — TIME KAMU ORIGINALS
// ==========================================

export const projects: Project[] = [
  {
    id: 'cinematic-edits',
    title: 'Cinematic Edits',
    year: 'Selected Work',
    genre: 'VIDEO EDITING • CINEMATIC',
    logline:
      'Cinematic visual storytelling through transitions, pacing, colour and sound design.',

    stack: [
      'Alight Motion',
      'Colour Grading',
      'Transitions',
      'Sound Design',
    ],

    build: [
      'A collection of cinematic editing concepts focused on visual storytelling, rhythm, transitions and atmosphere.',
      'Designed to showcase editing style, composition and creative direction.',
    ],

    features: [
      'Cinematic transitions',
      'Colour grading',
      'Sound synchronization',
      'Visual storytelling',
    ],

    metrics: [],

    palette: crimson,
    motif: 'shield',
  },

  {
    id: 'motion-graphics',
    title: 'Motion Graphics',
    year: 'Selected Work',
    genre: 'MOTION DESIGN • VFX',

    logline:
      'Dynamic motion graphics, typography and visual effects for engaging digital content.',

    stack: [
      'Alight Motion',
      'Keyframe Animation',
      'Typography',
      'Visual Effects',
    ],

    build: [
      'Motion-based visual experiments combining typography, movement and graphic elements.',
      'Focused on smooth animation, visual rhythm and polished presentation.',
    ],

    features: [
      'Keyframe animation',
      'Animated typography',
      'Motion transitions',
      'Visual effects',
    ],

    metrics: [],

    palette: violet,
    motif: 'flow',
  },

  {
    id: 'two-d-animation',
    title: '2D Animation',
    year: 'Selected Work',
    genre: 'ANIMATION • STORYTELLING',

    logline:
      'Creative 2D animation concepts built around characters, scenes and visual storytelling.',

    stack: [
      '2D Animation',
      'Alight Motion',
      'Scene Design',
      'Compositing',
    ],

    build: [
      'Original animation concepts designed to bring visual ideas and stories to life.',
      'Combines scene composition, movement and editing into a single visual experience.',
    ],

    features: [
      'Scene composition',
      'Character movement',
      'Animated elements',
      'Visual effects',
    ],

    metrics: [],

    palette: ocean,
    motif: 'tenants',
  },
];

// ==========================================
// ACHIEVEMENTS
// ==========================================

export const achievements: Achievement[] = [
  {
    id: 'time-kamu',
    title: 'TIME KAMU',
    org: 'Personal Creative Brand',
    detail:
      'A creative identity focused on video editing, motion graphics and visual storytelling.',
    laurel: 'Creator Brand',
    link: 'https://www.youtube.com/@time.kamu',
  },

  {
    id: 'visual-creator',
    title: 'Visual Storytelling',
    org: 'Creative Practice',
    detail:
      'Exploring cinematic editing, animation and motion-based visual expression.',
    laurel: 'Creative Journey',
  },
];

// ==========================================
// CERTIFICATIONS
// ==========================================

export const certifications: Certification[] = [];

// ==========================================
// SKILL CATEGORIES
// ==========================================

export const skillCategories: SkillCategory[] = [
  {
    id: 'editing',
    title: 'Video Editing',
    subtitle: 'The art of visual storytelling',

    skills: [
      { name: 'Alight Motion', mono: 'AM', note: 'Primary' },
      { name: 'Video Editing', mono: 'VE' },
      { name: 'Transitions', mono: 'TR' },
      { name: 'Colour Grading', mono: 'CG' },
      { name: 'Sound Sync', mono: 'SS' },
    ],
  },

  {
    id: 'motion',
    title: 'Motion Graphics',
    subtitle: 'Movement with imagination',

    skills: [
      { name: 'Keyframe Animation', mono: 'KA' },
      { name: 'Motion Design', mono: 'MD' },
      { name: 'Typography', mono: 'TP' },
      { name: 'Visual Effects', mono: 'FX' },
    ],
  },

  {
    id: 'animation',
    title: 'Animation',
    subtitle: 'Bringing ideas to life',

    skills: [
      { name: '2D Animation', mono: '2D' },
      { name: 'Scene Design', mono: 'SD' },
      { name: 'Compositing', mono: 'CP' },
      { name: 'Visual Storytelling', mono: 'VS' },
    ],
  },

  {
    id: 'creative',
    title: 'Creative Direction',
    subtitle: 'Ideas become experiences',

    skills: [
      { name: 'Creative Concepts', mono: 'CC' },
      { name: 'Visual Composition', mono: 'VC' },
      { name: 'Content Creation', mono: 'CR' },
      { name: 'Brand Identity', mono: 'BI' },
    ],
  },
];

// ==========================================
// SKILL EVIDENCE
// ==========================================

export const skillEvidence: Record<string, string[]> = {
  'Alight Motion': [
    'Cinematic Edits',
    'Motion Graphics',
    '2D Animation',
  ],

  'Video Editing': [
    'Cinematic Edits',
    'Visual Storytelling',
  ],

  'Colour Grading': [
    'Cinematic Edits',
  ],

  'Keyframe Animation': [
    'Motion Graphics',
    '2D Animation',
  ],

  '2D Animation': [
    'Animation Projects',
  ],

  'Motion Design': [
    'Motion Graphics',
  ],
};

// ==========================================
// JOURNEY — SEASONS & EPISODES
// ==========================================

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: 'The First Frame',

    synopsis:
      'Every creative journey begins with one idea and the courage to create.',

    episodes: [
      {
        code: 'S01 E01',
        title: 'The First Frame',
        description:
          'The beginning of a journey into editing and digital creativity.',

        tags: ['Creativity', 'Editing'],

        runtime: 'The Beginning',
        palette: amber,
      },

      {
        code: 'S01 E02',
        title: 'Finding the Style',
        description:
          'Exploring visual styles, transitions and the language of storytelling.',

        tags: ['Visual Style', 'Experimentation'],

        runtime: 'Creative Journey',
        palette: violet,
      },
    ],
  },

  {
    number: 2,
    title: 'The Editing Era',
    period: 'TIME KAMU',

    synopsis:
      'Developing a personal editing identity through cinematic visuals and motion.',

    episodes: [
      {
        code: 'S02 E01',
        title: 'Cinematic Vision',
        description:
          'Creating visual stories with cinematic editing techniques.',

        tags: ['Cinematic', 'Colour Grading'],

        runtime: 'Ongoing',
        palette: crimson,
      },

      {
        code: 'S02 E02',
        title: 'Motion in Motion',
        description:
          'Exploring keyframes, animation and dynamic motion graphics.',

        tags: ['Motion Graphics', 'Animation'],

        runtime: 'Ongoing',
        palette: ocean,
      },
    ],
  },

  {
    number: 3,
    title: 'The Next Chapter',
    period: 'Now Creating',

    synopsis:
      'A continuing journey of experimentation, storytelling and creative growth.',

    episodes: [
      {
        code: 'S03 E01',
        title: 'Beyond the Frame',
        description:
          'Exploring new ideas, creative formats and original visual experiences.',

        tags: ['Original Ideas', 'Visual Effects'],

        runtime: 'In Production',
        palette: jade,
      },
    ],
  },
];

// ==========================================
// TOP PICKS
// ==========================================

export const topPicks: TopPick[] = [
  {
    label: 'Signature Identity',
    title: 'TIME KAMU',
    detail: 'The creative brand behind the visuals',
    palette: crimson,
  },

  {
    label: 'Creative Focus',
    title: 'Cinematic Editing',
    detail: 'Storytelling through visuals',
    palette: amber,
  },

  {
    label: 'Visual Craft',
    title: 'Motion Graphics',
    detail: 'Movement, rhythm and design',
    palette: violet,
  },

  {
    label: 'Creative Medium',
    title: '2D Animation',
    detail: 'Ideas brought to life',
    palette: ocean,
  },

  {
    label: 'Editing Tool',
    title: 'Alight Motion',
    detail: 'A key part of the creative workflow',
    palette: jade,
  },
];

// ==========================================
// INTRO SEQUENCE
// ==========================================

export const introSlides: IntroSlide[] = [
  {
    kicker: 'The Creator',
    title: 'Meet INDRAJIT',

    lines: [
      'Video Editor & Digital Creator',
      'The creator behind TIME KAMU',
    ],

    chips: ['INDRA', 'TIME KAMU'],
  },

  {
    kicker: 'The Craft',
    title: 'Cinematic Vision',

    lines: [
      'Visual storytelling',
      'Transitions and colour',
      'Sound and rhythm',
    ],

    chips: ['Editing', 'Cinematic'],
  },

  {
    kicker: 'The Motion',
    title: 'Movement Matters',

    lines: [
      'Motion graphics',
      'Keyframe animation',
      'Dynamic visual effects',
    ],

    chips: ['Motion Design', 'Animation'],
  },

  {
    kicker: 'The Story',
    title: 'Beyond the Frame',

    lines: [
      '2D animation',
      'Creative concepts',
      'Original visual experiences',
    ],

    chips: ['2D', 'Creative'],
  },

  {
    kicker: 'The Brand',
    title: 'TIME KAMU',

    lines: [
      'Frame with imagination.',
      'Crafted by INDRAJIT.',
    ],

    chips: ['Now Creating'],
  },
];

// ==========================================
// VIEWER PROFILES
// ==========================================

const fullOrder: SectionId[] = [
  'about',
  'journey',
  'originals',
  'picks',
  'skills',
  'moments',
  'story',
];

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'indrajit',
    name: 'INDRA',
    blurb: 'The complete creative story',
    color: '#ff3155',
    order: fullOrder,
  },

  {
    id: 'client',
    name: 'Client',
    blurb: 'Projects and creative services first',
    color: '#ffb547',
    order: [
      'originals',
      'skills',
      'about',
      'picks',
      'journey',
      'moments',
      'story',
    ],
  },

  {
    id: 'creator',
    name: 'Creator',
    blurb: 'The story behind TIME KAMU',
    color: '#bd8aff',
    order: [
      'journey',
      'picks',
      'originals',
      'about',
      'skills',
      'moments',
      'story',
    ],
  },

  {
    id: 'editor',
    name: 'Editor',
    blurb: 'Editing skills and selected work',
    color: '#4cc9ff',
    order: [
      'skills',
      'originals',
      'picks',
      'journey',
      'about',
      'moments',
      'story',
    ],
  },
];

// ==========================================
// SECTION NAVIGATION METADATA
// ==========================================

export const sectionMeta: Record<
  SectionId,
  {
    nav: string;
    card: string;
    meta: string;
    palette: Palette;
  }
> = {
  about: {
    nav: 'About',
    card: 'About INDRA',
    meta: 'The creator behind TIME KAMU',
    palette: violet,
  },

  journey: {
    nav: 'Journey',
    card: 'Creative Journey',
    meta: `${seasons.length} Seasons`,
    palette: amber,
  },

  originals: {
    nav: 'Originals',
    card: 'Selected Work',
    meta: `${projects.length} Creative Collections`,
    palette: crimson,
  },

  picks: {
    nav: 'Top Picks',
    card: 'Creative Highlights',
    meta: 'Featured creative interests',
    palette: jade,
  },

  skills: {
    nav: 'Skills',
    card: 'Editing Skills',
    meta: `${skillCategories.length} Skill Categories`,
    palette: ocean,
  },

  moments: {
    nav: 'Highlights',
    card: 'Creative Highlights',
    meta: `${achievements.length} Brand Highlights`,
    palette: crimson,
  },

  story: {
    nav: 'Profile',
    card: 'The Full Story',
    meta: 'Creator profile and details',
    palette: violet,
  },
};
      
