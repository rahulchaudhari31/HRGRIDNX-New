import { Container } from '../../../components/ui/Container';
import { Reveal } from '../../../components/ui/Reveal';
import { SectionHeading } from '../../../components/ui/SectionHeading';
import { Icon } from '../../../lib/icons';
import { about } from '../../../lib/content';
export function Values() {
    return (
      <section className="relative py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="The values"
            title={
              <>
                Four things,{' '}
                <span className="italic text-deep">we will not trade</span>
              </>
            }
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.06} className="h-full">
                <article className="flex h-full flex-col items-start gap-4 rounded-2xl border border-ink/[0.07] bg-paper/70 p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mint text-deep">
                    <Icon name={value.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-2xl text-ink">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-ink/60">{value.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    );
}
