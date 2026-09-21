import { iconMap } from './icons-map'
import { LayoutGrid } from 'lucide-react'

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: string
  className?: string
  strokeWidth?: number
}) {
  const Cmp = iconMap[name] ?? LayoutGrid
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />
}