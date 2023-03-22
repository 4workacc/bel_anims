import { defineConfig } from 'vite'
import { remove_cors } from './src/pluggins/remove_cors'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [remove_cors()],
})
