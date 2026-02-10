import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'fs'
import { resolve, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  // Use BASE_PATH when deploying to a subpath (e.g. GitHub Pages: /VIVAVOICE/)
  base: process.env.BASE_PATH || '/',
  plugins: [
    react(),
    // Copy index.html to 404.html so GitHub Pages (and similar) serve the SPA for all routes
    {
      name: 'copy-404',
      closeBundle() {
        const out = resolve(__dirname, 'dist')
        const index = join(out, 'index.html')
        const notFound = join(out, '404.html')
        if (existsSync(index)) copyFileSync(index, notFound)
      },
    },
  ],
})
