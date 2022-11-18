import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { execaSync } from 'execa'

const commit = execaSync('git', ['rev-parse', 'HEAD']).stdout.slice(0, 7)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    __COMMIT__: JSON.stringify(commit),
    __VUE_PROD_DEVTOOLS__: JSON.stringify(true),
  },
  build: {
    minify: true,
    chunkSizeWarningLimit: 2,
    reportCompressedSize: true,
    emptyOutDir: false,
    outDir: path.resolve(__dirname, '../../dist-playground'),
  },
})
