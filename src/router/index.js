import { createRouter, createWebHistory } from 'vue-router'
import HomeViewOld from '../views/HomeViewOld.vue'
import HomeNew from '../views/HomeView.vue'
import KampView from '../views/KampView.vue'
import LoginView from '../views/Login.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home_old',
    name: 'homeViewOld',
    component: HomeViewOld
  },
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeNew
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/kamp',
    name: 'kampView',
    component: KampView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
