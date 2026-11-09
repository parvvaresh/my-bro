import { Award, BookMarked, GraduationCap, School } from 'lucide-react'
import Section from './ui/Section'
import Card from './ui/Card'
import Chip from './ui/Chip'
import { education } from '../data/education'

const icons = [GraduationCap, BookMarked, Award]

export default function Education() {
  return (
    <Section id="education" title="تحصیلات" eyebrow="مسیر علمی" icon={School}>
      <div className="grid gap-4 md:grid-cols-3">
        {education.map((item, i) => {
          const Icon = icons[i % icons.length]
          return (
            <Card key={item.degree} delay={i * 110} className={`flex flex-col p-7 ${i === 0 ? 'border-glow' : ''}`}>
              <div className="flex items-center justify-between gap-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/30 bg-brand/10 text-[#B9C8FF]">
                  <Icon className="h-6 w-6" />
                </span>
                {item.status && <Chip tone="gold">{item.status}</Chip>}
              </div>
              <p className="mt-6 text-sm font-medium text-brand-cyan">{item.degree}</p>
              <h3 className="mt-2 text-2xl font-extrabold leading-snug text-white">{item.field}</h3>
              <p className="mt-auto flex items-center gap-2 pt-6 text-sm text-slate-400">
                <span className="h-px w-6 bg-brand/60" />
                {item.university}
              </p>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
