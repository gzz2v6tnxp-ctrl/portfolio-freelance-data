import { motion } from 'framer-motion'
import type { Dict, Lang } from '../content'
import { NAME } from '../content'
import { THEMES, useScrollSpy } from '../lib/hooks'
import type { Theme } from '../lib/hooks'
import { SPRING_SNAPPY } from '../lib/motion'
import LanguageSwitch from './LanguageSwitch'
import ThemeToggle from './ThemeToggle'

const SECTIONS = ['work', 'experience', 'capabilities', 'about', 'contact']

interface Props {
  d: Dict
  lang: Lang
  setLang: (l: Lang) => void
  theme: Theme
  toggleTheme: () => void
}

export default function Header({ d, lang, setLang, theme, toggleTheme }: Props) {
  const active = useScrollSpy(SECTIONS)
  const items = [
    ['work', d.nav_work],
    ['experience', d.nav_exp],
    ['capabilities', d.nav_stack],
    ['about', d.nav_about],
    ['contact', d.nav_contact],
  ] as const

  return (
    <motion.header
      className="header"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="shell header-inner">
        <a className="brand" href="#top">{NAME}</a>

        <nav className="nav">
          {items.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'on' : undefined}>
              {label}
              {active === id && (
                <motion.span className="nav-indicator" layoutId="nav-indicator" transition={SPRING_SNAPPY} />
              )}
            </a>
          ))}
        </nav>

        <div className="tools">
          <LanguageSwitch lang={lang} onChange={setLang} />
          <ThemeToggle
            theme={theme}
            onToggle={toggleTheme}
            label={theme === THEMES.DARK ? d.theme_light : d.theme_dark}
          />
        </div>
      </div>
    </motion.header>
  )
}
