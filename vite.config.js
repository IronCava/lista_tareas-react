import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Esta línea es necesaria para que Vite genere rutas relativas correctas al desplegar en GitHub Pages.
  // El valor debe coincidir con el nombre del repositorio: https://usuario.github.io/**nombre-repo**/
base: '/react-rutas-protegidas/',
  plugins: [react()],
})
