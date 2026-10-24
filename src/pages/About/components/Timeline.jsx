import { Container } from '../../../components/ui/Container';
import { Reveal } from '../../../components/ui/Reveal';
import { GridBackground } from '../../../components/common/GridBackground';
import { SectionHeading } from '../../../components/ui/SectionHeading';
import { about } from '../../../lib/content';
import { cn } from '../../../lib/cn';
export function Timeline() {
    return (
      <section className="relative overflow-hidden bg-deep py-20 md:py-28">
        <GridBackground variant="light" className="mask-fade-b opacity-60" />
        <span className="pointer-events-none absolute right-[-8rem] bottom-0 h-96 w-96 rounded-full bg-coral/15 blur-[130px]" />
        <Container className="relative">
          <SectionHeading
            dark
            eyebrow="Timeline"
            title={
              <>
                From a notebook{' '}
                <span className="italic text-coral">to the grid</span>
              </>
            }
          />
          <div className="relative mx-auto mt-14 max-w-2xl">
            <span className="absolute left-[3.5px] top-2 bottom-2 w-px bg-paper/15" aria-hidden="true" />
            <div className="flex flex-col gap-8">
              {about.timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.08}>
                  <div className="relative flex gap-6">
                    <span
                      className={cn(
                        'relative z-10 inline-flex h-2 w-2 shrink-0 translate-y-2 rounded-full',
                        i === about.timeline.length - 1 ? 'bg-coral' : 'bg-mint',
                      )}
                    />
                    <div className="flex flex-col items-start gap-1.5">
                      <span className="rounded-full bg-paper/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-mint">
                        {item.year}
                      </span>
                      <h3 className="font-display text-2xl text-paper">{item.title}</h3>
                      <p className="max-w-lg text-sm leading-relaxed text-paper/60">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>
    );
}
