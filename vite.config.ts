import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Base para GitHub Pages (sitio de proyecto). Si se usa dominio propio,
  // cambiar a '/' y ajustar basename en App.tsx + rutas en index.html.
  base: '/prometheus-salon/',
  plugins: [react(), tailwindcss()],
})
