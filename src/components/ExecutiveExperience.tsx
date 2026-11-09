import { Briefcase, Building2 } from 'lucide-react'
import Section from './ui/Section'
import Chip from './ui/Chip'
import { delay, trackSpotlight } from '../lib/useReveal'
import { executive } from '../data/executive'

export default function ExecutiveExperience() {
  return (
    <Section id="executive" title="سوابق اجرایی" eyebrow="مسئولیت‌ها" icon={Briefcase}>
      <ol className="relative space-y-4 border-r border-brand/30 pr-6 sm:pr-10">
        {executive.map((item, i) => (
          <li key={`${item.title}-${item.organization}`} style={delay(i * 70)} className="reveal relative">
            <span className="absolute -right-[31px] top-1/2 z-10 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-night bg-brand shadow-[0_0_12px_#5B7CFF] sm:-right-[47px]" />
            <div
              onMouseMove={trackSpotlight}
              className="glass spotlight group flex flex-wrap items-center justify-between gap-4 rounded-2xl px-5 py-5 transition-colors hover:border-brand/30 sm:px-7"
            >
            <div className="flex items-center gap-4">
              <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-brand-cyan transition-colors group-hover:bg-brand/20 sm:flex">
                <Building2 className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{item.organization}</p>
              </div>
            </div>
            {item.note && <Chip tone="neutral">{item.note}</Chip>}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
