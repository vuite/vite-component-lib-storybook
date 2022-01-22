import type { App, Plugin } from 'vue'

import UiSample from './sample'

const components: Array<any> = [
  UiSample
]

// install function executed by Vue.use()
const install: Exclude<Plugin['install'], undefined> = function installVuite(app: App) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default install

export {
  UiSample
}
