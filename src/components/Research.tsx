import { FlaskConical } from 'lucide-react'
import Section from './ui/Section'
import Chip from './ui/Chip'
import { delay, trackSpotlight } from '../lib/useReveal'
import { research } from '../data/research'

export default function Research() {
  return (
    <Section
      id="research"
      title="پژوهش"
      eyebrow="فعالیت‌های پژوهشی"
      icon={FlaskConical}
      subtitle="تألیف، ترجمه، داوری و مشارکت در تدوین اسناد راهبردی."
    >
      <ol className="grid gap-3">
        {research.map((item, i) => (
          <li
            key={item.title}
            style={delay((i % 4) * 60)}
            onMouseMove={trackSpotlight}
            className="reveal glass spotlight group flex gap-4 rounded-2xl px-5 py-5 transition-all hover:border-brand/30 sm:gap-6 sm:px-7"
          >
            <Chip className="mt-1 h-fit shrink-0">{item.year}</Chip>
            <div>
              <h3 className="leading-8 text-slate-100 transition-colors group-hover:text-white">{item.title}</h3>
              {(item.detail || item.source) && (
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  {[item.detail, item.source].filter(Boolean).join(' — ')}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
