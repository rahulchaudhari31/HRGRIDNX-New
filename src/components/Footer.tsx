import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'
import { Container } from './Container'
import { Logo } from './Logo'
import { GridBackground } from './GridBackground'
import { footer } from '../lib/content'

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com',
    path: 'M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z',
  },
  {
    label: 'X',
    href: 'https://x.com',
    path: 'M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z',
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    path: 'M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.82-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A9.76 9.76 0 0 0 22 12.25C22 6.58 17.52 2 12 2z',
  },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
  }

  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <GridBackground variant="light" className="mask-fade-t opacity-60" />
      <span className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-deep/50 blur-[120px]" />

      <Container className="relative pt-16 md:pt-20">
        {/* Brand + newsletter */}
        <div className="grid gap-12 pb-14 lg:grid-cols-2 lg:items-center">
          <div className="flex max-w-md flex-col items-start gap-5">
            <Logo className="text-paper" />
            <p className="text-sm leading-relaxed text-paper/60">{footer.blurb}</p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 text-paper/60 transition-colors hover:border-paper hover:bg-paper hover:text-ink"
                >
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-paper/10 bg-paper/[0.04] p-6 backdrop-blur-sm sm:p-8">
            <h3 className="font-display text-2xl text-paper">{footer.newsletter.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-paper/60">{footer.newsletter.body}</p>
            {subscribed ? (
              <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-mint px-4 py-2 text-sm font-medium text-deep">
                <Check className="h-4 w-4" />
                {footer.newsletter.thanks}
              </p>
            ) : (
              <form onSubmit={submit} className="mt-5 flex flex-col gap-3 sm:flex-row">
                <label htmlFor="newsletter-email" className="sr-only">
                  {footer.newsletter.placeholder}
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={footer.newsletter.placeholder}
                  className="h-12 flex-1 rounded-full border border-paper/15 bg-paper/[0.06] px-5 text-sm text-paper outline-none transition-colors placeholder:text-paper/35 focus:border-mint"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-coral px-6 text-sm font-semibold text-paper transition-colors hover:bg-[#e85a3b]"
                >
                  {footer.newsletter.button}
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid gap-10 border-t border-paper/10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {footer.columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/40">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) =>
                  link.href ? (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-paper/60 transition-colors hover:text-paper"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3 w-3 text-paper/30" />
                      </a>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <Link
                        to={link.to ?? '/'}
                        className="inline-flex items-center gap-1.5 text-sm text-paper/60 transition-colors hover:text-paper"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-paper/10 py-8 text-xs text-paper/40 sm:flex-row sm:items-center">
          <span>{footer.legal}</span>
          <span className="tracking-[0.2em]">SIX ROLES · NINE MODULES · ONE SOURCE OF TRUTH</span>
        </div>
      </Container>
    </footer>
  )
}