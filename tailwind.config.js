/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: '#050816',
          2: '#0A1024',
          3: '#111A36',
        },
        brand: {
          DEFAULT: '#5B7CFF',
          cyan: '#38D9F5',
          violet: '#9B6BFF',
          gold: '#F3C969',
        },
      },
      fontFamily: {
        sans: ['Vazirmatn', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(91,124,255,0.25), 0 20px 60px -20px rgba(91,124,255,0.55)',
      },
    },
  },
  plugins: [],
}
