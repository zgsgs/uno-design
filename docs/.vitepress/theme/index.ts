import type { App } from 'vue'
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style/vitepress.scss'
import '@uno-design/theme'
import UnoDesign from '../../../packages/web-vue/index'
import { vpDemo, vpSearch } from './components'

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
    app.use(UnoDesign)
    app.component('VpDemo', vpDemo)
  },
}
