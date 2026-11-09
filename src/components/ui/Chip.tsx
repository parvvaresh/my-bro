import type { ReactNode } from 'react'

interface ChipProps {
  children: ReactNode
  tone?: 'accent' | 'neutral' | 'gold'
  className?: string
}

const tones = {
  accent: 'border-brand/30 bg-brand/10 text-[#B9C8FF]',
  neutral: 'border-white/10 bg-white/[0.05] text-slate-300',
  gold: 'border-brand-gold/30 bg-brand-gold/10 text-brand-gold',
}

export default function Chip({ children, tone = 'accent', className = '' }: ChipProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium leading-5 ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}
