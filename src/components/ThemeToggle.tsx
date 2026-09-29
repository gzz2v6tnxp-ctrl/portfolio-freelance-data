import { AnimatePresence, motion } from 'framer-motion'
import { THEMES } from '../lib/hooks'
import type { Theme } from '../lib/hooks'
import { MoonIcon, SunIcon } from './icons'

interface Props {
  theme: Theme
  onToggle: () => void
  /** Names the theme the click switches to. */
  label: string
}

const ICON_SWAP_TRANSITION = { duration: 0.3, ease: [0.16, 1, 0.3, 1] } as const

export default function ThemeToggle({ theme, onToggle, label }: Props) {
  const isDark = theme === THEMES.DARK
  return (
    <motion.button
      type="button"
      className="icon-btn"
      onClick={onToggle}
      aria-label={label}
      title={label}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.92 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          className="icon-btn-glyph"
          initial={{ rotate: isDark ? -90 : 90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: isDark ? 90 : -90, opacity: 0, scale: 0.6 }}
          transition={ICON_SWAP_TRANSITION}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  )
}
