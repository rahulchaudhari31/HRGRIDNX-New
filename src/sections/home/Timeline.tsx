import { Container } from '../../components/Container'
import { SectionHeading } from '../../components/SectionHeading'
import { Reveal } from '../../components/Reveal'
import { Icon } from '../../lib/icons'
import { steps } from '../../lib/content'

export function Timeline() {
  return (
    <section className="relative overflow-hidden bg-mint/30 py-20 md:py-28">
      <span className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-deep/[0.05] blur-[120px]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Live on the grid{' '}
              <span className="italic text-deep">in three moves</span>
            </>
          }
          description="HRGRIDNX does not ask you to re-model your company. It gives shape to the structure you already have."
        />

        <div className="relative mt-16">
          {/* the line behind the nodes */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-deep/15 lg:block" />

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.12}>
                <div className="relative flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
                  <div className="relative">
                    <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-deep/15 bg-paper text-deep shadow-lift">
                      <Icon name={step.icon} className="h-5 w-5" />
                    </span>
                    <span className="absolute -right-2 -top-2 z-20 inline-flex h-6 w-6 items-center justify-center rounded-full bg-coral text-[10px] font-bold text-paper">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-ink">{step.title}</h3>
                  <p className="max-w-sm text-sm leading-relaxed text-ink/60">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}