import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
   return {
      plugins: [react()],
      esbuild: {
         include: /\.js$/,
         exclude: [],
         loader: 'jsx',
      },
      base: mode === 'gh-pages' ? '/Flexbox-Froggy-clone/' : '/',
   }
})
