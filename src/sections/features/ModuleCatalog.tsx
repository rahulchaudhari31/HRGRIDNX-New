import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'
import { Container } from '../../components/Container'
import { Reveal } from '../../components/Reveal'
import { Icon } from '../../lib/icons'
import { features, modules } from '../../lib/content'
import { cn } from '../../lib/cn'

export function ModuleCatalog() {
  const [active, setActive] = useState(modules[0]?.id ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )
    modules.forEach((m) => {
      const el = document.getElementById(m.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-20 md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
          {/* sticky sidebar */}
          <aside className="hidden lg:block">
            <nav
              aria-label="Modules"
              className="sticky top-28 rounded-2xl border border-ink/[0.07] bg-paper/80 p-4 backdrop-blur-sm"
            >
              <p className="px-2 pb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/40">
                The modules
              </p>
              <ul className="flex flex-col gap-1">
                {modules.map((mod) => (
                  <li key={mod.id}>
                    <a
                      href={`#${mod.id}`}
                      className={cn(
                        'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all',
                        active === mod.id
                          ? 'bg-ink text-paper'
                          : 'text-ink/60 hover:bg-ink/5 hover:text-ink',
                      )}
                    >
                      <Icon
                        name={mod.icon}
                        className={cn('h-4 w-4', active === mod.id ? 'text-mint' : 'text-deep')}
                      />
                      {mod.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#permission-note"
                className="mx-2 mt-3 block rounded-xl border border-deep/15 bg-mint/40 px-3 py-2.5 text-xs font-medium text-deep transition-colors hover:bg-mint/70"
              >
                Permission keys, not guesswork →
              </a>
            </nav>
          </aside>

          {/* detailed blocks */}
          <div className="flex flex-col gap-6">
            {modules.map((mod, i) => (
              <Reveal key={mod.id} delay={i * 0.04}>
                <article
                  id={mod.id}
                  className="group relative scroll-mt-28 overflow-hidden rounded-2xl border border-ink/[0.07] bg-paper/70 p-7 transition-all duration-300 hover:border-deep/20 hover:shadow-lift sm:p-9"
                >
                  <div
                    className="grid-lines-sm absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-40"
                    aria-hidden="true"
                  />

                  <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-7">
                    <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-mint text-deep">
                      <Icon name={mod.icon} className="h-6 w-6" />
                    </span>

                    <div className="flex-1">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/40">
                        Module {String(i + 1).padStart(2, '0')} · {mod.id}
                      </span>
                      <h2 className="mt-1.5 font-display text-3xl text-ink sm:text-4xl">
                        {mod.name}
                      </h2>
                      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/65 md:text-base">
                        {mod.detail}
                      </p>
                    </div>
                  </div>

                  <ul className="relative mt-7 grid gap-3 border-t border-ink/[0.06] pt-6 sm:grid-cols-3">
                    {mod.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-ink/75">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral/10 text-deep">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}

            <Reveal delay={0.1}>
              <div
                id="permission-note"
                className="relative mt-2 scroll-mt-28 overflow-hidden rounded-2xl border border-deep/15 bg-mint/50 p-8 md:p-10"
              >
                <div className="grid-lines-mint absolute inset-0 opacity-40" aria-hidden="true" />
                <div className="relative flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-xl">
                    <h3 className="font-display text-2xl text-deep">Permission keys, not guesswork</h3>
                    <p className="mt-2 text-sm leading-relaxed text-deep/75">
                      {features.permissionNote}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['employee.create', 'leave.approve.level1', 'payroll.release', 'expense.approve'].map(
                      (key) => (
                        <code
                          key={key}
                          className="rounded-lg border border-deep/15 bg-paper px-3 py-1.5 font-mono text-xs text-deep"
                        >
                          {key}
                        </code>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}