<script lang="ts" setup name="UEmpty">
import type { CSSProperties, ComputedRef } from 'vue'
import { computed } from 'vue'
import type { ClassListInterface } from '../../_types'
import { Emits, Props } from './props'
import type { EmptyPropsType } from './props'

const prop: EmptyPropsType = defineProps(Props)
defineEmits(Emits)

const classList: ComputedRef<ClassListInterface> = computed((): ClassListInterface => {
  // const { } = prop

  return [
    'u-empty',
    {

    },
  ] as const
})

const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
  // const { } = prop

  return { } as const
})
</script>

<template>
  <div :class="classList" :style="styleList">
    UEmpty
  </div>
</template>
