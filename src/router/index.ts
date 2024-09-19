import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Default from '@/layout/Default.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Default,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
          meta: { transition: null }
        }
      ]
    }
  ]
})

export default router
