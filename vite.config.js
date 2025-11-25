import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
// If you plan to host the app on GitHub Pages at https://<username>.github.io/Doctors
// set base to '/Doctors/'. Vite will prefix built asset URLs with this base.
// When deploying to other providers (Vercel/Netlify), you can revert base to '/'.
export default defineConfig({
  base: '/Doctors/',
  plugins: [react(), tailwindcss()],
})
