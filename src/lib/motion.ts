import type { Transition, Variants } from 'framer-motion'

/** Expo-out: fast start, long soft landing. Shared by every entrance. */
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

export const REVEAL_TRANSITION: Transition = { duration: 0.7, ease: EASE_OUT_EXPO }

export const SPRING_SNAPPY: Transition = { type: 'spring', stiffness: 500, damping: 34, mass: 0.6 }

export const REVEAL_VIEWPORT = { once: true, margin: '0px 0px -10% 0px' } as const

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: REVEAL_TRANSITION },
}

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: EASE_OUT_EXPO } },
}
