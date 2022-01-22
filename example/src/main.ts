import { createApp } from 'vue'
import App from './App.vue'

// import Ungeui from '../../dist/ungeui.es'
// import '../../dist/style.css'
import Vuite from '../../src'

createApp(App)
  .use(Vuite)
  .mount('#app')
