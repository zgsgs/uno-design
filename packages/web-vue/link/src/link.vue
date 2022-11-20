<script lang="ts" setup name="ULink">
import type { CSSProperties, ComputedRef } from 'vue'
import { computed } from 'vue'
import type { ClassListInterface, HandleMouseEventInterface } from '../../_types'
import { sizeChange } from '../../_utils'
import { runCallback } from '../../../shared/utils'
import { Emits, Props } from './props'
import type { LinkPropsType } from './props'

const prop: LinkPropsType = defineProps(Props)
defineEmits(Emits)

const classList: ComputedRef<ClassListInterface> = computed((): ClassListInterface => {
  const { type, state, prohibit, noCopy } = prop

  return [
    'u-link',
    {
      [`u-link__${state}`]: state,
      [`u-link__${type}`]: type,
      'u-link__prohibit': prohibit,
      'u-link__no-copy': noCopy,
    },
  ] as const
})

const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
  const { size, color } = prop

  return { color, fontSize: sizeChange(size) } as const
})

const handleClick: HandleMouseEventInterface = (evt: MouseEvent): void => {
  if (prop.prohibit || prop.noLink) {
    evt.preventDefault()
    return
  }
  runCallback(prop.click, evt)
}
</script>

<template>
  <a
    role="link"
    :class="classList"
    :style="styleList"
    :href="href"
    :target="target"
    @click="handleClick"
  >
    <u-svg-icon
      v-if="$slots.beforeIcon || beforeIcon"
      :icon="beforeIcon"
      :size="size || 16"
    >
      <slot name="beforeIcon" />
    </u-svg-icon>
    <slot />
    <u-svg-icon
      v-if="$slots.afterIcon || afterIcon"
      :icon="afterIcon"
      :size="size"
    >
      <slot name="afterIcon" />
    </u-svg-icon>
  </a>
</template>
