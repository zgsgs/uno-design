import type { Variant } from 'unocss'
import type { Theme } from '@unocss/preset-uno'

export default [
  (input: string) => {
    const prefix = 'u-disabled:'
    if (input.startsWith(prefix)) {
      return {
        matcher: input.slice(prefix.length),
        selector: input => `[disabled] ${input}, ${input}[disabled]`,
      }
    }
    return ''
  },
  (input: string) => {
    const prefix = 'u-checked:'
    if (input.startsWith(prefix)) {
      return {
        matcher: input.slice(prefix.length),
        selector: input => `[checked] ${input}, ${input}[checked]`,
      }
    }
    return ''
  },
] as Variant<Theme>[]
