import { cn } from '../lib/cn'

const variants = {
  mint: 'bg-mint text-deep',
  coral: 'bg-coral text-paper',
  ink: 'bg-ink text-paper',
  outline: 'border border-ink/15 text-ink',
  light: 'bg-paper/10 text-paper border border-paper/15',
}

export function Badge({ children, variant = 'mint', className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.14em]',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
