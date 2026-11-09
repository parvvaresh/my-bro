import { Quote, UserRound } from 'lucide-react'
import Section from './ui/Section'
import Card from './ui/Card'
import { about } from '../data/about'

export default function About() {
  const [lede, ...rest] = about.paragraphs

  return (
    <Section id="about" title="درباره" eyebrow="معرفی" icon={UserRound}>
      <Card className="p-6 sm:p-12">
        <Quote className="absolute left-6 top-6 h-20 w-20 text-brand/10 sm:h-28 sm:w-28" />
        <p className="relative text-lg font-medium leading-9 text-white sm:text-[1.35rem] sm:leading-[2.6rem]">{lede}</p>
        <div className="mt-8 grid gap-5 border-t border-white/[0.07] pt-8 text-slate-400 sm:text-[17px] md:grid-cols-3">
          {rest.map((paragraph) => (
            <p key={paragraph} className="border-r-2 border-brand/40 pr-4 leading-8">
              {paragraph}
            </p>
          ))}
        </div>
      </Card>
    </Section>
  )
}
