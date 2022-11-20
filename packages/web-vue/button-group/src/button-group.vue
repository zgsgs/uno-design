<script lang="ts" setup name="UButtonGroup">
import type { ComputedRef } from 'vue'
import { computed, provide } from 'vue'
import type { ClassListInterface } from '../../_types'
import type { ButtonSizeType } from '../../button'
import { BUTTON_GROUP_PROPS_KEY, Props } from './props'
import type { ButtonGroupPropsType } from './props'

const prop: ButtonGroupPropsType = defineProps(Props)

// 注入依赖
provide<ButtonSizeType>(BUTTON_GROUP_PROPS_KEY, prop.size)
/**
 * 类名列表
 */
const classList: ComputedRef<ClassListInterface> = computed((): ClassListInterface => {
  const { vertical, size } = prop

  return [
    'u-button-group',
    `u-button-group__${vertical ? 'vertical' : 'horizontal'}`,
    {
      [`u-button-group__${size}`]: size,
    },
  ] as const
})
</script>

<template>
  <div :class="classList">
    <slot />
  </div>
</template>
