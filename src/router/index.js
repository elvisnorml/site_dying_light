import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/Main/Main.vue'),
      meta: {
        layout: 'MainPageLayout',
        title: 'Главная — Dying Light',
        description: 'Добро пожаловать на официальный сайт Dying Light — узнайте больше о мире игры, героях и истории.'
      }
    },
    {
      path: '/story',
      component: () => import('@/pages/Story/Story.vue'),
      meta: {
        layout: 'DefaultLayout',
        title: 'История — Dying Light',
        description: 'Узнайте предысторию событий Dying Light и тайны, скрытые за падением цивилизации.'
      }
    },
    {
      path: '/gameplay',
      component: () => import('@/pages/Gameplay/Gameplay.vue'),
      meta: {
        layout: 'DefaultLayout',
        title: 'Геймплей — Dying Light',
        description: 'Изучите игровые механики, систему прогресса и боевые особенности Dying Light.'
      }
    },
    {
      path: '/weapons',
      component: () => import('@/pages/Weapons/Weapons.vue'),
      meta: {
        layout: 'DefaultLayout',
        title: 'Оружие — Dying Light',
        description: 'Посмотрите полный арсенал оружия Dying Light: от экспериментальных пушек до древних артефактов.'
      }
    },
    {
      path: '/map',
      component: () => import('@/pages/Map/Map.vue'),
      meta: {
        layout: 'DefaultLayout',
        title: 'Карта — Dying Light',
        description: 'Откройте для себя опасные локации и загадочные территории мира Dying Light.'
      }
    },
    {
      path: '/news',
      component: () => import('@/pages/News/News.vue'),
      meta: {
        layout: 'DefaultLayout',
        title: 'Новости — Dying Light',
        description: 'Будьте в курсе последних обновлений, патчей и событий в мире Dying Light.'
      }
    },
    {
      path: '/gallery',
      component: () => import('@/pages/Gallery/Gallery.vue'),
      meta: {
        layout: 'DefaultLayout',
        title: 'Галерея — Dying Light',
        description: 'Оцените визуальный стиль, концепт-арты и скриншоты из Dying Light.'
      }
    }
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.query.scroll) {
      const el = document.getElementById(to.query.scroll)
      if (el) {
        return {
          el: `#${to.query.scroll}`,
          top: 80,
          behavior: 'smooth'
        }
      }
    }

    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach(to => {
  const defaultTitle = 'Dying Light — Fan Site'
  const defaultDescription = 'Фан-сайт игры Dying Light. Новости, сюжет, оружие, карта и многое другое.'

  document.title = to.meta.title || defaultTitle

  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || defaultDescription)
  }
})

export default router
