<script lang="ts" setup name="UAvatar">
import type { CSSProperties, ComputedRef } from 'vue'
import { computed } from 'vue'
import type { ClassListInterface } from '../../_types'
import { Emits, Props } from './props'
import type { AvatarPropsType } from './props'

const prop: AvatarPropsType = defineProps(Props)
defineEmits(Emits)

const classList: ComputedRef<ClassListInterface> = computed((): ClassListInterface => {
  // const { } = prop

  return [
    'u-avatar',
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
    UAvatar
  </div>
</template>
