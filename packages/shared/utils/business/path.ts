import path from 'path'

/**
 * 获取项目根路径
 * @descrition 末尾不带斜杠
 */
export function getRootPath() {
  return path.resolve(process.cwd())
}

/**
 * 获取项目packages路径
 * @param path - packages目录名称(默认: "packages")
 * @descrition 末尾不带斜杠
 */
export function getPackagesPath(path = 'packages') {
  const rootPath = getRootPath()
  return `${rootPath}/${path}`
}
