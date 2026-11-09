import { ArrowUp } from 'lucide-react'
import Container from './ui/Container'
import { site } from '../data/site'

const year = new Intl.DateTimeFormat('fa-IR-u-ca-persian', { year: 'numeric' }).format(new Date())

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <Container className="flex flex-col items-center gap-4 py-8 text-sm text-slate-500 sm:flex-row sm:justify-between">
        <p>
          © {year} — {site.name}
        </p>
        <a
          href="#home"
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition-colors hover:border-brand/40 hover:text-white"
        >
          بازگشت به بالا
          <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
        </a>
      </Container>
    </footer>
  )
}
