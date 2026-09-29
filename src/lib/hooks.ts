import { useCallback, useEffect, useRef, useState } from 'react'
import type { Lang } from '../content'

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useLang(): [Lang, (l: Lang) => void] {
  const [lang, set] = useState<Lang>(() => {
    try {
      const v = localStorage.getItem('scl_lang')
      if (v === 'FR' || v === 'EN') return v
    } catch { /* storage blocked */ }
    // French-speaking browsers land on the French version by default.
    return navigator.language?.toLowerCase().startsWith('fr') ? 'FR' : 'EN'
  })
  const setLang = useCallback((l: Lang) => {
    try { localStorage.setItem('scl_lang', l) } catch { /* storage blocked */ }
    set(l)
  }, [])
  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase()
  }, [lang])
  return [lang, setLang]
}

export function useTheme(): ['light' | 'dark', () => void] {
  const [theme, set] = useState<'light' | 'dark'>(() => {
    try {
      const v = localStorage.getItem('scl_theme')
      if (v === 'dark' || v === 'light') return v
    } catch { /* storage blocked */ }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('scl_theme', theme) } catch { /* storage blocked */ }
  }, [theme])
  const toggle = useCallback(() => set(t => (t === 'dark' ? 'light' : 'dark')), [])
  return [theme, toggle]
}

/** Adds `.in` once the element scrolls into view. */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReduced()) { setShown(true); return }
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) { setShown(true); obs.disconnect() }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, shown, className: `reveal${shown ? ' in' : ''}` }
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
export function useChartReveal(duration = 900) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [p, setP] = useState(0)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReduced()) { setP(1); return }
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting || started.current) return
        started.current = true
        obs.disconnect()
        const t0 = performance.now()
        const step = (t: number) => {
          const q = Math.min(1, (t - t0) / duration)
          setP(1 - Math.pow(1 - q, 3))
          if (q < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      })
    }, { threshold: 0.25 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [duration])
  return { ref, p }
}
