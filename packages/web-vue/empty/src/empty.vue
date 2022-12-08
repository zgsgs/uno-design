<script lang="ts" setup name="UEmpty">
import type { CSSProperties, ComputedRef } from 'vue'
import { computed } from 'vue'
import type { ClassListInterface } from '../../_types'
import { sizeChange } from '../../_utils'
import UIconLoadingA from '../../_assets/svg/u-icon-loading-a.vue'
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
  const { contentColor, contentSize } = prop

  return {
    color: contentColor,
    fontSize: sizeChange(contentSize),
  } as const
})
</script>

<template>
  <div :class="classList" :style="styleList">
    <!-- 图片 -->
    <div class="u-empty__wrapper">
      <slot v-if="$slots.default" />

      <template v-else>
        <u-image v-if="imageSrc" :src="imageSrc" :width="imageSize" />
        <u-svg-icon v-else :icon="UIconLoadingA" :size="iconSize" />
      </template>
    </div>

    <!-- 描述文字 -->
    <span class="u-empty__content" :style="styleList">
      {{ content }}
    </span>

    <!-- 自定义页脚 -->
    <div v-if="$slots.footer" class="u-empty__footer">
      <slot name="footer" />
    </div>
  </div>
</template>
