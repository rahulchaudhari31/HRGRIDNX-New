import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'

export function Logo({
  className,
  mark = true,
}: {
  className?: string
  mark?: boolean
}) {
  return (
    <Link
      to="/"
      className={cn('inline-flex items-center gap-2.5', className)}
      aria-label="HRGRIDNX home"
    >
      {mark ? (
        <span className="grid h-8 w-8 shrink-0 grid-cols-2 grid-rows-2 gap-[3px] rounded-[10px] bg-deep p-[5px]">
          <span className="rounded-[2.5px] bg-mint/40" />
          <span className="rounded-[2.5px] bg-mint/40" />
          <span className="rounded-[2.5px] bg-mint/40" />
          <span className="rounded-[2.5px] bg-coral" />
        </span>
      ) : null}
      <span className="text-lg font-semibold tracking-tightest">HRGRIDNX</span>
    </Link>
  )
}