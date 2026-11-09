import type { ReactNode } from 'react'
import { delay as delayStyle, trackSpotlight } from '../../lib/useReveal'

interface CardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function Card({ children, className = '', delay = 0 }: CardProps) {
  return (
    <div
      style={delayStyle(delay)}
      onMouseMove={trackSpotlight}
      className={`reveal glass spotlight rounded-3xl hover:border-white/[0.16] hover:shadow-glow ${className}`}
    >
      {children}
    </div>
  )
}
