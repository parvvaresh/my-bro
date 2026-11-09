import { useEffect, useRef, useState } from 'react'

const FA = '۰۱۲۳۴۵۶۷۸۹'
const toLatin = (s: string) => s.replace(/[۰-۹]/g, (d) => String(FA.indexOf(d)))
const toFa = (n: number) => String(n).replace(/\d/g, (d) => FA[Number(d)])

// عدد فارسی را هنگام ورود به صفحه از صفر تا مقدار نهایی می‌شمارد
export default function CountUp({ value }: { value: string }) {
  const match = toLatin(value).match(/^(\D*)(\d+)(\D*)$/)
  const target = match ? Number(match[2]) : 0
  const [n, setN] = useState(match ? 0 : target)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!match || !ref.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(target)
      return
    }
    let raf = 0
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / 1600)
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    io.observe(ref.current)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target])

  if (!match) return <span>{value}</span>
  return (
    <span ref={ref}>
      {match[1]}
      {toFa(n)}
      {match[3]}
    </span>
  )
}
