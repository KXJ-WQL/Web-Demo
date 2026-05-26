import { defineConfig } from 'vite'

export default defineConfig({
  // 让Vite把 examples 作为静态文件根目录
  root: 'examples',
  server: {
    port: 5173,
    open: '15.vector.html' // 自动打开页面
  }
})