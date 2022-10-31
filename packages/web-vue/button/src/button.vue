<script lang="ts" setup name="UButton">
import { computed, h, ref } from 'vue'
import type { CSSProperties, ComputedRef, Ref } from 'vue'
import { USvgIcon } from '../../svg-icon'
import { FIconLoadingAVue } from '../../_assets/svg'
import { ChangeColor, Ripples, sizeChange } from '../../_utils'
import type {
  HandleEventInterface as a,
  ClassListInterface as b,
} from '../../_types'
import { Emits, Props } from './props'

const prop = defineProps(Props)
const emit = defineEmits(Emits)

// dom 元素
const UButton: Ref<HTMLButtonElement> = ref<HTMLButtonElement>(
  null as unknown as HTMLButtonElement,
)

// 类名列表
const classList: ComputedRef<b> = computed((): b => {
  const {
    type,
    round,
    simple,
    block,
    disabled,
    loading,
    bold,
    size,
    text,
    circle,
    color,
  } = prop

  return [
    'u-button',
    {
      [`u-button__${size}`]: size,
      [`u-button__${type}`]: !color,
      'u-button__disabled': disabled || loading,
      'u-button__simple': simple && !color,
      'u-button__circle': circle,
      'u-button__round': round,
      'u-button__block': block,
      'u-button__bold': bold,
      'u-button__color': color,
      'u-button__text': text && !color,
    },
  ] as const
})

// 点击
const handleClick: a = (evt: MouseEvent): void => {
  const { disabled, loading, ripples } = prop

  if (disabled || loading) {
    evt.preventDefault()
    return
  }

  if (ripples) {
    const { ripplesColor, simple, text, type } = prop

    const ripples: Ripples = new Ripples(
      evt,
      UButton.value as HTMLButtonElement,
      {
        duration: 700,
        component: 'u-button',
        className: 'u-button__ripples',
        ripplesColor,
        simple,
        text,
        type,
      } as const,
    )
    ripples.clickRipples()
  }

  emit('click', evt)
}

// 样式列表
const styleList: ComputedRef<CSSProperties> = computed((): CSSProperties => {
  const { fontSize, fontColor, shadow, color } = prop

  const style: CSSProperties = {
    '--u-button-font-size': sizeChange(fontSize),
    '--u-button-font-color': fontColor,
    '--u-button-box-shadow': shadow,
  } as CSSProperties

  if (color) {
    const changeColor: ChangeColor = new ChangeColor(color)
    const light: string = changeColor.getLightColor(0.4)
    const dark: string = changeColor.getDarkColor(0.2)

    style['--u-button-default-color'] = color
    style['--u-button-hover-color'] = light
    style['--u-button-active-color'] = dark
  }

  return style
})
</script>

<template>
  <template v-if="href">
    <a
      ref="UButton"
      role="button"
      tabindex="0"
      :class="classList"
      :href="href"
      :target="target"
      :style="styleList"
      @click="handleClick"
    >
      <USvgIcon
        v-if="loading || beforeIcon"
        class="u-button__before-icon" :class="[
          { 'u-button__loading-animation': loading },
        ]"
        :icon="loading ? loadingIcon || h(FIconLoadingAVue) : beforeIcon"
        :size="16"
      />

      <slot />

      <USvgIcon v-if="afterIcon" :icon="afterIcon" :size="16" />
    </a>
  </template>

  <template v-else>
    <button
      ref="UButton"
      role="button"
      tabindex="0"
      :class="classList"
      :disabled="disabled || loading"
      :autofocus="autofocus"
      :name="name"
      :type="nativeType"
      :style="styleList"
      @click="handleClick"
    >
      <USvgIcon
        v-if="loading || beforeIcon"
        class="u-button__before-icon" :class="[
          { 'u-button__loading-animation': loading },
        ]"
        :icon="loading ? loadingIcon || h(FIconLoadingAVue) : beforeIcon"
        :size="16"
      />

      <slot />

      <USvgIcon v-if="afterIcon" :icon="afterIcon" :size="16" />
    </button>
  </template>
</template>
