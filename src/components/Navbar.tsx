import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Container } from './Container'
import { Logo } from './Logo'
import { Button } from './Button'
import { navLinks, loginUrl } from '../lib/content'
import { cn } from '../lib/cn'

const easing = [0.16, 1, 0.3, 1] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 8)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'border-b border-ink/[0.06] bg-paper/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-[4.5rem] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink',
                  isActive && 'text-ink',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={loginUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center rounded-full px-4 text-sm font-medium text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink"
          >
            Login
          </a>
          <Button to="/contact" variant="primary" size="sm">
            Start free trial
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: easing }}
            className="overflow-hidden border-t border-ink/[0.06] bg-paper md:hidden"
          >
            <Container className="flex flex-col gap-2 py-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4, ease: easing }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-lg font-medium hover:bg-mint/60"
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <Button to="/contact" variant="primary" className="w-full" onClick={() => setOpen(false)}>
                  Start free trial
                </Button>
                <a
                  href={loginUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 w-full items-center justify-center rounded-full border border-ink/15 text-sm font-medium text-ink"
                >
                  Login
                </a>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}