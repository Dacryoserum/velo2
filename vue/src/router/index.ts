import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'carte',
      component: () => import('../components/Carte.vue')
    },
    {
      path: '/carte',
      name: "carte",
      component: () => import('../components/Carte.vue')
    }
  ]
})

export default router
