import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import Container from './Container'

interface SectionProps {
  id: string
  title: string
  eyebrow?: string
  icon?: LucideIcon
  subtitle?: string
  children: ReactNode
  className?: string
}

export default function Section({ id, title, eyebrow, icon: Icon, subtitle, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`relative scroll-mt-24 ${className}`}>
      <Container className="py-12 sm:py-16">
        <header className="reveal mb-10 flex flex-col items-start gap-4 sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium tracking-wide text-brand-cyan">
            {Icon && <Icon className="h-3.5 w-3.5" />}
            {eyebrow ?? title}
          </span>
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            <span className="text-gradient">{title}</span>
          </h2>
          {subtitle && <p className="max-w-2xl leading-8 text-slate-400">{subtitle}</p>}
          <span className="h-px w-24 bg-gradient-to-l from-transparent via-brand to-brand-cyan" />
        </header>
        {children}
      </Container>
    </section>
  )
}
