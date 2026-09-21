import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, ChevronDown, Minus } from 'lucide-react'
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { PageHero } from '../sections/PageHero'
import { Reveal } from '../components/Reveal'
import { Cta } from '../sections/Cta'
import { pricing } from '../lib/content'
import { cn } from '../lib/cn'

const easing = [0.16, 1, 0.3, 1] as const

export function PricingPage() {
  const [annual, setAnnual] = useState(true)
  const [open, setOpen] = useState<number | null>(0)

  return (
    <>
      <PageHero
        eyebrow={pricing.eyebrow}
        titleA={pricing.titleA}
        titleB={pricing.titleB}
        description={pricing.description}
      />

      {/* plans + toggle */}
      <section className="relative py-16 md:py-24">
        <Container>
          <Reveal className="flex justify-center">
            <div className="relative inline-flex items-center rounded-full border border-ink/10 bg-paper/80 p-1">
              {(['monthly', 'yearly'] as const).map((cadence) => (
                <button
                  key={cadence}
                  type="button"
                  onClick={() => setAnnual(cadence === 'yearly')}
                  className={cn(
                    'relative rounded-full px-6 py-2 text-sm font-medium transition-colors',
                    (cadence === 'yearly') === annual
                      ? 'text-paper'
                      : 'text-ink/60 hover:text-ink',
                  )}
                >
                  {((cadence === 'yearly') === annual) && (
                    <motion.span
                      layoutId="billing-pill"
                      transition={{ duration: 0.35, ease: easing }}
                      className="absolute inset-0 rounded-full bg-ink"
                    />
                  )}
                  <span className="relative capitalize">{cadence}</span>
                </button>
              ))}
              <span
                className={cn(
                  'hidden rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wider transition-colors sm:inline',
                  annual ? 'bg-coral text-paper' : 'bg-coral/10 text-coral',
                )}
              >
                2 months free
              </span>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:items-stretch">
            {pricing.plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.08} className="h-full">
                <article
                  className={cn(
                    'relative flex h-full flex-col overflow-hidden rounded-2xl border p-8',
                    plan.highlight
                      ? 'border-deep bg-deep text-paper shadow-lift'
                      : 'border-ink/[0.07] bg-paper/70 text-ink',
                    plan.highlight && 'lg:-my-4 lg:py-12',
                  )}
                >
                  {plan.highlight ? (
                    <div className="grid-lines-light absolute inset-0 opacity-40" aria-hidden="true" />
                  ) : null}

                  <div className="relative flex flex-col items-start gap-4">
                    <span
                      className={cn(
                        'inline-flex items-center rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]',
                        plan.highlight ? 'bg-coral text-paper' : 'bg-mint text-deep',
                      )}
                    >
                      {plan.highlight ? 'Most popular' : `Plan 0${i + 1}`}
                    </span>

                    <h2 className="font-display text-3xl">{plan.name}</h2>
                    <p
                      className={cn(
                        'text-sm leading-relaxed',
                        plan.highlight ? 'text-paper/70' : 'text-ink/60',
                      )}
                    >
                      {plan.blurb}
                    </p>

                    <div
                      className={cn(
                        'flex items-end gap-1 py-2',
                        !plan.highlight && 'text-deep',
                      )}
                    >
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={annual ? 'yearly' : 'monthly'}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.25, ease: easing }}
                          className="font-display text-5xl"
                        >
                          {plan.price[annual ? 'yearly' : 'monthly']}
                        </motion.span>
                      </AnimatePresence>
                      <span
                        className={cn(
                          'pb-1 text-sm',
                          plan.highlight ? 'text-paper/60' : 'text-ink/50',
                        )}
                      >
                        {plan.per}
                      </span>
                    </div>
                    <p
                      className={cn(
                        'text-xs uppercase tracking-[0.16em]',
                        plan.highlight ? 'text-paper/50' : 'text-ink/40',
                      )}
                    >
                      {plan.cadence ?? (annual ? 'billed annually' : 'billed monthly')}
                    </p>
                  </div>

                  <ul className="relative mt-8 flex flex-1 flex-col gap-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check
                          className={cn(
                            'mt-0.5 h-4 w-4 shrink-0',
                            plan.highlight ? 'text-coral' : 'text-deep',
                          )}
                        />
                        <span className={plan.highlight ? 'text-paper/85' : 'text-ink/75'}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-8">
                    <Button
                      href={plan.href}
                      variant={plan.highlight ? 'primary' : 'outline'}
                      className="w-full"
                    >
                      {plan.cta}
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <p className="mt-10 text-center text-sm text-ink/50">{pricing.note}</p>
          </Reveal>
        </Container>
      </section>

      {/* comparison table */}
      <section className="relative pb-8">
        <Container>
          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-ink/[0.07] bg-paper/70">
              <table className="w-full min-w-[42rem] border-collapse text-left">
                <thead>
                  <tr className="border-b border-ink/[0.07]">
                    <th className="px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/40">
                      Compare plans
                    </th>
                    {pricing.plans.map((plan) => (
                      <th
                        key={plan.name}
                        className={cn(
                          'px-6 py-5 text-center',
                          plan.highlight && 'bg-deep',
                        )}
                      >
                        <span
                          className={cn(
                            'font-display text-lg',
                            plan.highlight ? 'text-paper' : 'text-ink',
                          )}
                        >
                          {plan.name}
                        </span>
                        <span
                          className={cn(
                            'block text-[10px] font-semibold uppercase tracking-[0.16em]',
                            plan.highlight ? 'text-coral' : 'text-ink/40',
                            'mt-0.5',
                          )}
                        >
                          {plan.price[annual ? 'yearly' : 'monthly']}
                          {plan.per ? ' /mo' : ''}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pricing.comparison.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-ink/[0.05] last:border-0"
                    >
                      <td className="px-6 py-4 text-sm text-ink/75">{row.feature}</td>
                      {(['starter', 'growth', 'enterprise'] as const).map((key) => {
                        const cell = row[key]
                        const highlight = key === 'growth'
                        return (
                          <td
                            key={key}
                            className={cn('px-6 py-4 text-center', highlight && 'bg-deep')}
                          >
                            {cell === true ? (
                              <span
                                className={cn(
                                  'inline-flex h-6 w-6 items-center justify-center rounded-full',
                                  highlight ? 'bg-coral/25 text-coral' : 'bg-mint text-deep',
                                )}
                              >
                                <Check className="h-3.5 w-3.5" strokeWidth={3} />
                              </span>
                            ) : (
                              <span
                                className={cn(
                                  'inline-flex h-6 w-6 items-center justify-center rounded-full',
                                  highlight ? 'bg-paper/10 text-paper/50' : 'bg-ink/5 text-ink/30',
                                )}
                              >
                                <Minus className="h-3.5 w-3.5" />
                              </span>
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* FAQ accordion */}
      <section className="relative pb-24 pt-16 md:pt-24">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="font-display text-center text-3xl text-ink md:text-4xl">
              Questions,{' '}
              <span className="italic text-deep">answered on the grid</span>
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-col gap-3">
            {pricing.faq.map((f, i) => {
              const isOpen = open === i
              return (
                <Reveal key={f.q} delay={i * 0.05}>
                  <div
                    className={cn(
                      'overflow-hidden rounded-2xl border transition-colors',
                      isOpen ? 'border-deep/25 bg-paper' : 'border-ink/[0.07] bg-paper/70 hover:border-ink/20',
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-sm font-semibold text-ink sm:text-base">{f.q}</span>
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 shrink-0 text-deep transition-transform duration-300',
                          isOpen && 'rotate-180',
                        )}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: easing }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-5 text-sm leading-relaxed text-ink/60">{f.a}</p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-8 text-center text-xs uppercase tracking-[0.18em] text-ink/40">
              All plans include all nine modules — pricing scales by people, not features
            </p>
          </Reveal>
        </Container>
      </section>

      <Cta />
    </>
  )
}