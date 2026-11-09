import { useEffect } from 'react'

// عناصر دارای کلاس reveal را هنگام ورود به صفحه نمایش نمایان می‌کند
export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export const delay = (ms: number) => ({ '--delay': `${ms}ms` }) as React.CSSProperties

// موقعیت ماوس را برای افکت نور روی کارت ثبت می‌کند
export function trackSpotlight(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  el.style.setProperty('--my', `${e.clientY - rect.top}px`)
}

// مسیر فایل‌های پوشه public با درنظرگرفتن base path (برای GitHub Pages)
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
