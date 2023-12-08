// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import i18n from './i18n';

import "@/assets/global.css"

const app = createApp(App);

app.use(router);
app.use(i18n);

app.mount('#app');