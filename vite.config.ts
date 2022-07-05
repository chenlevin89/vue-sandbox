import { fileURLToPath, URL } from 'url'
import * as path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: path.resolve('./node_modules/vue/dist/vue.runtime.esm-browser.js'),
    },
  }
})
