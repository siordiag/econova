import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/botanaut-app/',  // 👈🏽 add your folder name here!
})
