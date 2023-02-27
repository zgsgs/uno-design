import path from 'path'
import superEjs from 'super-ejs'
import changeCase from '@juln/change-case'
import fsExtra from 'fs-extra'

const logInfo = (...args: string[]): void => console.error('\x1B[33m', ...args, '\x1B[0m')
const logError = (...args: string[]): void => console.error('\x1B[31m', ...args, '\x1B[0m')

const prefix = 'u'
const upperPrefix = 'U'
const updatedFiles: string[] = []
const compName: string = getCompName()
const displayName = `${changeCase(compName, 'upper-camel-case')}`
const __dirname: string = path.resolve()
const mainOutputDir: string = path.resolve(
  __dirname,
  '../web-vue',
  compName,
)

const mainFilePath: string = path.join(
  'packages/web-vue',
  compName,
  `${compName}.tsx`,
)

/* 工具函数 */
// 检测组件名是否规范
function getCompName(): string {
  const input: string = process.argv[2]

  if (input === undefined) {
    logError('\n命令使用方法为: pnpm new <component-name>\n例如: pnpm new user-avatar\n')
    process.exit(0)
  }

  if (
    input.match(/^[a-zA-Z]+?[-|_|a-zA-Z0-9]*?$/)
    && !input.endsWith('-')
    && !input.endsWith('_')
  ) {
    const compName: string = changeCase(input, 'param-case')
    return compName
  }

  logError('组件名不规范')
  process.exit(0)
}

function getFullPath(filePath: string) {
  return path.resolve(__dirname, `${filePath}`)
}

// 编译文件内容
async function superEjsGenerateDir(outputDir: string, tplDir: string): Promise<void> {
  return await superEjs.gerenateDir(
    outputDir,
    tplDir,
    {
      prefix,
      upperPrefix,
      name: compName,
      displayName,
      changeCase,
    },
    {},
    {
      parseFilename: (original: string): string => {
        return original.replace(
          /(.*?)__name__([a-zA-Z0-9|\.]*?$)/,
          `$1${displayName}$2`,
        )
      },
    },
  )
}

/* 执行入口 */
// 公开检测
const detectPublic = async (): Promise<void> => {
  if (fsExtra.existsSync(mainOutputDir)) {
    logError(`组件 ${compName}` + '\n' + `已存在${mainFilePath}`)
    return
  }

  try {
    await generate()
    logInfo(`本次创建/修改的文件有：\n\n${updatedFiles.join('\n')}\n`)
  }
  catch (error: unknown) {
    logError(`不好意思，组件[${compName}]创建失败了\nerror: ${error}`)
    process.exit(0)
  }

  logInfo(`${upperPrefix}${displayName} 组件创建完成 🎉🎉🎉` + '\n')
}

detectPublic()

async function generate(): Promise<[void, void, void, void, void, void, void, void]> {
  updatedFiles.push(
    `packages/web-vue/${compName}/**`,
    'packages/web-vue/index.ts',
    `packages/theme/src/${compName}.scss`,
    'packages/theme/index.scss',
    `packages/web-vue/${compName}/__test__/${compName}.spec.ts`,
    `docs/components/${compName}.md`,
    `packages/web-vue/${compName}/demos/basic.vue`,
    `packages/web-vue/${compName}/index.md`,
  )
  const catchError = async (callback: Function, info: string): Promise<void> => {
    try {
      await callback()
    }
    catch (error: unknown) {
      logError(`${info}\n` + `error: ${error}`)
    }
  }
  return Promise.all([
    catchError(generateComponentDir, '🚧 组件源文件创建失败'),
    catchError(updateComponentEntry, '🚧 组件入口修改失败'),
    catchError(incrementStyle, '🚧 样式文件创建失败'),
    catchError(updateStyleEntry, '🚧 样式入口修改失败'),
    catchError(incrementTest, '🚧 测试文件创建失败'),
    catchError(incrementDocs, '🚧 文档文件创建失败'),
    catchError(incrementDemos, '🚧 Demo文件创建失败'),
    catchError(incrementDemosDoc, '🚧 Demo文件文档入口创建失败'),
  ] as const)
}

async function generateComponentDir(): Promise<void> {
  const tplDir: string = getFullPath('./template/component')

  await superEjsGenerateDir(mainOutputDir, tplDir)
}

async function updateComponentEntry(): Promise<void> {
  const entryFilePath: string = path.resolve(
    __dirname,
    '../web-vue/index.ts',
  )
  let content: string = (await fsExtra.readFile(entryFilePath)).toString()
  content = `${content.slice(0, -1)}\nexport * from './${compName}'\n`

  await fsExtra.writeFile(entryFilePath, content)
}

async function incrementStyle(): Promise<void> {
  const outputDir: string = getFullPath('../preset-uno/shortcuts')
  const tplDir: string = getFullPath('./template/style')

  await superEjsGenerateDir(outputDir, tplDir)
}

async function updateStyleEntry(): Promise<void> {
  const entryFilePath: string = path.resolve(
    __dirname,
    '../preset-uno/shortcuts/index.ts',
  )
  const content = `${(await fsExtra.readFile(entryFilePath)).toString().slice(0, -1)}\nimport { ${compName}Shortcuts } from './${compName}';\nexport * from './${compName}';\n`

  await fsExtra.writeFile(entryFilePath, content)
}

async function incrementTest(): Promise<void> {
  const outputDir: string = getFullPath(`../web-vue/${compName}/__test__`)
  const tplDir: string = getFullPath('./template/test')

  await superEjsGenerateDir(outputDir, tplDir)
}

async function incrementDocs(): Promise<void> {
  const outputDir: string = getFullPath('../../docs/components')
  const tplDir: string = getFullPath('./template/docs')

  await superEjsGenerateDir(outputDir, tplDir)
}

async function incrementDemos(): Promise<void> {
  const outputDir: string = getFullPath(`../web-vue/${compName}/demos`)
  const tplDir: string = getFullPath('./template/component/demos/basic.vue')

  await superEjsGenerateDir(outputDir, tplDir)
}

async function incrementDemosDoc(): Promise<void> {
  const outputDir: string = getFullPath(`../web-vue/${compName}/index.md`)
  const tplDir: string = getFullPath('./template/component/index.md')

  await superEjsGenerateDir(outputDir, tplDir)
}
