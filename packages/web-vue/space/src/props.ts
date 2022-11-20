import type { SpaceSizeType } from 'packages/web-vue/components'
import type { ExtractPropTypes, PropType } from 'vue'

export const Props = {
  /**
   * 是否竖直排列
   */
  vertical: {
    type: Boolean,
    default: (): boolean => false,
  },
  /**
   * 是否换行
   */
  wrap: {
    type: Boolean,
    default: (): boolean => true,
  },
  /**
   * 间距尺寸
   */
  spacing: {
    type: String as PropType<SpaceSizeType>,
    default: (): SpaceSizeType => 'middle',
    validator: (val: SpaceSizeType): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    },
  },
  /**
   * 自定义纵向间距
   */
  rowGap: {
    type: String,
    default: (): null => null,
  },
  /**
   * 自定义横向间距
   */
  columnGap: {
    type: String,
    default: (): null => null,
  },
} as const

export type SpacePropsType = ExtractPropTypes<typeof Props>
