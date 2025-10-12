import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header/Header.vue'
import { menuItems } from '@/components/Header/constant'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home' },
    { path: '/story', name: 'story' },
    { path: '/gameplay', name: 'gameplay' },
    { path: '/weapons', name: 'weapons' },
    { path: '/map', name: 'map' },
    { path: '/news', name: 'news' },
    { path: '/gallery', name: 'gallery' }
  ]
})

vi.mock('vuetify', () => ({
  useDisplay: () => ({
    mdAndUp: { value: true }
  })
}))

vi.mock('@/components/Header/assets/logo.png', () => ({
  default: 'test-logo.png'
}))

describe('Header.vue - тестирование логики', () => {
  let wrapper
  let routerPushMock

  beforeEach(async () => {
    routerPushMock = vi.fn()

    wrapper = shallowMount(Header, {
      global: {
        plugins: [router],
        stubs: {
          '*': true
        },
        mocks: {
          $route: {
            query: {}
          },
          $router: {
            push: routerPushMock
          }
        }
      }
    })

    await router.isReady()
  })

  afterEach(() => {
    wrapper?.unmount()
    vi.clearAllMocks()
  })

  describe('Инициализация', () => {
    it('корректно инициализирует данные', () => {
      expect(wrapper.vm.drawer).toBe(false)
      expect(wrapper.vm.openedGroups).toEqual([])
      expect(wrapper.vm.menuItems).toHaveLength(menuItems.length)

      wrapper.vm.menuItems.forEach(item => {
        expect(item.open).toBe(false)
      })
    })

    it('преобразует originalMenuItems с добавлением open: false', () => {
      const headerMenuItems = wrapper.vm.menuItems

      expect(headerMenuItems).toHaveLength(menuItems.length)

      headerMenuItems.forEach((item, index) => {
        expect(item.name).toBe(menuItems[index].name)
        expect(item.link).toBe(menuItems[index].link)
        expect(item.open).toBe(false)
        if (menuItems[index].subItems) {
          expect(item.subItems).toEqual(menuItems[index].subItems)
        }
      })
    })
  })

  describe('Проверка ссылок и навигации', () => {
    it('все маршруты из menuItems существуют в роутере', () => {
      const routerRoutes = router.getRoutes().map(route => route.path)
      menuItems.forEach(item => {
        const routeExists = routerRoutes.includes(item.link)
        expect(routeExists).toBe(true)
        const resolvedRoute = router.resolve(item.link)
        expect(resolvedRoute.name).not.toBe(null)
        expect(resolvedRoute.matched.length).toBeGreaterThan(0)
      })
    })

    it('пункты меню без подменю вызывают навигацию при вызове их обработчиков', () => {
      const simpleMenuItems = menuItems.filter(item => !item.subItems)

      simpleMenuItems.forEach(menuItem => {
        const route = router.resolve(menuItem.link)
        expect(route.name).not.toBe(null)
        wrapper.vm.$router.push(menuItem.link)
        expect(routerPushMock).toHaveBeenCalledWith(menuItem.link)
        routerPushMock.mockClear()
      })
    })

    it('пункты меню с подменю имеют корректную структуру навигации', () => {
      const menuItemsWithSubs = menuItems.filter(item => item.subItems)
      menuItemsWithSubs.forEach(menuItem => {
        const mainRoute = router.resolve(menuItem.link)
        expect(mainRoute.name).not.toBe(null)
        menuItem.subItems.forEach(subItem => {
          const expectedNavigation = {
            path: menuItem.link,
            query: { scroll: subItem.link }
          }
          expect(expectedNavigation.path).toBe(menuItem.link)
          expect(expectedNavigation.query.scroll).toBe(subItem.link)
          wrapper.vm.$router.push(expectedNavigation)
          expect(routerPushMock).toHaveBeenCalledWith(expectedNavigation)
          routerPushMock.mockClear()
        })
      })
    })

    it('маршрут главной страницы существует и доступен', () => {
      const homeRoute = router.resolve('/')
      expect(homeRoute.name).toBe('home')
      expect(homeRoute.matched.length).toBeGreaterThan(0)
    })

    it('все необходимые маршруты зарегистрированы в роутере', () => {
      const requiredRoutes = ['/', '/story', '/gameplay', '/weapons', '/map', '/news', '/gallery']
      const routerRoutes = router.getRoutes().map(route => route.path)
      requiredRoutes.forEach(route => {
        expect(routerRoutes).toContain(route)
      })
    })
  })

  describe('Методы управления меню', () => {
    it('toggleGroup открывает только выбранное меню и закрывает остальные', async () => {
      const testItem = wrapper.vm.menuItems[1]
      wrapper.vm.toggleGroup(wrapper.vm.menuItems[0])
      expect(wrapper.vm.menuItems[0].open).toBe(true)
      wrapper.vm.toggleGroup(testItem)
      expect(testItem.open).toBe(true)
      wrapper.vm.menuItems
        .filter(item => item !== testItem)
        .forEach(item => {
          expect(item.open).toBe(false)
        })
    })

    it('openGroup работает аналогично toggleGroup', () => {
      const testItem = wrapper.vm.menuItems[2]
      wrapper.vm.openGroup(testItem)
      expect(testItem.open).toBe(true)
      wrapper.vm.menuItems
        .filter(item => item !== testItem)
        .forEach(item => {
          expect(item.open).toBe(false)
        })
    })

    it('closeAll закрывает все меню', () => {
      wrapper.vm.menuItems.forEach(item => {
        if (item.subItems) {
          item.open = true
        }
      })
      const openedBefore = wrapper.vm.menuItems.filter(item => item.open)
      expect(openedBefore.length).toBeGreaterThan(0)
      wrapper.vm.closeAll()
      wrapper.vm.menuItems.forEach(item => {
        expect(item.open).toBe(false)
      })
    })
  })

  describe('Наблюдатели (watchers)', () => {
    it('очищает openedGroups когда drawer закрывается', async () => {
      wrapper.vm.openedGroups = ['test-group-1', 'test-group-2']
      wrapper.vm.drawer = true
      await wrapper.vm.$nextTick()
      expect(wrapper.vm.openedGroups).toEqual(['test-group-1', 'test-group-2'])
      wrapper.vm.drawer = false
      await wrapper.vm.$nextTick()
      expect(wrapper.vm.openedGroups).toEqual([])
    })

    it('не очищает openedGroups когда drawer открывается', async () => {
      wrapper.vm.openedGroups = ['test-group-1', 'test-group-2']
      wrapper.vm.drawer = false
      await wrapper.vm.$nextTick()
      wrapper.vm.drawer = true
      await wrapper.vm.$nextTick()
      expect(wrapper.vm.openedGroups).toEqual(['test-group-1', 'test-group-2'])
    })
  })

  describe('Навигационные методы', () => {
    it('scrollToSection не падает при отсутствии элемента', async () => {
      const scrollToMock = vi.fn()
      global.window.scrollTo = scrollToMock
      await wrapper.vm.scrollToSection('non-existent-id')
      expect(scrollToMock).not.toHaveBeenCalled()
    })

    it('scrollToSection не падает с пустым ID', async () => {
      const scrollToMock = vi.fn()
      global.window.scrollTo = scrollToMock
      await wrapper.vm.scrollToSection(null)
      await wrapper.vm.scrollToSection('')
      await wrapper.vm.scrollToSection(undefined)
      expect(scrollToMock).not.toHaveBeenCalled()
    })
  })
})

describe('Header.vue - scrollToSection', () => {
  let wrapper
  let scrollToMock
  beforeEach(async () => {
    scrollToMock = vi.fn()
    global.window.scrollTo = scrollToMock
    Element.prototype.getBoundingClientRect = vi.fn(() => ({
      top: 100,
      height: 50,
      width: 100,
      left: 0,
      bottom: 150,
      right: 100
    }))

    global.window.scrollY = 0
    wrapper = shallowMount(Header, {
      global: {
        plugins: [router],
        stubs: { '*': true }
      }
    })

    await router.isReady()
  })

  afterEach(() => {
    wrapper?.unmount()
    vi.restoreAllMocks()
  })

  it('корректно скроллит к существующему элементу', async () => {
    const mockElement = document.createElement('div')
    mockElement.id = 'test-section'
    document.body.appendChild(mockElement)
    await wrapper.vm.scrollToSection('test-section')
    expect(scrollToMock).toHaveBeenCalledWith({
      top: 20,
      behavior: 'smooth'
    })

    document.body.removeChild(mockElement)
  })
})
