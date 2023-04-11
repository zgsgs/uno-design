import { defineConfig, loadEnv } from 'vite'
import { setupVitePlugins } from './vite/plugins'

export default defineConfig((configEnv) => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd())
  return {
    plugins: setupVitePlugins(viteEnv),
    optimizeDeps: {
      exclude: ['vitepress'],
    },
    server: {
      port: 9999, // 端口号
    },
  }
})
