import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入 Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'  // 引入样式

// 引入 Bootstrap 样式及js文件
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // 引入 Bootstrap 的 JS 和 Popper



const app=createApp(App)

app.use(ElementPlus)  // 使用 Element Plus 插件


app.mount('#app')
