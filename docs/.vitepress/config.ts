import { defineConfig } from 'vitepress'
import markDownPlugin from 'vitepress-demo-editor/markdownPlugin'
import { description, head, nav, sidebar } from './utils'
// import { mdPlugin } from './config/plugins'

export default defineConfig({
  title: 'Uno Design',
  head,
  description,
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: '最后更新时间',
    nav,
    sidebar,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/zgsgs/uno-design',
      },
    ],
    logo: './theme/images/logo.svg',
  },
  markdown: {
    // 自定义 markdown 语法
    config: (md) => {
      md.use(markDownPlugin, {})
      // mdPlugin(md)
    },
  },
})
