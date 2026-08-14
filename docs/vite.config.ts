import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/PressCentra/', // Note the leading and trailing slashes
  server: {
    port: 6767
  }
})
