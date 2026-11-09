import { CheckCircle2, Users } from 'lucide-react'
import Section from './ui/Section'
import Card from './ui/Card'
import { activities } from '../data/activities'

export default function Activities() {
  return (
    <Section id="activities" title="سایر فعالیت‌ها" eyebrow="مشارکت‌ها" icon={Users}>
      <div className="grid gap-3 md:grid-cols-2">
        {activities.map((activity, i) => (
          <Card key={activity} delay={(i % 2) * 80} className="flex gap-4 rounded-2xl p-5">
            <CheckCircle2 className="mt-1.5 h-5 w-5 shrink-0 text-brand-cyan" />
            <p className="leading-8 text-slate-300">{activity}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
