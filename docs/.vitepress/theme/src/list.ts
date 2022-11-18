/**
 * 底部页脚链接
 */
export const bottomList = [
  {
    title: '社区',
    item: [
      { text: '演练场', link: 'http://localhost:8888/' },
      { text: 'Github 组织', link: 'https://github.com/UnoDesign' },
      {
        text: 'Github 仓库',
        link: 'https://github.com/zgsgs/uno-design',
      },
      { text: 'Npm 组织', link: 'https://www.npmjs.com/org/uno-design' },
      { text: 'Npm 仓库', link: 'https://www.npmjs.com/package/uno-design' },
    ],
  },
  {
    title: '关于我',
    item: [
      { text: 'Github', link: 'https://github.com/zgsgs' },
      { text: '掘金', link: 'https://juejin.cn/user/xxxx/posts' },
      { text: 'Blog', link: 'https://blog.xxxx.cn' },
    ],
  },
  {
    title: '帮助',
    item: [
      {
        text: '报告问题',
        link: 'https://github.com/zgsgs/uno-design/issues',
      },
      {
        text: '发起讨论',
        link: 'https://github.com/zgsgs/uno-design/discussions',
      },
      {
        text: '贡献指南',
        link: 'https://github.com/zgsgs/uno-design/blob/main/CONTRIBUTING.md',
      },
    ],
  },
] as const
