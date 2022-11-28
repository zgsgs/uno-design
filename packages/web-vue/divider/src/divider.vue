<script lang="ts" setup name="UDivider">
import type { CSSProperties, ComputedRef } from 'vue'
import { computed, useSlots } from 'vue'
import type { ClassListInterface } from '../../_types'
import { Emits, Props } from './props'
import type { DividerPropsType } from './props'

const prop: DividerPropsType = defineProps(Props)
defineEmits(Emits)

/**
   * 是否有插槽
   */
const renderSlot: ComputedRef<boolean> = computed((): boolean => {
  return !prop.vertical && Boolean(useSlots().default)
})

const classList: ComputedRef<ClassListInterface> = computed((): ClassListInterface => {
  const { type, vertical } = prop

  return [
    'u-divider',
    {
      [`f-divider__${type}`]: type,
      'f-divider__vertical': vertical,
    },
  ] as const
})

const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
  const { color, margin } = prop

  if (margin) {
    return {
      margin: `${margin} 0`,
      borderColor: color,
    } as const
  }
  return { borderColor: color } as const
})
</script>

<template>
  <div
    role="separator"
    :class="classList"
    :style="styleList"
  >
    <span
      v-if="renderSlot"
      class="f-divider__text" :class="[`f-divider__text-${position}`]"
      :style="{
        background,
        color: fontColor,
      }"
    >
      <slot />
    </span>
  </div>
</template>
