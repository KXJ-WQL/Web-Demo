import './assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus' // 全局引入element-plus
import 'element-plus/dist/index.css'
import App from './App.vue'

createApp(App)
    .use(ElementPlus)
    .mount('#app')
