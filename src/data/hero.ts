export interface HeroStat {
  value: string
  label: string
}

export const hero = {
  honorific: 'مهندس',
  name: 'مهدی عزیزی مهماندوست',
  role: 'پژوهشگر، مدرس دانشگاه و متخصص حوزه‌های امنیت، پدافند غیرعامل و فضای سایبر',
  summary:
    'با بیش از ۱۴ سال سابقه خدمت در دستگاه‌های دولتی، سابقه تدریس دانشگاهی و فعالیت مستمر در حوزه‌های علمی، پژوهشی و راهبردی.',
  primaryCta: { label: 'آشنایی با سوابق', href: '#about' },
  secondaryCta: { label: 'پژوهش‌ها و مقالات', href: '#research' },
  stats: [
    { value: '+۱۴', label: 'سال سابقه خدمت' },
    { value: '+۱۳', label: 'سال سابقه تدریس دانشگاهی' },
    { value: '۱', label: 'ثبت اختراع' },
  ] as HeroStat[],
}
