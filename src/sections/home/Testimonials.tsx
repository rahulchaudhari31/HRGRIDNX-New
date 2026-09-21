import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Container } from '../../components/Container'
import { SectionHeading } from '../../components/SectionHeading'
import { Reveal } from '../../components/Reveal'
import { testimonials } from '../../lib/content'
import { cn } from '../../lib/cn'

const easing = [0.16, 1, 0.3, 1] as const

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.length
  const go = (dir: number) => setIndex((i) => (i + dir + count) % count)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 7000)
    return () => clearInterval(id)
  }, [count])

  const t = testimonials[index]

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <span className="pointer-events-none absolute right-[-10rem] top-10 h-96 w-96 rounded-full bg-coral/10 blur-[140px]" />
      <span className="pointer-events-none absolute left-[-10rem] bottom-0 h-80 w-80 rounded-full bg-mint/60 blur-[120px]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="In the field"
          title={
            <>
              The grid,{' '}
              <span className="italic text-deep">from three seats</span>
            </>
          }
          description="Leaders across the grid talk about what changed when everyone stopped re-keying the same numbers."
        />

        <Reveal className="mt-14">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-stretch">
            <div className="relative min-h-[22rem] sm:min-h-[19rem]">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={index}
                  initial={{ opacity: 0, x: 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -32 }}
                  transition={{ duration: 0.45, ease: easing }}
                  className="relative flex h-full flex-col rounded-3xl border border-ink/[0.07] bg-paper/70 p-8 shadow-lift sm:p-10"
                >
                  <Quote className="h-8 w-8 text-coral" strokeWidth={1.5} />
                  <blockquote className="mt-5 flex-1 font-display text-xl leading-snug text-ink sm:text-2xl">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/[0.06] pt-5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-deep text-xs font-semibold text-paper">
                      {t.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm font-semibold text-ink">{t.name}</span>
                      <span className="text-sm text-ink/50">{t.title}</span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2" role="tablist" aria-label="Testimonials">
                {testimonials.map((item, i) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show testimonial from ${item.name}`}
                    aria-selected={i === index}
                    className={cn(
                      'h-2 rounded-full transition-all duration-300',
                      i === index ? 'w-7 bg-coral' : 'w-2 bg-ink/15 hover:bg-ink/30',
                    )}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}