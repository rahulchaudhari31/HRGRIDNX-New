import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const easing = [0.16, 1, 0.3, 1] as const

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: easing }}
    >
      {children}
    </motion.div>
  )
}