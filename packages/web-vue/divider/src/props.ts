import type { ExtractPropTypes, PropType } from 'vue'
import type { DividerPositionType, DividerType } from './type'

export const Props = {
  /**
   * 分隔符类型
   */
  type: {
    type: String as PropType<DividerType>,
    default: 'solid',
    validator: (val: DividerType): boolean => {
      return (['solid', 'dashed', 'dotted', 'double'] as const).includes(val)
    },
  },
  /**
   * 是否为竖线
   */
  vertical: {
    type: Boolean,
    default: false,
  },
  /**
   * 文字显示位置
   */
  position: {
    type: String as PropType<DividerPositionType>,
    default: 'center',
    validator: (val: DividerPositionType) => {
      return (['start', 'center', 'end'] as const).includes(val)
    },
  },
  /**
   * 间距
   */
  margin: {
    type: String,
    default: (): null => null,
  },
  /**
   * 颜色
   */
  color: {
    type: String,
    default: (): null => null,
  },
  /**
   * 文字颜色
   */
  fontColor: {
    type: String,
    default: (): null => null,
  },
  /**
   * 背景颜色
   */
  background: {
    type: String,
    default: (): null => null,
  },

} as const

export const Emits = {} as const

export type DividerPropsType = ExtractPropTypes<typeof Props>
