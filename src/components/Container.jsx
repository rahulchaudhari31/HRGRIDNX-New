import { cn } from '../lib/cn'

export function Container({ children, className, wide = false }) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-6 sm:px-8',
        wide ? 'max-w-7xl' : 'max-w-6xl',
        className,
      )}
    >
      {children}
    </div>
  )
}
