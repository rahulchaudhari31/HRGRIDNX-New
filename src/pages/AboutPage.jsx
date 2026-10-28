import { Container } from '../components/Container'
import { PageHero } from '../sections/PageHero'
import { Reveal } from '../components/Reveal'
import { GridBackground } from '../components/GridBackground'
import { SectionHeading } from '../components/SectionHeading'
import { Icon } from '../lib/icons'
import { about } from '../lib/content'
import { cn } from '../lib/cn'

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={about.eyebrow}
        titleA={about.titleA}
        titleB={about.titleB}
        description={about.description}
      />

      {/* mission */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <span className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-mint/50 blur-[120px]" />
        <Container className="relative">
          <Reveal>
            <p className="mx-auto max-w-3xl text-balance text-center font-display text-3xl leading-[1.15] text-ink md:text-5xl">
              {about.mission}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mx-auto mt-14 max-w-4xl rounded-2xl border border-ink/[0.07] bg-paper/70 p-8 md:p-12">
              <span className="rounded-full bg-mint px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-deep">
                {about.missionLabel}
              </span>
              <p className="mt-5 font-display text-2xl leading-snug text-ink md:text-3xl">
                {about.story}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* values */}
      <section className="relative py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow={about.valuesEyebrow}
            title={
              <>
                {about.valuesTitleA}{' '}
                <span className="italic text-deep">{about.valuesTitleB}</span>
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

      {/* timeline */}
      <section className="relative overflow-hidden bg-deep py-20 md:py-28">
        <GridBackground variant="light" className="mask-fade-b opacity-60" />
        <span className="pointer-events-none absolute right-[-8rem] bottom-0 h-96 w-96 rounded-full bg-coral/15 blur-[130px]" />

        <Container className="relative">
          <SectionHeading
            dark
            eyebrow={about.timelineEyebrow}
            title={
              <>
                {about.timelineTitleA}{' '}
                <span className="italic text-coral">{about.timelineTitleB}</span>
              </>
            }
            description={about.timelineDescription}
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

      {/* team */}
      <section className="relative py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow={about.teamEyebrow}
            title={
              <>
                {about.teamTitleA}{' '}
                <span className="italic text-deep">{about.teamTitleB}</span>
              </>
            }
            description={about.teamDescription}
          />
          {about.team.length > 0 ? (
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {about.team.map((member, i) => (
                <Reveal key={member.name} delay={i * 0.05}>
                  <article className="group flex items-center gap-4 rounded-2xl border border-ink/[0.07] bg-paper/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-deep/20 hover:shadow-lift">
                    <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-deep text-sm font-semibold text-paper">
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
          ) : null}
        </Container>
      </section>

    </>
  )
}
