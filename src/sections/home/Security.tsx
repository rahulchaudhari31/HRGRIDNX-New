import { motion } from 'framer-motion'
import { Check, KeyRound, ScrollText, Lock, ShieldCheck } from 'lucide-react'
import { Container } from '../../components/Container'
import { SectionHeading } from '../../components/SectionHeading'
import { Reveal } from '../../components/Reveal'
import { GridBackground } from '../../components/GridBackground'
import { security } from '../../lib/content'

const matrix = [
  {
    key: 'employee.create',
    roles: ['Admin', 'HR'],
    locked: false,
  },
  {
    key: 'leave.approve.level1',
    roles: ['Dept Head', 'Team Lead'],
    locked: false,
  },
  {
    key: 'payroll.release',
    roles: ['Finance'],
    locked: true,
  },
  {
    key: 'documents.view.private',
    roles: ['Admin', 'owner'],
    locked: true,
  },
]

const matrixIcons: Record<string, typeof KeyRound> = {
  'employee.create': KeyRound,
  'leave.approve.level1': ShieldCheck,
  'payroll.release': Lock,
  'documents.view.private': ScrollText,
}

const securityIcons: Record<string, typeof KeyRound> = {
  'key-round': KeyRound,
  'scroll-text': ScrollText,
  lock: Lock,
}

function PermissionMatrix() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-paper/10 bg-paper/[0.04] p-6 backdrop-blur-sm sm:p-8">
      <div className="grid-lines-light absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-paper/60">
            <KeyRound className="h-4 w-4 text-coral" />
            Permission matrix
          </span>
          <span className="rounded-full bg-paper/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-paper/70">
            29 keys
          </span>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          {matrix.map((row, i) => {
            const RowIcon = matrixIcons[row.key]
            return (
              <motion.div
                key={row.key}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                className="flex items-center justify-between gap-3 rounded-xl border border-paper/10 bg-paper/[0.06] px-4 py-3"
              >
                <span className="flex min-w-0 items-center gap-2.5">
                  <RowIcon className="h-4 w-4 shrink-0 text-mint" />
                  <code className="truncate font-mono text-xs text-paper">{row.key}</code>
                </span>
                <span className="flex shrink-0 items-center gap-1.5">
                  {row.roles.map((r) => (
                    <span
                      key={r}
                      className="hidden rounded-full bg-paper/10 px-2 py-0.5 text-[10px] font-medium text-paper/70 sm:inline"
                    >
                      {r}
                    </span>
                  ))}
                  <span
                    className={
                      row.locked
                        ? 'inline-flex h-5 w-5 items-center justify-center rounded-full bg-coral text-paper'
                        : 'inline-flex h-5 w-5 items-center justify-center rounded-full bg-mint text-deep'
                    }
                  >
                    {row.locked ? (
                      <Lock className="h-2.5 w-2.5" />
                    ) : (
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    )}
                  </span>
                </span>
              </motion.div>
            )
          })}
        </div>

        <p className="mt-6 flex items-center gap-2 text-xs leading-relaxed text-paper/50">
          <ShieldCheck className="h-4 w-4 shrink-0 text-coral" />
          Every screen — from employee.create to payroll.release — sits behind a named key shared between the app and the API.
        </p>
      </div>
    </div>
  )
}

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
              <span className="italic text-coral">baked into the grid</span>
            </>
          }
          description="Role-based permissions, a full audit trail and encrypted data — not bolted on, but part of the shape of every screen."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <PermissionMatrix />

          <div className="flex flex-col gap-4">
            {security.map((item, i) => {
              const ItemIcon = securityIcons[item.icon]
              return (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="flex gap-4 rounded-2xl border border-paper/10 bg-paper/[0.04] p-6 backdrop-blur-sm">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper/10 text-mint">
                      <ItemIcon className="h-5 w-5" />
                    </span>
                    <div className="flex flex-col items-start gap-1.5">
                      <h3 className="text-sm font-semibold text-paper">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-paper/60">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}