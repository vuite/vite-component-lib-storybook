import UiSample from './sample'
const components = [
  UiSample
]
// install function executed by Vue.use()
const install = function installVuite(app) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
export default install
export { UiSample }
// # sourceMappingURL=index.js.map
