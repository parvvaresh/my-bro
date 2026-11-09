import { Mail, Phone, Send } from 'lucide-react'
import Container from './ui/Container'
import { site } from '../data/site'

export default function ContactCTA() {
  const { email, phone } = site.contact

  return (
    <section id="contact" className="relative scroll-mt-24">
      <Container className="py-12 sm:py-16">
        <div className="reveal border-glow relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1b2a6b] via-night-2 to-[#2a1660] px-6 py-14 text-center sm:px-14 sm:py-20">
          <div className="grid-bg absolute inset-0 opacity-60" />
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-brand-violet/40 blur-3xl" />

          <div className="relative">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-violet text-white shadow-glow">
              <Send className="h-7 w-7" />
            </span>
            <h2 className="mt-6 text-3xl font-black text-white sm:text-5xl">
              <span className="text-gradient">ارتباط با من</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-9 text-slate-300 sm:text-xl">
              برای ارتباط علمی، پژوهشی و حرفه‌ای با مهندس مهدی عزیزی مهماندوست
            </p>

            {/* TODO: پس از افزودن ایمیل و تلفن رسمی در src/data/site.ts، این بخش به‌صورت خودکار نمایش داده می‌شود */}
            {email || phone ? (
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                {email && (
                  <a
                    href={`mailto:${email}`}
                    dir="ltr"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-night transition-transform hover:-translate-y-0.5"
                  >
                    <Mail className="h-4 w-4" />
                    {email}
                  </a>
                )}
                {phone && (
                  <a
                    href={`tel:${phone}`}
                    dir="ltr"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-bold text-white"
                  >
                    <Phone className="h-4 w-4" />
                    {phone}
                  </a>
                )}
              </div>
            ) : (
              <p className="mt-8 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-400">
                اطلاعات تماس به‌زودی در این بخش قرار می‌گیرد.
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
