<script setup lang="ts">
import { watchEffect } from 'vue'
import { Repl } from '@vue/repl'
import { ReplStore } from './store'
import Header from './Header.vue'

const setVH = () => {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
}

window.addEventListener('resize', setVH)
setVH()

const store = new ReplStore({
  serializedState: location.hash.slice(1),
  defaultVueRuntimeURL: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.esm-browser.js',
})

// 启用实验功能
const sfcOptions = {
  script: {
    reactivityTransform: true,
  },
}

// persist state
watchEffect(() => history.replaceState({}, '', store.serialize()))
</script>

<template>
  <Header :store="store" />
  <Repl
    :store="store" :show-compile-output="true" :auto-resize="true" :sfc-options="sfcOptions" :clear-console="false"
    @keydown.ctrl.s.prevent @keydown.meta.s.prevent
  />
</template>

<style scoped>
.vue-repl {
  position: fixed;
  top: var(--nav-height);
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
