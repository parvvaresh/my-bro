import { Lightbulb, Radio } from 'lucide-react'
import Section from './ui/Section'
import { patent } from '../data/patent'

export default function Patent() {
  return (
    <Section id="patent" title="ثبت اختراع" eyebrow="نوآوری" icon={Lightbulb}>
      <div className="reveal border-glow relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-night-3 via-night-2 to-[#1a1250] p-7 sm:p-12">
        {/* طرح مدار */}
        <svg aria-hidden className="absolute inset-0 h-full w-full opacity-[0.12]" viewBox="0 0 800 400" preserveAspectRatio="none">
          <g fill="none" stroke="#38D9F5" strokeWidth="1.5">
            <path d="M0 80 H200 L240 120 H420 L460 80 H800" />
            <path d="M0 320 H160 L200 280 H520 L560 320 H800" />
            <path d="M600 0 V140 L640 180 V400" />
            <path d="M120 0 V60 L160 100 V400" />
          </g>
          <g fill="#38D9F5">
            <circle cx="240" cy="120" r="5" />
            <circle cx="460" cy="80" r="5" />
            <circle cx="200" cy="280" r="5" />
            <circle cx="640" cy="180" r="5" />
            <circle cx="160" cy="100" r="5" />
          </g>
        </svg>
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-violet/30 blur-3xl" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 text-xs font-medium text-brand-gold">
              <Radio className="h-3.5 w-3.5" />
              اختراع ثبت‌شده
            </span>
            <p className="mt-6 text-2xl font-black leading-[1.7] text-white sm:text-4xl sm:leading-[1.6]">
              {patent.title}
            </p>
          </div>
          <dl className="grid shrink-0 grid-cols-2 gap-3 lg:w-80">
            <div className="glass rounded-2xl p-5">
              <dt className="text-xs text-slate-400">شماره ثبت</dt>
              <dd className="mt-2 text-2xl font-black text-white">{patent.number}</dd>
            </div>
            <div className="glass rounded-2xl p-5">
              <dt className="text-xs text-slate-400">تاریخ ثبت</dt>
              <dd className="mt-2 text-2xl font-black text-white" dir="ltr">
                <span className="block text-right">{patent.date}</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  )
}
