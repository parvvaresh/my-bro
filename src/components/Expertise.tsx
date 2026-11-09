import { Cpu, Globe2, GraduationCap, LifeBuoy, Shield, ShieldHalf, Target } from 'lucide-react'
import Section from './ui/Section'
import Card from './ui/Card'
import { expertise } from '../data/expertise'

const icons = [Shield, ShieldHalf, Globe2, Cpu, LifeBuoy, GraduationCap]
const gradients = [
  'from-brand to-brand-violet',
  'from-brand-cyan to-brand',
  'from-brand-violet to-fuchsia-500',
  'from-sky-400 to-brand',
  'from-amber-400 to-rose-500',
  'from-emerald-400 to-brand-cyan',
]
const toFa = (n: number) => n.toLocaleString('fa-IR', { minimumIntegerDigits: 2 })

export default function Expertise() {
  return (
    <Section id="expertise" title="حوزه‌های تخصصی" eyebrow="تخصص‌ها" icon={Target}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map((item, i) => {
          const Icon = icons[i % icons.length]
          return (
            <Card key={item.title} delay={(i % 3) * 90} className="group p-7">
              <div className="flex items-start justify-between">
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradients[i]} text-white shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <span className="text-4xl font-black text-white/[0.06] transition-colors group-hover:text-white/[0.12]">
                  {toFa(i + 1)}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-7 text-slate-400">{item.description}</p>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
