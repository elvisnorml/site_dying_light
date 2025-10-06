import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/Main/Main.vue'),
      meta: { layout: 'MainPageLayout' }
    },
    {
      path: '/story',
      component: () => import('@/pages/Story/Story.vue'),
      meta: { layout: 'DefaultLayout' }
    },
    {
      path: '/gameplay',
      component: () => import('@/pages/Gameplay/Gameplay.vue'),
      meta: { layout: 'DefaultLayout' }
    },
    {
      path: '/weapons',
      component: () => import('@/pages/Weapons/Weapons.vue'),
      meta: { layout: 'DefaultLayout' }
    },
    {
      path: '/map',
      component: () => import('@/pages/Map/Map.vue'),
      meta: { layout: 'DefaultLayout' }
    },
    {
      path: '/news',
      component: () => import('@/pages/News/News.vue'),
      meta: { layout: 'DefaultLayout' }
    },
    {
      path: '/gallery',
      component: () => import('@/pages/Gallery/Gallery.vue'),
      meta: { layout: 'DefaultLayout' }
    }
  ]
})

export default router
