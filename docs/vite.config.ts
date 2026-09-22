import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.CF_PAGES === '1' 
    ? '/' 
    : '/PressCentra/',
  server: {
    port: 6767
  }
})
