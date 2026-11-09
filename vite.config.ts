import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// BASE_PATH در GitHub Actions مقداردهی می‌شود (مثلاً /my-bro/)
const base = process.env.BASE_PATH ? `${process.env.BASE_PATH.replace(/\/$/, '')}/` : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
