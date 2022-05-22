import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/css/bootstrap.min.css' // Kanskje ikke nødvendig
require('@/assets/styles/app.scss')

createApp(App).use(store).use(router).mount('#app')

import "bootstrap/dist/js/bootstrap.js" // Kanskje ikke nødvendig
