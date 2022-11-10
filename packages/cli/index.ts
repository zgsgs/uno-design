import path from 'path'
import superEjs from 'super-ejs'
import changeCase from '@juln/change-case'
import fsExtra from 'fs-extra'

const logInfo = (...args: string[]): void => console.error('\x1B[33m', ...args, '\x1B[0m')
const logError = (...args: string[]): void => console.error('\x1B[31m', ...args, '\x1B[0m')

const updatedFiles: string[] = []
const prefix = 'u'
const upperPrefix = 'U'
const compName: string = getCompName()
const displayName = `${changeCase(compName, 'upper-camel-case')}`
const __dirname: string = path.resolve()
const outputDir: string = path.resolve(
  __dirname,
  '../web-vue',
  compName,
)

const mainFilePath: string = path.join(
  'packages/web-vue',
  compName,
  `${compName}.vue`,
)

const detectPublic = async (): Promise<void> => {
  // 如果已经存在
  if (fsExtra.existsSync(outputDir)) {
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

async function generate(): Promise<[void, void, void, void, void]> {
  updatedFiles.push(
    `packages/web-vue/${compName}/**`,
    'packages/web-vue/index.ts',
    `packages/theme/src/${compName}.scss`,
    'packages/theme/index.scss',
    `packages/web-vue/${compName}/__test__/${compName}.spec.ts`,
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
  ] as const)
}

async function generateComponentDir(): Promise<void> {
  const tplDir: string = path.resolve(__dirname, './template/component')

  // 编译文件内容
  await superEjsGenerateDir(outputDir, tplDir)
}

// 修改组件入口文件
async function updateComponentEntry(): Promise<void> {
  const entryFilePath: string = path.resolve(
    __dirname,
    '../web-vue/components.ts',
  )
  let content: string = (await fsExtra.readFile(entryFilePath)).toString()
  // content = `${content.slice(0, -1)}\nexport { ${upperPrefix}${displayName} } from './${compName}'\nexport * from './${compName}'\n`
  content = `${content.slice(0, -1)}\nexport * from './${compName}'\n`

  await fsExtra.writeFile(entryFilePath, content)
}

// 创建样式文件
async function incrementStyle(): Promise<void> {
  const outputDir: string = path.resolve(__dirname, '../theme/src')
  const tplDir: string = path.resolve(__dirname, './template/style')

  // 编译文件内容
  await superEjsGenerateDir(outputDir, tplDir)
}

// 添加样式入口
async function updateStyleEntry(): Promise<void> {
  const entryFilePath: string = path.resolve(
    __dirname,
    '../theme/index.scss',
  )
  let content: string = (await fsExtra.readFile(entryFilePath)).toString()
  content = `${content.slice(0, -1)}\n@use './src/${compName}.scss';\n`

  await fsExtra.writeFile(entryFilePath, content)
}

// 添加测试文件
async function incrementTest(): Promise<void> {
  const outputDir: string = path.resolve(__dirname, `../web-vue/${compName}/__test__`)
  const tplDir: string = path.resolve(__dirname, './template/test')
  await superEjsGenerateDir(outputDir, tplDir)
}

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
          `$1${compName}$2`,
        )
      },
    },
  )
}
