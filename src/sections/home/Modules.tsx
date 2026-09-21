import { ArrowUpRight } from 'lucide-react'
import { Container } from '../../components/Container'
import { SectionHeading } from '../../components/SectionHeading'
import { Reveal } from '../../components/Reveal'
import { Icon } from '../../lib/icons'
import { modules } from '../../lib/content'
import { cn } from '../../lib/cn'

const spans: Record<string, string> = {
  employees: 'col-span-2 md:col-span-2 md:row-span-2',
  payroll: 'col-span-2 md:col-span-2 md:row-span-2',
  leave: 'col-span-1 md:col-span-2',
  attendance: 'col-span-1 md:col-span-2',
  tasks: 'md:col-span-1',
  expenses: 'md:col-span-1',
  documents: 'md:col-span-1',
  reports: 'md:col-span-1',
}

const bigIds = new Set(['employees', 'payroll'])

const permissionKeys: Record<string, string> = {
  employees: 'employee.create',
  departments: 'department.manage',
  leave: 'leave.approve.level1',
  attendance: 'attendance.read',
  tasks: 'task.assign',
  payroll: 'payroll.release',
  expenses: 'expense.approve',
  documents: 'documents.view.private',
  reports: 'report.cut',
}

/* Code-built flourish for the two flagship tiles. */
function BigTileFlourish({ id, className }: { id: string; className?: string }) {
  if (id === 'payroll') {
    const bars = [0.6, 0.8, 0.7, 0.95, 1.1]
    return (
      <div className={cn('flex h-16 items-end gap-1.5', className)}>
        {bars.map((h, i) => (
          <div
            key={i}
            className={cn(
              'w-full rounded-t-[3px]',
              i === bars.length - 1 ? 'bg-coral' : 'bg-mint/60',
            )}
            style={{ height: `${h * 4}rem` }}
          />
        ))}
      </div>
    )
  }
  return (
    <div className={cn('flex -space-x-2.5', className)}>
      {['DT', 'MK', 'AS', 'JL', 'RK'].map((ini) => (
        <span
          key={ini}
          className={cn(
            'inline-flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-semibold ring-2 ring-deep',
            ini === 'DT'
              ? 'bg-mint text-deep'
              : ini === 'MK'
                ? 'bg-coral text-paper'
                : 'bg-paper/80 text-ink',
          )}
        >
          {ini}
        </span>
      ))}
    </div>
  )
}

export function Modules() {
  return (
    <section className="relative py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Nine modules"
          title={
            <>
              One source of truth,{' '}
              <span className="italic text-deep">nine ways in</span>
            </>
          }
          description="Employees, departments, leave, attendance, tasks, payroll, expenses, documents and reports — every module reads the same records, so nothing is ever re-keyed."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {modules.map((mod, i) => {
            const big = bigIds.has(mod.id)
            const tile = spans[mod.id] ?? 'md:col-span-1'
            return (
              <Reveal key={mod.id} delay={i * 0.05} className={cn('h-full', tile)}>
                <article
                  className={cn(
                    'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/[0.07] bg-paper/70 transition-all duration-300 hover:-translate-y-1 hover:border-deep/20 hover:shadow-lift',
                    big ? 'gap-6 p-6 sm:p-8' : 'gap-4 p-5 sm:p-6',
                  )}
                >
                  <div
                    className="grid-lines-sm absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-40"
                    aria-hidden="true"
                  />
                  <div
                    className={cn(
                      'relative flex items-start justify-between',
                      big && 'items-center',
                    )}
                  >
                    <span
                      className={cn(
                        'inline-flex items-center justify-center rounded-xl bg-mint text-deep',
                        big ? 'h-12 w-12' : 'h-10 w-10',
                      )}
                    >
                      <Icon name={mod.icon} className={big ? 'h-6 w-6' : 'h-5 w-5'} />
                    </span>
                    <span className="font-display text-2xl italic text-ink/15">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="relative flex flex-col items-start gap-2">
                    <h3
                      className={cn(
                        'text-ink',
                        big ? 'font-display text-3xl' : 'font-display text-xl',
                      )}
                    >
                      {mod.name}
                    </h3>
                    <p
                      className={cn(
                        'leading-relaxed text-ink/60',
                        big ? 'max-w-md text-sm' : 'text-xs',
                      )}
                    >
                      {mod.blurb}
                    </p>
                  </div>

                  {big ? (
                    <>
                      <div className="relative mt-auto">
                        <div className="h-px w-full bg-ink/[0.07]" />
                        <BigTileFlourish id={mod.id} className="mt-4" />
                      </div>
                      <span className="relative inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.16em] text-deep">
                        Shared by every role
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </>
                  ) : (
                    <span className="pointer-events-none mt-auto inline-flex items-center gap-2 border-t border-ink/[0.06] pt-3 text-[11px] font-medium text-ink/50 transition-colors group-hover:text-deep">
                      <code className="rounded-md bg-ink/[0.05] px-2 py-0.5 font-mono text-[10px] text-deep">
                        {permissionKeys[mod.id]}
                      </code>
                    </span>
                  )}
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <p className="text-sm text-ink/50">
            Nine modules, each behind named permission keys like{' '}
            <code className="rounded-md bg-ink/5 px-2 py-1 font-mono text-xs text-deep">
              leave.approve.level1
            </code>{' '}
            — never a guess about what a role can see.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}