import { createApp } from 'vue'
// 开发阶段引入
import UnoDesign from '@uno-design/web-vue'
import App from './App.vue'

// 移动端测试
// import VConsole from 'vconsole'
// new VConsole()

// 打包阶段引入
// import UnoDesign from '../../dist'
// import '../dist/dist/index.css'

createApp(App).use(UnoDesign).mount('#app')
