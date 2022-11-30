<script lang="ts" setup name="<%= upperPrefix %><%= displayName %>">
import type { CSSProperties, ComputedRef } from 'vue'
import { computed } from 'vue'
import type { ClassListInterface } from '../../_types'
import { Emits, Props } from './props'
import type { <%= displayName %>PropsType } from './props'

const prop: <%= displayName %>PropsType = defineProps(Props)
defineEmits(Emits)

const classList: ComputedRef<ClassListInterface> = computed((): ClassListInterface => {
  // const { } = prop

  return [
    '<%= prefix %>-<%= name %>',
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
    <%= upperPrefix %><%= displayName %>
  </div>
</template>
