import type * as components from './components'

// https://github.com/johnsoncodehk/volar/blob/master/extensions/vscode-vue-language-features/README.md

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UButton: typeof components.UnoButton
  }

  interface ComponentCustomProperties {
  }
}

export { }
