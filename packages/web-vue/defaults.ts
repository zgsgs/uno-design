import type { App } from 'vue'
import * as components from './export'
import { version } from './package.json'
import type { AppInstallInterface } from './_types'

const install: AppInstallInterface = (app: App): App => {
  Object.entries(components).forEach(([key, value]): void => {
    // https://cn.vuejs.org/api/application.html#app-component
    app.component(key, value)
  })

  // app.config.globalProperties.UMessage = components.UMessage
  // app.config.globalProperties.UNotification = components.UNotification
  return app
}

export default {
  version,
  install,
}
