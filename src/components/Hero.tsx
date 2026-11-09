import { ArrowLeft, BookOpen, GraduationCap, Network, ShieldCheck, Sparkles } from 'lucide-react'
import Container from './ui/Container'
import WavingFlag from './ui/WavingFlag'
import NetworkCanvas from './ui/NetworkCanvas'
import CountUp from './ui/CountUp'
import { asset, delay, trackSpotlight } from '../lib/useReveal'
import { hero } from '../data/hero'

const orbiters = [
  { Icon: ShieldCheck, pos: 'top-[6%] -right-3 sm:-right-6', d: '0s' },
  { Icon: Network, pos: 'bottom-[18%] -right-5 sm:-right-10', d: '-2s' },
  { Icon: GraduationCap, pos: 'top-[22%] -left-5 sm:-left-10', d: '-4s' },
  { Icon: BookOpen, pos: 'bottom-[4%] -left-2 sm:-left-5', d: '-1s' },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-10 pt-28 sm:pt-36">
      <div className="absolute inset-0 -z-0">
        <div className="grid-bg absolute inset-0" />
        <NetworkCanvas className="absolute inset-0 opacity-70" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent" />
      </div>

      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-7">
            <div className="rise mb-8 flex items-center gap-4">
              <WavingFlag />
            </div>

            <span
              style={delay(80)}
              className="rise inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1.5 text-xs font-medium text-[#C7D3FF]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-brand-cyan" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-cyan" />
              </span>
              پژوهشگر و مدرس دانشگاه
            </span>

            <h1 style={delay(140)} className="rise mt-6 font-black">
              <span className="block text-2xl font-medium text-slate-400 sm:text-3xl">{hero.honorific}</span>
              <span className="text-gradient mt-2 block text-[2.4rem] leading-[1.3] sm:text-6xl lg:text-[4.2rem]">
                {hero.name}
              </span>
            </h1>

            <p
              style={delay(240)}
              className="rise mt-6 max-w-2xl text-lg font-medium leading-[1.9] text-slate-200 sm:text-2xl sm:leading-[1.7]"
            >
              {hero.role}
            </p>
            <p style={delay(320)} className="rise mt-4 max-w-xl leading-8 text-slate-400">
              {hero.summary}
            </p>

            <div style={delay(400)} className="rise mt-10 flex flex-wrap items-center gap-3">
              <a
                href={hero.primaryCta.href}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-l from-brand to-brand-violet px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_40px_-10px_rgba(91,124,255,0.9)] transition-transform hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-l from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                {hero.primaryCta.label}
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-colors hover:border-brand-cyan/50 hover:bg-white/[0.08]"
              >
                <Sparkles className="h-4 w-4 text-brand-cyan" />
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          <figure style={delay(220)} className="rise relative mx-auto w-full max-w-[17rem] sm:max-w-[21rem] lg:col-span-5">
            {/* حلقه‌های چرخان */}
            <div className="animate-spin-slow absolute -inset-8 rounded-full border border-dashed border-brand/25" />
            <div className="animate-spin-slower absolute -inset-16 rounded-full border border-white/[0.06]" />
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-brand via-brand-violet to-brand-cyan opacity-60 blur-2xl" />

            <div className="border-glow animate-float relative rounded-[2.5rem] bg-night-2 p-2">
              {/* TODO: برای جایگزینی تصویر رسمی، فایل portrait.jpg را در پوشه public قرار دهید و src را تغییر دهید */}
              <img
                src={asset('portrait.svg')}
                alt="تصویر مهندس مهدی عزیزی مهماندوست"
                className="aspect-[4/5] w-full rounded-[2rem] bg-night-3 object-cover"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-night/70 px-4 py-3 backdrop-blur-xl">
                <p className="text-sm font-bold text-white">{hero.honorific} {hero.name}</p>
                <p className="mt-0.5 text-xs text-brand-cyan">امنیت · پدافند غیرعامل · فضای سایبر</p>
              </div>
            </div>

            {orbiters.map(({ Icon, pos, d }) => (
              <span
                key={pos}
                className={`animate-float glass absolute flex h-12 w-12 items-center justify-center rounded-2xl text-brand-cyan sm:h-14 sm:w-14 ${pos}`}
                style={{ animationDelay: d }}
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
            ))}
          </figure>
        </div>

        <dl className="mt-20 grid grid-cols-3 gap-3 sm:mt-24 sm:gap-5">
          {hero.stats.map((stat, i) => (
            <div
              key={stat.label}
              style={delay(i * 100)}
              onMouseMove={trackSpotlight}
              className="reveal glass spotlight group rounded-3xl p-4 text-center sm:p-7"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block bg-gradient-to-b from-white to-[#9FB2FF] bg-clip-text text-3xl font-black leading-tight text-transparent sm:text-6xl">
                  <span dir="ltr">
                    <CountUp value={stat.value} />
                  </span>
                </span>
                <span className="mt-2 block text-[11px] leading-5 text-slate-400 sm:text-sm">{stat.label}</span>
              </dd>
              <span className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-l from-transparent via-brand-cyan/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
