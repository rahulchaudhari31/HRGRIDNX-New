import { Container } from '../../../components/ui/Container';
import { Reveal } from '../../../components/ui/Reveal';
import { SectionHeading } from '../../../components/ui/SectionHeading';
import { about } from '../../../lib/content';
import { cn } from '../../../lib/cn';
const avatarThemes = ['bg-deep text-paper', 'bg-coral text-paper', 'bg-mint text-deep', 'bg-ink text-paper', 'bg-deep/80 text-paper', 'bg-coral/80 text-paper'];
export function Team() {
    return (
      <section className="relative py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="The team"
            title={
              <>
                The people{' '}
                <span className="italic text-deep">behind the squares</span>
              </>
            }
            description="Builders, designers and people-ops who got tired of HR tools showing everyone the same screen."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {about.team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.05}>
                <article className="group flex items-center gap-4 rounded-2xl border border-ink/[0.07] bg-paper/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-deep/20 hover:shadow-lift">
                  <span
                    className={cn(
                      'inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-sm font-semibold',
                      avatarThemes[i % avatarThemes.length],
                    )}
                  >
                    {member.initials}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-base font-semibold text-ink">{member.name}</h3>
                    <p className="text-sm text-ink/50">{member.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    );
}
