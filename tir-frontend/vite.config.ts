import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import ssr from 'vite-plugin-ssr/plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ssr({
      prerender: {
        partial: true
      },
      // Отключаем проверку алиасов
      disableAutoFullBuild: true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true
  }
})
