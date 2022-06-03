import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/js/bootstrap.js" // Kanskje ikke nødvendigimport { Vue } from 'vue-class-component'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/css/bootstrap.min.css' // Kanskje ikke nødvendig

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


require('@/assets/styles/app.scss')

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')





