<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { Repl } from '@vue/repl'
import { ReplStore } from './store'
import { Header } from './components'

const setVH = () => {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
}

window.addEventListener('resize', setVH)
setVH()

const useDevMode = ref(false)
const useSSRMode = ref(false)

let hash = location.hash.slice(1)
if (hash.startsWith('__DEV__')) {
  hash = hash.slice(7)
  useDevMode.value = true
}
if (hash.startsWith('__SSR__')) {
  hash = hash.slice(7)
  useSSRMode.value = true
}

const store = new ReplStore({
  serializedState: hash,
  defaultVueRuntimeURL: import.meta.env.PROD
    ? `${location.origin}/vue.runtime.esm-browser.js`
    : `${location.origin}/src/utils/vue-dev-proxy`,
  defaultVueServerRendererURL: import.meta.env.PROD
    ? `${location.origin}/server-renderer.esm-browser.js`
    : `${location.origin}/src/utils/vue-server-renderer-dev-proxy`,
})

// enable experimental features
const sfcOptions = {
  script: {
    inlineTemplate: !useDevMode.value,
    isProd: !useDevMode.value,
    reactivityTransform: true,
  },
  style: {
    isProd: !useDevMode.value,
  },
  template: {
    isProd: !useDevMode.value,
  },
}

// persist state
watchEffect(() => {
  const newHash = store
    .serialize()
    .replace(/^#/, useSSRMode.value ? '#__SSR__' : '#')
    .replace(/^#/, useDevMode.value ? '#__DEV__' : '#')
  history.replaceState({}, '', newHash)
})

function toggleDevMode() {
  const dev = (useDevMode.value = !useDevMode.value)
  sfcOptions.script.inlineTemplate
    = sfcOptions.script.isProd
    = sfcOptions.template.isProd
    = sfcOptions.style.isProd
      = !dev
  store.setFiles(store.getFiles())
}

function toggleSSR() {
  useSSRMode.value = !useSSRMode.value
  store.setFiles(store.getFiles())
}
</script>

<template>
  <Header
    :store="store"
    :dev="useDevMode"
    :ssr="useSSRMode"
    @toggle-dev="toggleDevMode"
    @toggle-ssr="toggleSSR"
  />
  <Repl
    :ssr="useSSRMode"
    :store="store"
    :show-compile-output="true"
    :auto-resize="true"
    :sfc-options="sfcOptions"
    :clear-console="false"
    @keydown.ctrl.s.prevent
    @keydown.meta.s.prevent
  />
</template>

<style scoped>
.dark {
  color-scheme: dark;
}

.vue-repl {
  position: fixed;
  top: var(--nav-height);
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
