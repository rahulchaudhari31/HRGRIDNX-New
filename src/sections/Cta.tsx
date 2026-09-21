import { ArrowUpRight } from 'lucide-react'
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { GridBackground } from '../components/GridBackground'
import { Reveal } from '../components/Reveal'
import { cta } from '../lib/content'

export function Cta() {
  return (
    <section id="cta" className="relative overflow-hidden bg-deep py-24 md:py-32">
      <GridBackground variant="light" className="mask-fade-b opacity-70" />
      <span className="pointer-events-none absolute left-1/2 top-0 h-40 w-[36rem] -translate-x-1/2 rounded-full bg-mint/20 blur-[100px]" />
      <span className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-coral/20 blur-[120px]" />

      <Container className="relative flex flex-col items-center gap-6 text-center">
        <Reveal>
          <h2 className="font-display text-4xl leading-[1.05] text-paper sm:text-5xl md:text-[3.5rem]">
            {cta.title}
            <span className="block italic text-coral">Every role, one grid.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-paper/70 sm:text-lg">
            {cta.body}
          </p>
        </Reveal>
        <Reveal delay={0.2} className="flex flex-col items-center gap-4 sm:flex-row">
          <Button to={cta.primary.to} variant="primary" size="lg">
            {cta.primary.label}
            <ArrowUpRight className="h-4 w-4" />
          </Button>
          <Button href={cta.secondary.href} variant="light" size="lg">
            {cta.secondary.label}
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}