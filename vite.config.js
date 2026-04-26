import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages: set base to '/Frontend/' (repo name)
export default defineConfig({
  plugins: [react()],
  base: '/Frontend/',
  build: {
    chunkSizeWarningLimit: 1000,
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true
      }
    }
  }
})
