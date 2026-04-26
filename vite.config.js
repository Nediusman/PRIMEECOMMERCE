import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For Vercel deployment - no base path needed
export default defineConfig({
  plugins: [react()],
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
