import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from "@rollup/plugin-alias";
import path from "path";


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    alias({
      entries: [
        { find: "@", replacement: path.resolve(__dirname, "./src")},
        { find: "@alg", replacement: path.resolve(__dirname, "./src/algorithm")},
        { find: "@service", replacement: path.resolve(__dirname, "./src/service")}
      ]
    })
  ]  
})
