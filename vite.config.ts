import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000,//运行 vite 开发服务器时，本地3000端口启动
    proxy: {
      "/api": {
        target: "http://127.0.0.1:9999",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      // '/api': 'http://127.0.0.1:9999',//代理服务器
    },
  },
})
