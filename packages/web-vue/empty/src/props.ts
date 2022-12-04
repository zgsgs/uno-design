import type { ExtractPropTypes } from 'vue'

export const Props = {} as const

export const Emits = {} as const

export type EmptyPropsType = ExtractPropTypes<typeof Props>
