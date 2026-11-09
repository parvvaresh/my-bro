import { Medal, Trophy } from 'lucide-react'
import Section from './ui/Section'
import { delay, trackSpotlight } from '../lib/useReveal'
import { honors, type Honor } from '../data/honors'

export default function Honors() {
  const byYear = honors.reduce<[string, Honor[]][]>((groups, honor) => {
    const last = groups[groups.length - 1]
    if (last && last[0] === honor.year) last[1].push(honor)
    else groups.push([honor.year, [honor]])
    return groups
  }, [])

  return (
    <Section
      id="honors"
      title="تقدیرنامه‌ها"
      eyebrow="افتخارات"
      icon={Trophy}
      subtitle="تقدیرنامه‌های دریافتی از نهادها و مسئولان کشوری و لشکری."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {byYear.map(([year, items], i) => (
          <div
            key={year}
            style={delay((i % 2) * 90)}
            onMouseMove={trackSpotlight}
            className="reveal glass spotlight rounded-3xl p-6 transition-colors hover:border-brand-gold/30 sm:p-7"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-gold to-amber-600 text-night shadow-[0_0_24px_-4px_rgba(243,201,105,0.6)]">
                <Medal className="h-5 w-5" />
              </span>
              <span className="text-3xl font-black text-white">{year}</span>
            </div>
            <ul className="mt-5 space-y-3">
              {items.map((honor) => (
                <li key={honor.issuer} className="flex gap-3 leading-8 text-slate-300">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold/80" />
                  <span>
                    {honor.issuer}
                    {honor.image && (
                      <a
                        href={honor.image}
                        target="_blank"
                        rel="noreferrer"
                        className="ms-2 text-sm font-medium text-brand-cyan hover:underline"
                      >
                        تصویر
                      </a>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
