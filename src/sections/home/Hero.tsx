import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import {
  ArrowUpRight,
  CalendarDays,
  ChartColumn,
  Check,
  Clock4,
  Wallet,
} from 'lucide-react'
import { Container } from '../../components/Container'
import { Badge } from '../../components/Badge'
import { Button } from '../../components/Button'
import { GridBackground } from '../../components/GridBackground'
import { hero } from '../../lib/content'
import { cn } from '../../lib/cn'

const easing = [0.16, 1, 0.3, 1] as const

function Card({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3 rounded-2xl border border-ink/[0.07] bg-paper p-4 shadow-[0_16px_32px_-24px_rgba(14,17,22,0.25)]',
        className,
      )}
    >
      {children}
    </div>
  )
}

function CardHeader({
  icon,
  label,
  chip,
}: {
  icon: ReactNode
  label: string
  chip?: string
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-ink/50">
        {icon}
        {label}
      </span>
      {chip ? (
        <span className="rounded-full bg-ink/5 px-2 py-0.5 text-[10px] uppercase tracking-wider text-ink/50">
          {chip}
        </span>
      ) : null}
    </div>
  )
}

/* Attendance ring — pure SVG progress ring, no image. */
function AttendanceRing() {
  const size = 72
  const stroke = 7
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const value = 94
  return (
    <Card>
      <CardHeader
        icon={<Clock4 className="h-3.5 w-3.5 text-coral" strokeWidth={2} />}
        label="Attendance"
        chip="This week"
      />
      <div className="flex items-center gap-4">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="rgba(14,17,22,0.08)"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="#FF6B4A"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={c * (1 - value / 100)}
          />
        </svg>
        <div className="flex flex-col gap-0.5">
          <span className="font-display text-3xl leading-none text-ink">{value}%</span>
          <span className="text-xs text-ink/50">on time</span>
        </div>
      </div>
    </Card>
  )
}

/* Leave request, approved. */
function LeaveApproved() {
  return (
    <Card className="border-mint bg-mint/40">
      <CardHeader
        icon={<CalendarDays className="h-3.5 w-3.5 text-deep" strokeWidth={2} />}
        label="Leave"
        chip="Approved"
      />
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-deep text-[10px] font-semibold text-paper">
          DM
        </span>
        <div className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-semibold text-ink">Divya Mehta</span>
          <span className="text-xs text-ink/50">12–16 May · 5 days</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 text-xs font-medium text-deep">
        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-mint text-deep">
          <Check className="h-2.5 w-2.5" strokeWidth={3} />
        </span>
        Level 1 approved
      </div>
    </Card>
  )
}

/* Payroll run status. */
function PayrollStatus() {
  return (
    <Card>
      <CardHeader
        icon={<Wallet className="h-3.5 w-3.5 text-coral" strokeWidth={2} />}
        label="Payroll"
        chip="Finance"
      />
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-semibold text-ink">March run</span>
        <span className="text-xs text-ink/50">Released 28 Mar</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink/[0.07]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: easing }}
          className="h-full rounded-full bg-coral"
        />
      </div>
      <div className="flex items-center justify-between">
        <span className="font-display text-xl text-ink">£128,400</span>
        <span className="flex items-center gap-1 text-[11px] font-medium text-deep">
          <Check className="h-3 w-3" /> Released
        </span>
      </div>
    </Card>
  )
}

/* Headcount bar chart, built from divs. */
function HeadcountChart() {
  const bars = [1.25, 1.5, 1.75, 2, 2.25, 2.5]
  return (
    <Card>
      <CardHeader
        icon={<ChartColumn className="h-3.5 w-3.5 text-deep" strokeWidth={2} />}
        label="Headcount"
        chip="+12 this Q"
      />
      <div className="flex h-16 items-end gap-2">
        {bars.map((h, i) => (
          <div
            key={i}
            className={cn(
              'w-full rounded-t-[3px]',
              i === bars.length - 1 ? 'bg-coral' : 'bg-deep/20',
            )}
            style={{ height: `${h}rem` }}
          />
        ))}
      </div>
      <div className="flex items-baseline justify-between text-xs">
        <span className="font-medium text-ink">Team · 42 seats</span>
        <span className="text-ink/50">vs 30 last Q</span>
      </div>
    </Card>
  )
}

function FloatingPreview() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* drifting chips behind the window */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-2 -top-5 z-10 hidden items-center gap-2 rounded-full border border-ink/[0.08] bg-paper px-4 py-2 text-xs font-medium shadow-lift sm:inline-flex lg:-right-6"
      >
        <Clock4 className="h-3.5 w-3.5 text-deep" />
        Check-in · 09:02
        <span className="rounded-full bg-mint px-2 py-0.5 text-[10px] uppercase tracking-wider text-deep">
          EP
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-2 bottom-8 z-10 hidden items-center gap-2 rounded-full border border-ink/[0.08] bg-paper px-4 py-2 text-xs font-medium shadow-lift sm:inline-flex lg:-left-10"
      >
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-coral text-paper">
          <Check className="h-3 w-3" />
        </span>
        Payslip released
      </motion.div>

      {/* the app window, floating as one */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="relative rounded-3xl border border-ink/[0.08] bg-paper/70 p-3 shadow-lift backdrop-blur-sm"
      >
        <div className="grid-lines-sm absolute inset-3 rounded-2xl opacity-50" aria-hidden="true" />

        {/* window header */}
        <div className="relative flex items-center justify-between border-b border-ink/[0.06] px-1 pb-3 pt-1">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-coral" />
            <span className="h-2.5 w-2.5 rounded-full bg-mint" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          </div>
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink/40">
            One grid · overview
          </span>
        </div>

        {/* the four product cards */}
        <div className="relative grid grid-cols-2 gap-3 p-1 pt-3">
          <AttendanceRing />
          <LeaveApproved />
          <PayrollStatus />
          <HeadcountChart />
        </div>
      </motion.div>
    </div>
  )
}

const trustAvatars = [
  { initials: 'DM', className: 'bg-deep text-paper' },
  { initials: 'TS', className: 'bg-coral text-paper' },
  { initials: 'AJ', className: 'bg-ink text-paper' },
  { initials: 'PL', className: 'bg-mint text-deep' },
  { initials: 'RK', className: 'bg-deep/70 text-paper' },
]

function TrustedBy() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2">
        {trustAvatars.map((a) => (
          <span
            key={a.initials}
            className={cn(
              'inline-flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-semibold ring-2 ring-paper',
              a.className,
            )}
          >
            {a.initials}
          </span>
        ))}
      </div>
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink/40">
        {hero.trusted}
      </p>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 md:pt-44">
      {/* faint grid + soft coral glow behind the hero */}
      <GridBackground className="mask-fade-b" />
      <span className="pointer-events-none absolute -right-40 top-4 h-[30rem] w-[30rem] rounded-full bg-coral/15 blur-[140px]" />
      <span className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-mint/60 blur-[120px]" />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex max-w-xl flex-col items-start gap-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing }}
          >
            <Badge variant="mint">{hero.eyebrow}</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: easing }}
            className="text-balance font-display text-[2.7rem] leading-[1.02] text-ink sm:text-6xl md:text-7xl"
          >
            {hero.titleA}
            <br />
            <span className="italic text-deep">{hero.titleB}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: easing }}
            className="text-pretty text-base leading-relaxed text-ink/65 sm:text-lg"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26, ease: easing }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Button to={hero.primary.to} variant="primary" size="lg">
              {hero.primary.label}
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button to={hero.secondary.to} variant="outline" size="lg">
              {hero.secondary.label}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <TrustedBy />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: easing }}
          className="mx-auto w-full max-w-md lg:max-w-none"
        >
          <FloatingPreview />
        </motion.div>
      </Container>
    </section>
  )
}