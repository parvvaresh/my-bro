// پس‌زمینه‌ی ثابت صفحه: نورهای شناور، شبکه و نویز
export default function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-night">
      <div className="orb -right-40 -top-40 h-[34rem] w-[34rem] bg-brand/30" />
      <div className="orb -left-40 top-1/3 h-[30rem] w-[30rem] bg-brand-violet/25" style={{ animationDelay: '-6s' }} />
      <div className="orb bottom-[-12rem] right-1/4 h-[28rem] w-[28rem] bg-brand-cyan/15" style={{ animationDelay: '-12s' }} />
      <div className="noise absolute inset-0" />
    </div>
  )
}
