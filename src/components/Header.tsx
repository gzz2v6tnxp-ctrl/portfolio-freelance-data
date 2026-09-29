import type { Dict, Lang } from '../content'
import { NAME } from '../content'
import { useScrollSpy } from '../lib/hooks'

const SECTIONS = ['work', 'experience', 'capabilities', 'about', 'contact']
const LANGS: Lang[] = ['FR', 'EN']

interface Props {
  d: Dict
  lang: Lang
  setLang: (l: Lang) => void
  theme: 'light' | 'dark'
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
    <header className="header">
      <div className="shell header-inner">
        <a className="brand" href="#top">{NAME}</a>

        <nav className="nav">
          {items.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'on' : undefined}>
              {label}
            </a>
          ))}
        </nav>

        <div className="tools">
          <div className="lang" aria-label="Langue / Language">
            {LANGS.map(l => (
              <button
                key={l}
                type="button"
                className={lang === l ? 'on' : undefined}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
              >
                {l}
              </button>
            ))}
          </div>
          {/* The label names the theme the click switches to. */}
          <button type="button" className="theme-btn" onClick={toggleTheme} aria-label="Clair / sombre">
            {theme === 'dark' ? d.theme_light : d.theme_dark}
          </button>
        </div>
      </div>
    </header>
  )
}
