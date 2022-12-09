import type { App } from 'vue'
import { h } from 'vue'
import Theme from 'vitepress/theme'
import { vuePlugin } from 'vitepress-demo-editor'
import 'vitepress-demo-editor/dist/style.css'
import './style/vitepress.scss'
import '@uno-design/theme'
import UnoDesign from '../../../packages/web-vue/index'
import { Home, vpDemo, vpSearch } from './components'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      /**
        * 导航栏插入搜索的输入框插槽
        * 更多插槽参考
        *
        * https://github.com/vuejs/vitepress/blob/main/docs/guide/theme-introduction.md
        */
      'nav-bar-content-before': () => h(vpSearch),
    })
  },
  enhanceApp({ app }: { app: App }) {
    app.component('VpDemo', vpDemo)
    app.component('Home', Home)
    app.use(UnoDesign)
    app.use(vuePlugin, {
      defaultDirection: 'column', // 默认显示方向
      ms: 30, // 编辑器防抖时间
      handleError() {}, // 错误信息
      onMonacoCreated() {}, // monaco 创建成功时触发
    })
  },
}
