import { createApp } from 'vue';
import router from './router';
import './style.css';
import "@/mock/index.ts";
import App from './App.vue';

createApp(App).use(router).mount('#app')
