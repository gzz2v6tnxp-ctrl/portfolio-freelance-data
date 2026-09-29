import About from './components/About'
import Capabilities from './components/Capabilities'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Signals from './components/Signals'
import Work from './components/Work'
import { DICT } from './content'
import { useLang, useTheme } from './lib/hooks'
import { useEffect } from 'react'

export default function App() {
  const [lang, setLang] = useLang()
  const [theme, toggleTheme] = useTheme()
  const d = DICT[lang]

  // The browser resolves a deep link's hash before React mounts the sections,
  // so re-apply it once they exist.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView()
    })
  }, [])

  return (
    <div className="app">
      <Header d={d} lang={lang} setLang={setLang} theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero d={d} lang={lang} />
        <Signals d={d} />
        <Work d={d} />
        <Experience d={d} />
        <Capabilities d={d} />
        <About d={d} />
      </main>
      <Footer d={d} />
    </div>
  )
}
