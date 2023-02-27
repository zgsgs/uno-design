import type { ExtractPropTypes, PropType } from 'vue'
import type { ButtonSize, ButtonType } from './type'

export const ButtonProps = {
  to: String,
  type: String as PropType<ButtonType>,
  size: {
    type: String as PropType<ButtonSize>,
    default: 'medium',
  },
  plain: Boolean,
  dashed: Boolean,
  round: Boolean,
  icon: String,
} as const

export const Emits = {} as const

export type ButtonPropsType = ExtractPropTypes<typeof ButtonProps>
