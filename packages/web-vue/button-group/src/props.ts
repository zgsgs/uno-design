import type { ButtonSizeType } from 'packages/web-vue/components'
import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'

export const Props = {
  size: {
    type: String as PropType<ButtonSizeType>,
    default: 'middle',
    validator: (val: ButtonSizeType): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    },
  },
  vertical: {
    type: Boolean,
    default: (): boolean => false,
  },
} as const

export type ButtonGroupPropsType = ExtractPropTypes<typeof Props>

export const BUTTON_GROUP_PROPS_KEY: InjectionKey<ButtonGroupPropsType> = Symbol('button-group-props-key')
