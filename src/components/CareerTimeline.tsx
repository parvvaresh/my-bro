import { Milestone } from 'lucide-react'
import Section from './ui/Section'
import { delay } from '../lib/useReveal'
import { careerTimeline } from '../data/career'

export default function CareerTimeline() {
  const last = careerTimeline.length - 1

  return (
    <Section id="career" title="گاه‌شمار" eyebrow="مسیر حرفه‌ای" icon={Milestone}>
      <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-7 lg:gap-3">
        <span
          aria-hidden
          className="absolute right-[11px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-cyan via-brand to-brand-violet sm:hidden lg:right-0 lg:top-[11px] lg:block lg:h-px lg:w-full lg:bg-gradient-to-l"
        />
        {careerTimeline.map((item, i) => (
          <li key={item.year} style={delay(i * 80)} className="reveal relative pr-9 sm:pr-0 lg:pt-10">
            <span
              className={`absolute right-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border sm:hidden lg:flex lg:top-0 ${
                i === last ? 'border-brand-cyan bg-brand-cyan/20' : 'border-brand/50 bg-night-2'
              }`}
            >
              <span className={`h-2 w-2 rounded-full ${i === last ? 'animate-pulse bg-brand-cyan' : 'bg-brand'}`} />
            </span>
            <div
              className={`glass h-full rounded-2xl p-4 transition-transform hover:-translate-y-1 ${
                i === last ? '!border-brand-cyan/40 !bg-brand-cyan/[0.07]' : ''
              }`}
            >
              <span className={`text-2xl font-black ${i === last ? 'text-brand-cyan' : 'text-white'}`}>{item.year}</span>
              <p className="mt-2 text-sm leading-7 text-slate-400">{item.title}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
