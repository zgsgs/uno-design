import { createApp } from 'vue'
import '@vue/repl/style.css'
import '@uno-design/theme'
import './style.css'
import UnoDesign from '../../web-vue/index'

import App from './App.vue'

createApp(App).use(UnoDesign).mount('#app')
