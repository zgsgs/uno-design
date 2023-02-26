import 'uno.css'
import type { App } from 'vue'
import * as components from '../web-vue'

export * from '../web-vue'

const unoDesign = {
  install: (app: App) => {
    Object.keys(components).forEach((key) => {
      app.component(key, components[key as keyof typeof components])
    })
  },
}

export default unoDesign
