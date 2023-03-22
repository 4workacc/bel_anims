import { defineConfig } from 'vite'
import { remove_cors } from './src/pluggins/remove_cors'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [remove_cors()],
  build: {
    rollupOptions: {
      output: {        
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name!.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType!)) {
            extType = 'img';
          }
          else if (/ttf|eot/i.test(extType!)) {
            extType = 'fonts';
          }
          else if (/css|scss/i.test(extType!)) {
            extType = 'styles';
          }         
          return `assets/${extType}/[name]-[hash][extname]`;
        },        
        chunkFileNames: 'assets/scripts/[name]-[hash].js',        
        entryFileNames: 'assets/scripts/[name]-[hash].js',
      },
    },
  },
})
