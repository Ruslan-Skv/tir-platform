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



// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path'
// import ssr from 'vite-plugin-ssr/plugin'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     ssr({
//       prerender: {
//         // SSG для маркетинговых страниц
//         partial: true,
//         // pages: [
//         //   '/',
//         //   '/about',
//         //   '/services', 
//         //   '/blog',
//         //   // Добавьте другие статические страницы
//         // ]
//       }
//     })
//   ],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//       '@/app': path.resolve(__dirname, './src/app'),
//       '@/pages': path.resolve(__dirname, './src/pages'),
//       '@/features': path.resolve(__dirname, './src/features'),
//       '@/entities': path.resolve(__dirname, './src/entities'),
//       '@/shared': path.resolve(__dirname, './src/shared'),
//     },
//   },
//   // build: {
//   //   rollupOptions: {
//   //     output: {
//   //       manualChunks: {
//   //         // Оптимизация бандлов
//   //         'three': ['three', '@react-three/fiber'],
//   //         'vendor': ['react', 'react-dom'],
//   //         'utils': ['lodash', 'axios']
//   //       }
//   //     }
//   //   }
//   // }
// })



// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//       '@/app': path.resolve(__dirname, './src/app'),
//       '@/pages': path.resolve(__dirname, './src/pages'),
//       '@/features': path.resolve(__dirname, './src/features'),
//       '@/entities': path.resolve(__dirname, './src/entities'),
//       '@/shared': path.resolve(__dirname, './src/shared'),
//     },
//   },
// })
