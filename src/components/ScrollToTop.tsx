import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const reducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: reducedMotion() ? 'auto' : 'instant' })
  }, [pathname, hash])

  return null
}