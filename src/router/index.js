import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/Main.vue'),
      meta: { layout: 'DefaultLayout' }
    },
    {
      path: '/story',
      component: () => import('@/pages/Story.vue'),
      meta: { layout: 'DefaultLayout' }
    },
    {
      path: '/gameplay',
      component: () => import('@/pages/Gameplay.vue'),
      meta: { layout: 'DefaultLayout' }
    },
    {
      path: '/weapons',
      component: () => import('@/pages/Weapons.vue'),
      meta: { layout: 'DefaultLayout' }
    },
    {
      path: '/map',
      component: () => import('@/pages/Map.vue'),
      meta: { layout: 'DefaultLayout' }
    },
    {
      path: '/news',
      component: () => import('@/pages/News.vue'),
      meta: { layout: 'DefaultLayout' }
    },
    {
      path: '/gallery',
      component: () => import('@/pages/Gallery.vue'),
      meta: { layout: 'DefaultLayout' }
    }
  ]
})

export default router
