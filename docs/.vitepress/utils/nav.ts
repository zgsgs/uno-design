import { version } from '../../package.json'

/**
 * 顶部导航栏菜单
 */
export const nav = [
  {
    text: '文档',
    activeMatch: '^/docs/',
    link: '/docs/install',
  },
  {
    text: '基础组件',
    activeMatch: '^/components/',
    link: '/components/button',
  },
  {
    text: 'Playground',
    link: 'http://localhost:8888/',
  },
  {
    text: `v${version}`,
    link: 'https://www.npmjs.com/package/uno-design',
  },
]
