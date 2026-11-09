import { FileText, Newspaper } from 'lucide-react'
import Section from './ui/Section'
import Card from './ui/Card'
import Chip from './ui/Chip'
import { publications } from '../data/publications'

export default function Publications() {
  return (
    <Section id="publications" title="مقالات" eyebrow="انتشارات علمی" icon={Newspaper}>
      <div className="grid gap-4 md:grid-cols-2">
        {publications.map((pub, i) => (
          <Card key={pub.title} delay={(i % 2) * 100} className="group flex flex-col p-7">
            <div className="flex items-center justify-between">
              <Chip>{pub.year}</Chip>
              <FileText className="h-5 w-5 text-slate-600 transition-colors group-hover:text-brand-cyan" />
            </div>
            <h3 className="mt-5 text-xl font-bold leading-[1.8] text-white">«{pub.title}»</h3>
            <div className="mt-auto border-t border-white/[0.06] pt-5">
              <p className="text-sm text-slate-300">{pub.venue}</p>
              {pub.publisher && <p className="mt-1 text-xs leading-5 text-slate-500">{pub.publisher}</p>}
              {pub.pdf && (
                <a
                  href={pub.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-brand-cyan hover:underline"
                >
                  دریافت PDF
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
