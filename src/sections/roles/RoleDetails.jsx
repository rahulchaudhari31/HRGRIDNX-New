import { Check, ListChecks } from 'lucide-react'
import { Container } from '../../components/Container'
import { Button } from '../../components/Button'
import { Reveal } from '../../components/Reveal'
import { Icon } from '../../lib/icons'
import { roles, rolesPage } from '../../lib/content'
import { cn } from '../../lib/cn'

function ResponsibilitiesCard({ dark, role }) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl border p-6 sm:p-7',
        dark ? 'border-paper/15 bg-paper/[0.06]' : 'border-ink/[0.08] bg-paper shadow-lift',
      )}
    >
      <div
        className={cn('absolute inset-0 opacity-40', dark ? 'grid-lines-light' : 'grid-lines-sm')}
        aria-hidden="true"
      />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span
            className={cn(
              'flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]',
              dark ? 'text-paper/60' : 'text-ink/50',
            )}
          >
            <ListChecks className={cn('h-4 w-4', dark ? 'text-coral' : 'text-deep')} />
            Typical responsibilities
          </span>
          <span
            className={cn(
              'rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider',
              dark ? 'bg-paper/10 text-paper/70' : 'bg-mint text-deep',
            )}
          >
            {role.name}
          </span>
        </div>

        <ul className="mt-6 flex flex-col gap-4">
          {role.can.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                className={cn(
                  'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                  dark ? 'bg-coral text-paper' : 'bg-deep text-paper',
                )}
              >
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span className={cn('text-sm leading-snug', dark ? 'text-paper/85' : 'text-ink/75')}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function RoleDetails() {
  return (
    <>
      <section className="relative py-16 md:py-20">
        <Container>
          <Reveal>
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
              <h2 className="font-display text-4xl leading-[1.05] text-ink sm:text-5xl md:text-[3.5rem]">
                One grid.{' '}
                <span className="italic text-deep">Six vantage points.</span>
              </h2>
              <p className="max-w-2xl text-pretty text-base leading-relaxed text-ink/65 sm:text-lg">
                {rolesPage.introBody}
              </p>
              <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
                <Button href="#admin" variant="outline" size="md">
                  See How Roles Work
                </Button>
                <Button to="/contact" variant="primary" size="md">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {roles.map((role, i) => {
        const dark = i % 2 === 0
        return (
          <section
            key={role.id}
            id={role.id}
            className={cn(
              'relative scroll-mt-24 overflow-hidden py-20 md:py-28',
              dark ? 'bg-deep' : 'bg-paper',
            )}
          >
            {dark ? (
              <span className="pointer-events-none absolute right-[-8rem] top-0 h-96 w-96 rounded-full bg-coral/10 blur-[130px]" />
            ) : (
              <span className="pointer-events-none absolute right-[-8rem] top-0 h-96 w-96 rounded-full bg-mint/60 blur-[130px]" />
            )}

            <Container className="relative">
              <Reveal>
                <div
                  className={cn(
                    'grid items-center gap-10 lg:grid-cols-2 lg:gap-16',
                    !dark && 'lg:[&>*:first-child]:order-2',
                  )}
                >
                  {/* responsibilities preview */}
                  <div className="relative">
                    <span
                      className={cn(
                        'font-display text-6xl italic sm:text-7xl',
                        dark ? 'text-paper/15' : 'text-ink/10',
                      )}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="-mt-8 sm:-mt-10">
                      <ResponsibilitiesCard dark={dark} role={role} />
                    </div>
                  </div>

                  {/* copy */}
                  <div className="flex flex-col items-start gap-5">
                    <span
                      className={cn(
                        'inline-flex h-14 w-14 items-center justify-center rounded-2xl',
                        dark ? 'bg-paper/10 text-mint' : 'bg-mint text-deep',
                      )}
                    >
                      <Icon name={role.icon} className="h-6 w-6" />
                    </span>

                    <div className="flex flex-col items-start gap-1">
                      <h2
                        className={cn(
                          'font-display text-4xl md:text-5xl',
                          dark ? 'text-paper' : 'text-ink',
                        )}
                      >
                        {role.name}
                      </h2>
                      <p
                        className={cn(
                          'text-xs font-semibold uppercase tracking-[0.18em]',
                          dark ? 'text-coral' : 'text-deep',
                        )}
                      >
                        {role.short}
                      </p>
                    </div>

                    <p
                      className={cn(
                        'max-w-xl text-base leading-relaxed md:text-lg',
                        dark ? 'text-paper/70' : 'text-ink/65',
                      )}
                    >
                      {role.summary}
                    </p>

                    <div
                      className={cn(
                        'rounded-xl border p-5',
                        dark ? 'border-paper/15 bg-paper/[0.06]' : 'border-ink/[0.07] bg-paper/70',
                      )}
                    >
                      <p
                        className={cn(
                          'text-xs font-semibold uppercase tracking-[0.18em]',
                          dark ? 'text-coral' : 'text-deep',
                        )}
                      >
                        Typical responsibilities
                      </p>
                      <ul className="mt-3 flex flex-col gap-2">
                        {role.can.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm">
                            <Check className={cn('mt-0.5 h-4 w-4 shrink-0', dark ? 'text-coral' : 'text-deep')} />
                            <span className={dark ? 'text-paper/80' : 'text-ink/70'}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {role.sees.map((mod) => (
                        <span
                          key={mod}
                          className={cn(
                            'rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-wider',
                            dark ? 'bg-paper/10 text-paper/75' : 'bg-mint text-deep/80',
                          )}
                        >
                          {mod}
                        </span>
                      ))}
                      <span
                        className={cn(
                          'rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider',
                          dark ? 'bg-coral text-paper' : 'bg-deep text-paper',
                        )}
                      >
                        {role.sees.length} views
                      </span>
                    </div>

                    <Button to={role.cta.to} variant={dark ? 'light' : 'dark'} size="md">
                      {role.cta.label}
                    </Button>
                  </div>
                </div>
              </Reveal>
            </Container>
          </section>
        )
      })}

      <section className="relative py-16">
        <Container>
          <Reveal>
            <p className="mx-auto max-w-2xl text-balance text-center text-sm leading-relaxed text-ink/50 md:text-base">
              {rolesPage.roleNote}
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
