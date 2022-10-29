// 默认入口文件名
// 请求 CDN 的基础路径
export const publicPath = 'https://cdn.jsdelivr.net/npm/uno-design'

export const defaultMainFile = 'App.vue'

// Uno-Design 配置文件名
export const unoPlugin = 'uno.ts'

export const welcomeCode = `
<script setup lang='ts'>
  import { ref } from 'vue'
  import { install } from './${unoPlugin}'

  install()

  const value = ref(true)
  const msg = ref('Hello World！')
</script>

<template>
  <h2>🌈 欢迎使用 Uno Design！🌊</h2>

  <h1>{{ msg }}</h1>
  <input v-model="msg">
</template>
`

export const unoPluginCode = `
import UnoDesign from '@uno-design/web-vue'
import { getCurrentInstance } from 'vue'
import type { ComponentInternalInstance } from 'vue'

await appendStyle()

export function install () {
  const instance = getCurrentInstance() as ComponentInternalInstance
  instance.appContext.app.use(UnoDesign)
}

function appendStyle () {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '${publicPath}/dist/index.css'
    link.onload = resolve
    link.onerror = reject
    document.body.appendChild(link)
  })
}
`

// 引入 es 模块代码
export const unoImports = {
  'uno-design': `${publicPath}/es/index.js`,
}
