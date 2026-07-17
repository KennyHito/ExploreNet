// 从 Vue 框架中导入 createApp 方法，用于创建应用实例
import { createApp } from 'vue'
// 导入根组件 App
import App from './App.vue'
// 导入全局样式文件
import './style.css'
// 导入主题切换相关的组合式函数（副作用导入，用于初始化主题）
import './composables/useTheme.js'

// 创建 Vue 应用实例，挂载根组件 App，并渲染到页面中 id 为 #app 的 DOM 节点
createApp(App).mount('#app')
