import { MotionConfig, useAnimate } from 'framer-motion'
import { useEffect, useRef } from 'react'
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

export default function App() {
  const [lang, setLang] = useLang()
  const [theme, toggleTheme] = useTheme()
  const d = DICT[lang]
  const [mainScope, animateMain] = useAnimate<HTMLElement>()
  const isFirstRender = useRef(true)

  // Crossfade the translated copy in place: remounting <main> would detach the
  // scroll-spy observers and replay every scroll reveal.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    animateMain(mainScope.current, { opacity: [0, 1] }, { duration: 0.35 })
  }, [lang, animateMain, mainScope])

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
    <MotionConfig reducedMotion="user">
      <div className="app">
        <Header d={d} lang={lang} setLang={setLang} theme={theme} toggleTheme={toggleTheme} />
        <main ref={mainScope}>
          <Hero d={d} lang={lang} />
          <Signals d={d} />
          <Work d={d} />
          <Experience d={d} />
          <Capabilities d={d} />
          <About d={d} />
        </main>
        <Footer d={d} />
      </div>
    </MotionConfig>
  )
}
