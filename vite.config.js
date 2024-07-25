import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import compression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    compression(), 
    visualizer(),
  ],
  server: {
    proxy: {
      '/api/wilayah': {
        target: 'https://www.emsifa.com/api-wilayah-indonesia/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/wilayah/, ''),
      },
      '/database': {
        target: 'https://delicious-tricky-fisherman.glitch.me',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/database/, ''),
      },
      '/api/currencyconvert': {
        target: 'https://api.exchangerate-api.com/v4/latest/IDR',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/currencyconvert/, ''),
      }
    },
  },
})
