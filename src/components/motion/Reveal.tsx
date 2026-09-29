import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import { REVEAL_VIEWPORT, revealVariants, staggerContainerVariants } from '../../lib/motion'

const MOTION_TAGS = { div: motion.div, article: motion.article } as const

type RevealTag = keyof typeof MOTION_TAGS

interface RevealProps extends HTMLMotionProps<'div'> {
  as?: RevealTag
  /** Orchestrates `RevealItem` children instead of animating itself. */
  stagger?: boolean
}

/** Fades and lifts its content the first time it scrolls into view. */
export function Reveal({ as = 'div', stagger = false, children, ...rest }: RevealProps) {
  const Component = MOTION_TAGS[as]
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={REVEAL_VIEWPORT}
      variants={stagger ? staggerContainerVariants : revealVariants}
      {...rest}
    >
      {children}
    </Component>
  )
}

/** Child of a staggered `Reveal`; inherits the parent's variant state. */
export function RevealItem({ as = 'div', children, ...rest }: Omit<RevealProps, 'stagger'>) {
  const Component = MOTION_TAGS[as]
  return (
    <Component variants={revealVariants} {...rest}>
      {children}
    </Component>
  )
}
