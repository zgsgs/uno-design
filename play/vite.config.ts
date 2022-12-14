import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { getPlayOutDir } from '@uno-design/shared/utils'

const htmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      return html.replace(
        /<title>(.*?)<\/title>/,
        '<title>Title replaced!</title>',
      )
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), htmlPlugin()],
  build: {
    minify: true,
    emptyOutDir: false,
    outDir: getPlayOutDir(),
  },
})
