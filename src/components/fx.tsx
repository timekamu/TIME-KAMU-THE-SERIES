import type { Variants, Transition } from 'framer-motion';

// ==========================================
// TIME KAMU — MOTION DESIGN SYSTEM
// ==========================================

// Premium cinematic easing curve.
export const EASE = [
  0.22,
  1,
  0.36,
  1,
] as const;

// Standard transitions.
export const TRANSITION: Transition = {
  duration: 0.8,
  ease: EASE,
};

export const FAST_TRANSITION: Transition = {
  duration: 0.35,
  ease: EASE,
};

export const SLOW_TRANSITION: Transition = {
  duration: 1.2,
  ease: EASE,
};

// ==========================================
// FADE ANIMATIONS
// ==========================================

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: TRANSITION,
  },

  exit: {
    opacity: 0,
    transition: FAST_TRANSITION,
  },
};

// ==========================================
// VERTICAL REVEAL
// ==========================================

export const revealUp: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.85,
      ease: EASE,
    },
  },

  exit: {
    opacity: 0,
    y: -20,

    transition: FAST_TRANSITION,
  },
};

export const revealDown: Variants = {
  hidden: {
    opacity: 0,
    y: -35,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: TRANSITION,
  },
};

// ==========================================
// SCALE ANIMATIONS
// ==========================================

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.88,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.9,
      ease: EASE,
    },
  },

  exit: {
    opacity: 0,
    scale: 0.94,

    transition: FAST_TRANSITION,
  },
};

// ==========================================
// CINEMATIC HERO
// ==========================================

export const heroReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 65,
    filter: 'blur(12px)',
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',

    transition: {
      duration: 1.15,
      ease: EASE,
    },
  },
};

// ==========================================
// STAGGER CONTAINER
// ==========================================

export const staggerContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

// ==========================================
// STAGGER CHILDREN
// ==========================================

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: EASE,
    },
  },
};

// ==========================================
// MODAL ANIMATION
// ==========================================

export const modalReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 20,
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,

    transition: {
      duration: 0.45,
      ease: EASE,
    },
  },

  exit: {
    opacity: 0,
    scale: 0.97,
    y: 12,

    transition: {
      duration: 0.25,
      ease: 'easeInOut',
    },
  },
};

// ==========================================
// SLIDE ANIMATIONS
// ==========================================

export const slideLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: TRANSITION,
  },

  exit: {
    opacity: 0,
    x: -35,

    transition: FAST_TRANSITION,
  },
};

export const slideRight: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: TRANSITION,
  },
};

// ==========================================
// HOVER EFFECTS
// ==========================================

export const cardHover = {
  rest: {
    y: 0,
    scale: 1,
  },

  hover: {
    y: -7,
    scale: 1.025,

    transition: {
      duration: 0.35,
      ease: EASE,
    },
  },
};

export const buttonHover = {
  rest: {
    scale: 1,
  },

  hover: {
    scale: 1.045,

    transition: {
      duration: 0.25,
      ease: EASE,
    },
  },

  tap: {
    scale: 0.96,
  },
};

// ==========================================
// TEXT REVEAL
// ==========================================

export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: '100%',
  },

  visible: {
    opacity: 1,
    y: '0%',

    transition: {
      duration: 0.9,
      ease: EASE,
    },
  },
};

// ==========================================
// CINEMATIC BACKDROP
// ==========================================

export const backdropReveal: Variants = {
  hidden: {
    opacity: 0,
    backdropFilter: 'blur(0px)',
  },

  visible: {
    opacity: 1,
    backdropFilter: 'blur(12px)',

    transition: {
      duration: 0.45,
    },
  },

  exit: {
    opacity: 0,

    transition: {
      duration: 0.3,
    },
  },
};

// ==========================================
// PAGE TRANSITION
// ==========================================

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 18,
    filter: 'blur(8px)',
  },

  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',

    transition: {
      duration: 0.75,
      ease: EASE,
    },
  },

  exit: {
    opacity: 0,
    y: -12,

    transition: {
      duration: 0.3,
    },
  },
};

// ==========================================
// FLOATING EFFECT
// ==========================================

export const floating = {
  y: [0, -10, 0],

  transition: {
    duration: 5,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

// ==========================================
// AMBIENT PULSE
// ==========================================

export const ambientPulse = {
  opacity: [0.35, 0.75, 0.35],
  scale: [1, 1.08, 1],

  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};
