import { createApp } from 'vue'

import './css/style.css'
import generateRouter from '@/router';
import store from '@/store';

import App from './App.vue'

const app = createApp(App);
app.use(store);
app.use(generateRouter(store));

app.mount('#app');
