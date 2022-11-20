<script lang="ts" setup name="USpace">
import type { CSSProperties, ComputedRef } from 'vue'
import { computed } from 'vue'
import type { ClassListInterface } from '../../_types'
import { Props } from './props'
import type { SpacePropsType } from './props'

const prop: SpacePropsType = defineProps(Props)

const classList: ComputedRef<ClassListInterface> = computed((): ClassListInterface => {
  const { wrap, vertical, spacing } = prop

  return [
    'u-space',
    {
      [`u-space__${spacing}`]: spacing,
      'u-space__wrap': wrap,
      'u-space__vertical': vertical,
    },
  ] as const
})

/**
   * 类名列表
   */
const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
  const { rowGap, columnGap } = prop

  return { rowGap, columnGap } as const
})
</script>

<template>
  <div v-if="$slots.default" :class="classList" :style="styleList">
    <slot />
  </div>
</template>
