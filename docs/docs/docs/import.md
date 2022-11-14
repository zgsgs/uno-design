# 快速上手

## 完整引入

在 `main.ts` 中引入下面内容

```ts
import { createApp } from 'vue'
import UnoDesign from 'uno-design'
import App from './App.vue'

import 'uno-design/dist/index.css'

createApp(App).use(UnoDesign).mount('#app')
```

## 自动导入

:::danger
测试功能，暂未实现
:::

首先你需要安装 unplugin-vue-components 和 unplugin-auto-import 这两款插件

```shell
npm install -D unplugin-vue-components unplugin-auto-import
```

然后把下列代码插入到你的 Vite 或 Webpack 的配置文件中

## vite

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import UnoDesignResolver from 'uno-design/resolver'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [UnoDesignResolver()]
    }),
    Components({
      resolvers: [UnoDesignResolver()]
    })
  ]
})
```

## 按需引入

为了减小体积，只希望引入部分组件，可以使用按需引入的方式

```ts
import { createApp } from 'vue'
import { FButton, FCard } from 'uno-design'
import App from './App.vue'

// 组件按需引入

// 样式按需引入
import 'uno-design/theme/button.css'
import 'uno-design/theme/card.css'

createApp(App).use(FButton).use(FCard).mount('#app')
```

## 使用 UMD

可通过 `UMD` 模式在 `*.html` 中引入 `Uno Design`，快速构建您的程序

```html
<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/uno-design/dist/index.css"
  />
</head>

<body>
  <div id="app">
    <f-space>
      <f-button round type="default">默认按钮</f-button>
      <f-button round type="primary">主要按钮</f-button>
      <f-button round type="success">成功按钮</f-button>
      <f-button round type="danger">危险按钮</f-button>
      <f-button round type="warning">警告按钮</f-button>
    </f-space>

    <f-divider>华丽的分隔线</f-divider>

    <f-button type="primary" @click="visible = true">打开 Dialog</f-button>
    <f-dialog title="Title" v-model:visible="visible">
      欢迎使用 Uno Design！
    </f-dialog>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.global.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/uno-design/dist/index.umd.js"></script>
  <script>
    const { createApp, ref } = Vue
    const { FButton, FSpace, FDivider, FDialog } = UnoDesign

    const app = createApp({
      setup() {
        const visible = ref(false)

        return { visible }
      }
    })

    app.use(FButton)
    app.use(FSpace)
    app.use(FDivider)
    app.use(FDialog)
    app.mount('#app')
  </script>
</body>
```
