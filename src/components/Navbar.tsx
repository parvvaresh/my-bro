import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/nav'
import { site } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const ids = nav.map((item) => item.href.slice(1))
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 160) current = id
      }
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4
      if (atBottom) current = ids[ids.length - 1]
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div
        className={`relative mx-auto max-w-6xl overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-500 ${
          scrolled || open
            ? 'border-white/10 bg-night-2/75 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.7)]'
            : 'border-white/[0.06] bg-night-2/30'
        }`}
      >
        <div className="flex h-14 items-center justify-between px-3 sm:px-5">
          <a href="#home" className="flex items-center gap-2.5 text-[15px] font-bold text-white">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-violet text-sm font-black text-white shadow-[0_0_20px_rgba(91,124,255,0.6)]">
              م
            </span>
            <span className="truncate">{site.shortName}</span>
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {nav.map((item) => {
              const isActive = active === item.href.slice(1)
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                    isActive ? 'bg-white/[0.08] font-medium text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-l from-brand-cyan to-brand" />
                  )}
                </a>
              )
            })}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'بستن منو' : 'باز کردن منو'}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-white/[0.06] p-2 lg:hidden">
            <ul className="grid gap-0.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-slate-300 hover:bg-white/[0.06] hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <span
          aria-hidden
          className="absolute bottom-0 right-0 h-[2px] bg-gradient-to-l from-brand-cyan via-brand to-brand-violet"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </header>
  )
}
