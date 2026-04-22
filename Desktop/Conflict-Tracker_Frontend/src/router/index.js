import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../view/HomeView.vue'
import ConflictDetailView from '../view/ConflictDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/conflicts',
    redirect: '/'
  },
  {
    path: '/conflicts/:id',
    name: 'conflictDetail',
    component: ConflictDetailView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router