import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // 开发服务器相关配置
  server: {
    // 监听所有地址（便于局域网/容器访问）
    host: true,
    // 指定开发服务器启动的端口号，默认是5173，这里设置为80，方便在局域网中访问即无需写端口号
    port: 80
  }
})
