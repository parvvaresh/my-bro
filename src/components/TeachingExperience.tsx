import { Presentation, School } from 'lucide-react'
import Section from './ui/Section'
import Card from './ui/Card'
import { delay } from '../lib/useReveal'
import { teaching } from '../data/teaching'

export default function TeachingExperience() {
  return (
    <Section id="teaching" title="تدریس" eyebrow="آموزش" icon={Presentation}>
      <div className="grid gap-4 sm:grid-cols-2">
        {teaching.milestones.map((item, i) => (
          <div
            key={item.year}
            style={delay(i * 100)}
            className={`reveal relative overflow-hidden rounded-3xl p-7 sm:p-9 ${
              i === 0
                ? 'bg-gradient-to-br from-brand via-[#5a5ef0] to-brand-violet text-white shadow-glow'
                : 'glass border-glow text-white'
            }`}
          >
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <span className={`text-sm ${i === 0 ? 'text-white/75' : 'text-slate-400'}`}>از سال</span>
            <span className="mt-1 block text-6xl font-black leading-tight sm:text-7xl">{item.year}</span>
            <p className={`mt-3 text-sm leading-7 ${i === 0 ? 'text-white/85' : 'text-slate-400'}`}>{item.label}</p>
          </div>
        ))}

        {teaching.positions.map((item, i) => (
          <Card key={item.title} delay={i * 100} className="flex items-center gap-5 p-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-cyan/10 text-brand-cyan">
              <School className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-bold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{item.subtitle}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
