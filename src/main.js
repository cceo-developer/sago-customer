import { createApp } from 'vue'

import App from './App.vue';

import './css/style.css';
import generateRouter from '@/router';
import store from '@/store';
import alvue from '@myshell/alvue';


const app = createApp(App);
app.use(store);
app.use(alvue);
app.use(generateRouter(store));

app.mount('#app');
