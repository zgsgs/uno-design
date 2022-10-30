<script lang="ts" setup name="USvgIcon">
import { computed } from 'vue'
import type { CSSProperties, ComputedRef } from 'vue'
import { sizeChange } from '../../../utils'
import type { HandleEventInterface as Handle } from '../../../types'
import { Emits, Props } from './props'

const prop = defineProps(Props)
const emit = defineEmits(Emits)

const handleClick: Handle = (evt: MouseEvent): void => {
  emit('click', evt)
}

const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
  return {
    fontSize: sizeChange(prop.size),
    color: prop.color,
  } as const
})
</script>

<template>
  <i
    class="u-svg-icon"
    :style="styleList"
    text-indent="middle"
    @click="handleClick"
  >
    <component :is="icon" v-if="icon" />
    <slot v-else />
  </i>
</template>
