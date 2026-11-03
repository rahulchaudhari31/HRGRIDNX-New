import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'

export function Logo({ className }) {
  return (
    <Link to="/" className={cn('inline-flex items-center', className)} aria-label="HRGridNX home">
      <img src="/logo.png" alt="HRGridNX" className="h-14 w-auto object-contain" />
    </Link>
  )
}
