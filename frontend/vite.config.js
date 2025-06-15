import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/linaaa': 'http://localhost:5000/',
      '/api': 'http://localhost:5000', // Optional, if you call other endpoints later
    }
  }
})
