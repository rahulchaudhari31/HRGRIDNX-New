import type { ReactNode } from 'react'
import { cn } from '../lib/cn'
import { Badge } from './Badge'
import { Reveal } from './Reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
  className,
}: {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'center' | 'left'
  dark?: boolean
  className?: string
}) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-5',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow ? (
        <Badge variant={dark ? 'light' : 'mint'}>{eyebrow}</Badge>
      ) : null}
      <h2
        className={cn(
          'font-display text-4xl leading-[1.05] sm:text-5xl md:text-[3.5rem]',
          dark ? 'text-paper' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'max-w-2xl text-pretty text-base leading-relaxed sm:text-lg',
            dark ? 'text-paper/70' : 'text-ink/65',
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}