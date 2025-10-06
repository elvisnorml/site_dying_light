import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vuetify from 'vite-plugin-vuetify'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  root: path.resolve(__dirname, 'src/lib'), // корень проекта, где index.html
  resolve: {
    alias: {
      '#': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
      styles: 'expose'
    }),
    Components({
      dirs: [
        path.resolve(__dirname, 'src/components'),
        path.resolve(__dirname, 'src/pages'),
        path.resolve(__dirname, 'src/layout')
      ],
      extensions: ['vue'],
      deep: true,
      dts: path.resolve(__dirname, 'src/types/components.d.ts')
    })
  ],
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'src/lib/index.html')
    }
  },
  server: {
    port: 5173,
    fs: { strict: false },
    historyApiFallback: true
  }
})
