import { Container } from '../components/Container'
import { Badge } from '../components/Badge'
import { Reveal } from '../components/Reveal'
import { GridBackground } from '../components/GridBackground'
import { cn } from '../lib/cn'

export function PageHero({
  eyebrow,
  titleA,
  titleB,
  description,
  note,
}: {
  eyebrow?: string
  titleA: string
  titleB: string
  description?: string
  note?: string
}) {
  return (
    <section className="relative overflow-hidden pt-40 md:pt-48">
      <GridBackground className="mask-fade-b opacity-70" />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        {eyebrow ? (
          <Reveal>
            <Badge>{eyebrow}</Badge>
          </Reveal>
        ) : null}
        <Reveal delay={0.05}>
          <h1 className="font-display text-[2.75rem] leading-[1.03] text-ink sm:text-6xl md:text-[4.5rem]">
            {titleA}
            <br />
            <span className="italic text-deep">{titleB}</span>
          </h1>
        </Reveal>
        {description ? (
          <Reveal delay={0.12}>
            <p
              className={cn(
                'max-w-2xl text-balance text-base leading-relaxed text-ink/65 sm:text-lg',
              )}
            >
              {description}
            </p>
          </Reveal>
        ) : null}
        {note ? (
          <Reveal delay={0.18}>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/40">{note}</p>
          </Reveal>
        ) : null}
      </Container>
    </section>
  )
}