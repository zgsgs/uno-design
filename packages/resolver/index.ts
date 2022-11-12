import { existsSync } from 'fs'

const setWebComponentName = (
  name: string,
): string => {
  /**
   * 区分U、u-
   */
  if (name.includes('U')) {
    const result = name.slice(1).replace(/([A-Z])/g, ' $1').trim()
    return result.split(' ').join('-').toLowerCase()
  }
  else if (name.includes('u-')) {
    return name.slice(2)
  }
  return ''
}

interface ResolveReturnInterface {
  name: string
  from: string
  sideEffects: string[]
}

function UnoDesignResolver(): {
  type: string
  resolve: (name: string) => ResolveReturnInterface | undefined
}
function UnoDesignResolver() {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^(U[A-Z]|u-[a-z])/)) {
        const cssPath = `uno-design/theme/${setWebComponentName(name)}.css`
        const sideEffects = existsSync(cssPath) ? [cssPath] : []

        return {
          name,
          sideEffects,
          from: 'uno-design',
        }
      }
      return undefined
    },
  }
}

export default UnoDesignResolver
