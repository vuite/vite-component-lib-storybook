import type { Plugin } from 'vue'
import UiSample from './sample'
declare const install: Exclude<Plugin['install'], undefined>
export default install
export { UiSample }
