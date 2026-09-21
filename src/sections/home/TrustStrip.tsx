import { Container } from '../../components/Container'
import { Reveal } from '../../components/Reveal'
import { trustedBy } from '../../lib/content'

function MarqueeGroup({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-x-14 pr-14 sm:gap-x-20 sm:pr-20"
    >
      {trustedBy.map((name) => (
        <span
          key={name}
          className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.18em] text-ink/35"
        >
          {name}
        </span>
      ))}
    </div>
  )
}

export function TrustStrip() {
  return (
    <section className="relative py-14 md:py-16">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-[0.22em] text-ink/40">
            The grid, in production —
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mask-fade-x mt-8 overflow-hidden">
            <div className="flex w-max animate-marquee">
              <MarqueeGroup />
              <MarqueeGroup ariaHidden />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}