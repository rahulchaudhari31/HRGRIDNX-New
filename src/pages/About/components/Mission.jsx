import { Container } from '../../../components/ui/Container';
import { Reveal } from '../../../components/ui/Reveal';
import { about } from '../../../lib/content';
export function Mission() {
    return (
      <section className="relative overflow-hidden py-16 md:py-24">
        <span className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-mint/50 blur-[120px]" />
        <Container className="relative">
          <Reveal>
            <p className="mx-auto max-w-3xl text-balance text-center font-display text-3xl leading-[1.15] text-ink md:text-5xl">
              {about.mission}
              <span className="block italic text-deep">— that is the grid.</span>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mx-auto mt-14 max-w-4xl rounded-2xl border border-ink/[0.07] bg-paper/70 p-8 md:p-12">
              <span className="rounded-full bg-mint px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-deep">
                The origin
              </span>
              <p className="mt-5 font-display text-2xl leading-snug text-ink md:text-3xl">
                {about.story}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    );
}
