import path from 'path'

/**
 * 获取指令运行根路径
 * @descrition 末尾不带斜杠
 */
export function getRuntimeRootPath(): string {
  return path.resolve(process.cwd())
}
/**
 * 获取项目根路径
 * @descrition 末尾不带斜杠
 */
export function getRootPath(): string {
  return path.resolve(__dirname, '../../../..')
}

/**
 * 获取项目packages路径
 * @param path - packages目录名称(默认: "packages")
 * @descrition 末尾不带斜杠
 */
export function getPackagesPath(path = 'packages') {
  return `${getRootPath()}/${path}`
}

/**
 * 获取项目 svg 路径
 * @descrition 末尾不带斜杠
 */
export function getLocalIconPath(): string {
  return `${getPackagesPath()}/icon/src`
}

/* -- 获取输出路径 -- */
export function getPlayOutDir(): string {
  return `${getRootPath()}/dist-paly`
}

export function getWebVueOutDir(): string {
  return `${getRootPath()}/dist`
}
export function getWebVueEntry(): string {
  return `${getPackagesPath()}/web-vue/index.ts`
}
