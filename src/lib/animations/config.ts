export const luxuryEasing = [0.25, 0.1, 0.25, 1] as const; // Subtle, smooth luxury curve

export const animationConfig = {
  duration: {
    micro: 0.2, // Buttons, hovers
    short: 0.4, // Small reveals
    medium: 0.8, // Section reveals
    long: 1.2, // Page transitions
  },
  ease: {
    standard: luxuryEasing,
    smooth: [0.4, 0, 0.2, 1] as const, // Very organic
  },
  motion: {
    // Shared variants for section reveals to keep everything uniform
    revealUp: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: luxuryEasing,
        },
      },
    },
    // Shared variants for fade ins
    fadeIn: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: luxuryEasing,
        },
      },
    },
  },
};
