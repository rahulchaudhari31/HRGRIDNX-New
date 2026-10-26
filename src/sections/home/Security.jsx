import { Container } from '../../components/Container'
import { SectionHeading } from '../../components/SectionHeading'
import { Reveal } from '../../components/Reveal'
import { GridBackground } from '../../components/GridBackground'
import { Icon } from '../../lib/icons'
import { security } from '../../lib/content'

export function Security() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <GridBackground variant="light" className="mask-fade-b opacity-60" />
      <span className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full bg-deep/50 blur-[120px]" />
      <span className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-coral/10 blur-[120px]" />

      <Container className="relative">
        <SectionHeading
          dark
          eyebrow="Security"
          title={
            <>
              Access control,{' '}
              <span className="italic text-coral">built into the grid</span>
            </>
          }
          description="HRGridNX is designed around role-based permissions, audit trails and data protection. Each user receives access according to their responsibilities, helping keep sensitive information restricted to the appropriate people."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {security.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="h-full">
              <div className="flex h-full gap-4 rounded-2xl border border-paper/10 bg-paper/[0.04] p-6 backdrop-blur-sm">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper/10 text-mint">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <div className="flex flex-col items-start gap-1.5">
                  <h3 className="text-sm font-semibold text-paper">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-paper/60">{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
