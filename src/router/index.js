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
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
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
