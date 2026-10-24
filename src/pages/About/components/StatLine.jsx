import { Container } from '../../../components/ui/Container';
import { Reveal } from '../../../components/ui/Reveal';
import { about } from '../../../lib/content';
export function StatLine() {
    return (
      <section className="relative pb-16 md:pb-24">
        <Container>
          <Reveal>
            <p className="mx-auto max-w-2xl text-balance text-center font-display text-2xl leading-snug text-deep md:text-3xl">
              {about.statLine}
            </p>
          </Reveal>
        </Container>
      </section>
    );
}
