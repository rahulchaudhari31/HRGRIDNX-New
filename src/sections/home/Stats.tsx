import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { Container } from '../../components/Container'
import { Reveal } from '../../components/Reveal'
import { stats } from '../../lib/content'

const easing = [0.16, 1, 0.3, 1] as const

function useCountUp(target: number, active: boolean, duration = 2) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    const controls = animate(0, target, {
      duration,
      ease: easing,
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [active, target, duration])
  return value
}

function Stat({
  target,
  suffix,
  label,
  index,
}: {
  target: number
  suffix: string
  label: string
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const value = useCountUp(target, inView, 1.8 + index * 0.2)

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-2 px-6 py-10 text-center"
    >
      <span className="font-display text-5xl text-deep md:text-6xl">
        {value}
        {suffix}
      </span>
      <span className="text-xs font-medium uppercase tracking-[0.16em] text-ink/50">
        {label}
      </span>
    </div>
  )
}

export function Stats() {
  return (
    <section className="relative py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 divide-ink/[0.06] rounded-2xl border border-ink/[0.06] bg-paper/70 lg:grid-cols-4 lg:divide-x">
            {stats.map((stat, i) => (
              <Stat
                key={stat.label}
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
                index={i}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}