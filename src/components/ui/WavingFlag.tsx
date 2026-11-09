import type { CSSProperties } from 'react'
import { asset } from '../../lib/useReveal'

const WIDTH = 120
const HEIGHT = Math.round((WIDTH * 4) / 7)
const SLICES = 40
const SLICE = WIDTH / SLICES

// پرچم به نوارهای عمودی باریک تقسیم می‌شود و هر نوار با کمی تأخیر نسبت به نوار قبلی موج می‌خورد
export default function WavingFlag() {
  return (
    <div dir="ltr" className="flex items-start" role="img" aria-label="پرچم جمهوری اسلامی ایران">
      <div className="flex flex-col items-center">
        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#e9d9a6] to-[#a8873f]" />
        <span
          className="w-[3px] rounded-b-full bg-gradient-to-r from-[#8c8f98] via-[#e4e6ea] to-[#7b7e87]"
          style={{ height: HEIGHT + 36 }}
        />
      </div>

      <div className="relative mt-1.5 drop-shadow-[0_10px_24px_rgba(0,0,0,0.5)]" style={{ width: WIDTH, height: HEIGHT }}>
        {Array.from({ length: SLICES }, (_, i) => {
          const progress = i / (SLICES - 1)
          return (
            <span
              key={i}
              className="flag-slice absolute top-0"
              style={
                {
                  left: i * SLICE,
                  width: SLICE + 0.6,
                  height: HEIGHT,
                  backgroundImage: `url(${asset('iran-flag.svg')})`,
                  backgroundSize: `${WIDTH}px ${HEIGHT}px`,
                  backgroundPosition: `${-i * SLICE}px 0`,
                  '--amp': `${0.4 + progress * 5.5}px`,
                  animationDelay: `${-i * 0.042}s`,
                } as CSSProperties
              }
            />
          )
        })}
      </div>
    </div>
  )
}
