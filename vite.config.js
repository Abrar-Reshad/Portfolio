import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' makes the build work on Vercel, a GitHub Pages project site, or a custom domain.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
