export interface EducationItem {
  degree: string
  field: string
  university: string
  status?: string
}

export const education: EducationItem[] = [
  {
    degree: 'دکتری',
    field: 'مدیریت راهبردی فضای سایبر',
    university: 'دانشگاه عالی دفاع ملی',
    status: 'در حال تحصیل',
  },
  {
    degree: 'کارشناسی ارشد',
    field: 'پدافند غیرعامل – گرایش امنیت ملی',
    university: 'دانشگاه علوم و فنون فارابی',
  },
  {
    degree: 'کارشناسی',
    field: 'مهندسی برق – گرایش مخابرات',
    university: 'دانشگاه آزاد اسلامی',
  },
]
