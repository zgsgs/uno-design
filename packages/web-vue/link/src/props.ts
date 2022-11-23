import type { HandleMouseEventInterface } from 'packages/web-vue/_types'
import type { Component, ExtractPropTypes, PropType, VNode } from 'vue'
import type { LinkHoverType, LinkTargetType, LinkType } from './type'

export const Props = {
  type: {
    type: String,
    default: 'primary',
    validator: (val: LinkType): boolean => {
      return (['default', 'primary', 'success', 'danger', 'warning'] as const).includes(val)
    },
  },
  href: {
    type: String,
    default: (): null => null,
  },
  size: {
    type: [String, Number] as PropType<string | number>,
    default: (): null => null,
  },
  state: {
    type: String as PropType<LinkHoverType>,
    default: (): LinkHoverType => '',
    validator: (val: LinkHoverType): boolean => {
      return (['line', 'bag', ''] as const).includes(val)
    },
  },
  prohibit: {
    type: Boolean,
    default: false,
  },
  target: {
    type: String as PropType<LinkTargetType>,
    default: (): LinkTargetType => '',
    validator: (val: LinkTargetType) => {
      return ['_self', '_blank', '_parent', '_top', ''].includes(val)
    },
  },
  color: {
    type: String,
    default: (): null => null,
  },
  noCopy: {
    type: Boolean,
    default: (): boolean => false,
  },
  noLink: {
    type: Boolean,
    default: (): boolean => false,
  },
  beforeIcon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null,
  },
  afterIcon: {
    type: Object as PropType<VNode | Component>,
    default: (): null => null,
  },
  click: {
    type: Function as PropType<HandleMouseEventInterface>,
    default: (): null => null,
  },
} as const

export type LinkPropsType = ExtractPropTypes<typeof Props>
