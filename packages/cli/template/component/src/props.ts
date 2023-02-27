import type { ExtractPropTypes } from 'vue'

export const <%= displayName %>Props = {
  as: {
    type: String,
    default: '',
  },
} as const

export const Emits = {} as const

export type <%= displayName %>PropsType = ExtractPropTypes<typeof <%= displayName %>Props>
