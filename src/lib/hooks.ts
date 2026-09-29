import { animate, useInView, useReducedMotion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { Lang } from '../content'
import { EASE_OUT_EXPO } from './motion'

export const THEMES = { LIGHT: 'light', DARK: 'dark' } as const
export type Theme = (typeof THEMES)[keyof typeof THEMES]

const LANG_STORAGE_KEY = 'scl_lang'
const THEME_STORAGE_KEY = 'scl_theme'

export function useLang(): [Lang, (l: Lang) => void] {
  const [lang, set] = useState<Lang>(() => {
    try {
      const v = localStorage.getItem(LANG_STORAGE_KEY)
      if (v === 'FR' || v === 'EN') return v
    } catch { /* storage blocked */ }
    // French-speaking browsers land on the French version by default.
    return navigator.language?.toLowerCase().startsWith('fr') ? 'FR' : 'EN'
  })
  const setLang = useCallback((l: Lang) => {
    try { localStorage.setItem(LANG_STORAGE_KEY, l) } catch { /* storage blocked */ }
    set(l)
  }, [])
  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase()
  }, [lang])
  return [lang, setLang]
}

export function useTheme(): [Theme, () => void] {
  const [theme, set] = useState<Theme>(() => {
    try {
      const v = localStorage.getItem(THEME_STORAGE_KEY)
      if (v === THEMES.DARK || v === THEMES.LIGHT) return v
    } catch { /* storage blocked */ }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT
  })
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem(THEME_STORAGE_KEY, theme) } catch { /* storage blocked */ }
  }, [theme])
  const toggle = useCallback(() => set(t => (t === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)), [])
  return [theme, toggle]
}

/** Tracks which section id is currently in the viewport. */
export function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState('')
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [ids.join(',')]) // eslint-disable-line react-hooks/exhaustive-deps
  return active
}

/** Animates 0 → 1 once visible; drives chart mark growth. */
export function useChartReveal(durationSeconds = 0.9) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, amount: 0.25 })
  const prefersReducedMotion = useReducedMotion()
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    if (!inView || prefersReducedMotion) return
    const controls = animate(0, 1, { duration: durationSeconds, ease: EASE_OUT_EXPO, onUpdate: setProgress })
    return () => controls.stop()
  }, [inView, prefersReducedMotion, durationSeconds])
  return { ref, p: prefersReducedMotion ? 1 : progress }
}
