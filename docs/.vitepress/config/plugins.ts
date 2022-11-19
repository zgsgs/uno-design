import markDownPlugin from 'vitepress-demo-editor/markdownPlugin'
import TableContainer from './table'

// https://juejin.cn/post/6844903688536850440
export const mdPlugin = (md) => {
  md.use(TableContainer)
  md.use(markDownPlugin, {})
}
