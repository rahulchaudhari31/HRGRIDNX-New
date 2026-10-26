import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { Container } from '../../../components/ui/Container';
import { Button } from '../../../components/ui/Button';
import { Reveal } from '../../../components/ui/Reveal';
import { pricing } from '../../../lib/content';
import { cn } from '../../../lib/cn';
const easing = [0.16, 1, 0.3, 1];
export function PricingPlans({ annual }) {
    return (
      <section className="relative py-16 md:py-24">
        <Container>
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
                      {plan.highlight ? 'Most popular' : `Plan ${i + 1}`}
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
    );
}
