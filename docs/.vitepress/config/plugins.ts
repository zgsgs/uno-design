import MarkdownItContainer from 'markdown-it-container'
import MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token'
import TableContainer from './table'

// https://markdown-it.docschina.org/#%E7%94%A8%E6%B3%95%E7%A4%BA%E4%BE%8B
// https://juejin.cn/post/6844903688536850440
const markdown: MarkdownIt = MarkdownIt({
  breaks: true,
})

export const mdPlugin = (md: MarkdownIt) => {
  md.use(TableContainer)
  md.use(MarkdownItContainer, 'demo', {
    validate(params: string) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render(tokens: Token[], idx: number) {
      const m: RegExpMatchArray = tokens[idx].info.trim().match(/^demo\s*(.*)$/) as RegExpMatchArray
      const description: string = m && m.length > 1 ? m[1] : ''

      // eslint-disable-next-line no-console
      console.log(description)
      if (tokens[idx].nesting === 1) {
        return `
          <vp-demo :open="false">

          ${encodeURIComponent(markdown.render(description))}
          `
      }
      else {
        return '</vp-demo>'
      }
    },
  })
}
