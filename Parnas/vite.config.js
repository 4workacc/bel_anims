import { defineConfig } from 'vite'
import { remove_cors } from './src/pluggins/remove_cors'

export default defineConfig({
  // ...
  plugins:[remove_cors()]
})