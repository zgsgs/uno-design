import path from 'path'

export function getRootPath() {
  return path.resolve(process.cwd())
}

export function getVueCompPath(path = '') {
  const rootPath = getRootPath()

  return `${rootPath}/web-vue/${path}`
}
