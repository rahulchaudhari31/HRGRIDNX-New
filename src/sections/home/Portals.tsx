import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Lock } from 'lucide-react'
import { Container } from '../../components/Container'
import { SectionHeading } from '../../components/SectionHeading'
import { Reveal } from '../../components/Reveal'
import { Icon } from '../../lib/icons'
import { roles, modules, type RoleId, type Role } from '../../lib/content'
import { cn } from '../../lib/cn'

const easing = [0.16, 1, 0.3, 1] as const

const accents: Record<RoleId, string> = {
  admin: 'bg-deep text-paper',
  hr_manager: 'bg-mint text-deep',
  department_head: 'bg-ink text-paper',
  finance_manager: 'bg-coral text-paper',
  team_leader: 'bg-deep/80 text-paper',
  employee: 'bg-paper text-ink border border-ink/10',
}

const moduleIcon = (name: string) =>
  modules.find((m) => m.name === name)?.icon ?? 'layout-grid'

function PortalPreview({ role }: { role: Role }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-ink/[0.08] bg-paper p-4 shadow-lift">
      <div className="grid-lines-sm absolute inset-3 rounded-xl opacity-40" aria-hidden="true" />
      <div className="relative">
        <div className="flex items-center justify-between border-b border-ink/[0.06] pb-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-coral" />
            <span className="h-2 w-2 rounded-full bg-mint" />
            <span className="h-2 w-2 rounded-full bg-ink/15" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/40">
            {role.name} · view
          </span>
        </div>

        <div className="mt-3 flex flex-col gap-2">
          {role.sees.slice(0, 3).map((mod) => (
            <div
              key={mod}
              className="flex items-center justify-between rounded-xl border border-ink/[0.06] bg-paper/90 px-3 py-2.5"
            >
              <span className="flex items-center gap-2 text-xs font-medium text-ink">
                <Icon name={moduleIcon(mod)} className="h-3.5 w-3.5 text-deep" />
                {mod}
              </span>
              <Lock className="h-3 w-3 text-ink/25" />
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between rounded-xl border border-ink/[0.06] bg-paper/80 px-3 py-2.5">
          <span className="text-[11px] font-medium text-ink/60">Clearance</span>
          <span className={cn('rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider', accents[role.id])}>
            {role.short}
          </span>
        </div>
      </div>
    </div>
  )
}

export function Portals() {
  const [activeId, setActiveId] = useState<RoleId>(roles[0].id)
  const active = roles.find((r) => r.id === activeId) ?? roles[0]

  return (
    <section className="relative py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Six portals"
          title={
            <>
              One platform,{' '}
              <span className="italic text-deep">six portals</span>
            </>
          }
          description="Six working roles, one product. Switch portal and the grid re-shapes itself — the modules a role owns, and the actions it may take."
        />

        <Reveal className="mt-14">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
            {/* tabs */}
            <div className="flex flex-col gap-2" role="tablist" aria-label="Role portals">
              {roles.map((role, i) => (
                <Reveal key={role.id} delay={i * 0.05}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={active.id === role.id}
                    onClick={() => setActiveId(role.id)}
                    className={cn(
                      'flex w-full items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all duration-300',
                      active.id === role.id
                        ? 'border-ink bg-ink text-paper shadow-lift'
                        : 'border-ink/[0.07] bg-paper/70 text-ink/60 hover:border-ink/20 hover:text-ink',
                    )}
                  >
                    <span
                      className={cn(
                        'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
                        active.id === role.id ? 'bg-paper/10 text-mint' : 'bg-mint text-deep',
                      )}
                    >
                      <Icon name={role.icon} className="h-4 w-4" />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="text-sm font-semibold">{role.name}</span>
                      <span
                        className={cn(
                          'truncate text-xs',
                          active.id === role.id ? 'text-paper/60' : 'text-ink/40',
                        )}
                      >
                        {role.short}
                      </span>
                    </span>
                    <span
                      className={cn(
                        'h-2 w-2 shrink-0 rounded-full transition-colors',
                        active.id === role.id ? 'bg-coral' : 'bg-ink/15',
                      )}
                    />
                  </button>
                </Reveal>
              ))}
            </div>

            {/* active portal panel */}
            <div className="lg:min-h-[30rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: easing }}
                  className="flex h-full flex-col gap-6 md:grid md:grid-cols-[1.05fr_0.95fr]"
                >
                  <div className="flex h-full flex-col items-start gap-5 rounded-2xl border border-ink/[0.07] bg-paper/50 p-6 sm:p-8">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mint text-deep">
                        <Icon name={active.icon} className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-display text-2xl text-ink">{active.name}</h3>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-deep">
                          {active.short}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-ink/60">{active.view}</p>

                    <ul className="flex flex-col gap-3">
                      {active.can.slice(0, 3).map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-ink">
                          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral text-paper">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                      {active.sees.map((mod) => (
                        <span
                          key={mod}
                          className="rounded-full border border-ink/[0.08] bg-paper px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-ink/50"
                        >
                          {mod}
                        </span>
                      ))}
                      <span className="rounded-full bg-deep px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-paper">
                        {active.sees.length} views
                      </span>
                    </div>
                  </div>

                  <PortalPreview role={active} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}