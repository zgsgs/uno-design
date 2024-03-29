import 'uno.css'
import type { App } from 'vue'
import * as components from '../components'
import { version } from './package.json'

export * from '../components'

const unoDesign = {
  version,
  install: (app: App) => {
    Object.keys(components).forEach((key) => {
      app.component(key, components[key as keyof typeof components])
    })
  },
}

export default unoDesign
