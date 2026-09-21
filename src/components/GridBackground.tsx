import { cn } from '../lib/cn'

export function GridBackground({
  variant = 'dark',
  className,
}: {
  /** line colour on the underlying surface */
  variant?: 'dark' | 'light' | 'mint' | 'strong'
  className?: string
}) {
  const gridClass = {
    dark: 'grid-lines',
    light: 'grid-lines-light',
    mint: 'grid-lines-mint',
    strong: 'grid-lines-strong',
  }[variant]

  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0', gridClass, className)}
    />
  )
}