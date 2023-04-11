import { createApp } from 'vue'
// 开发阶段引入
import UnoDesign from '@uno-design/web-vue'
import App from './App.vue'
import 'uno.css'
import '@uno-design/web-vue/dist/style.css'

// 移动端测试
// import VConsole from 'vconsole'
// new VConsole()

const app = createApp(App)
app.use(UnoDesign)
app.mount('#app')
