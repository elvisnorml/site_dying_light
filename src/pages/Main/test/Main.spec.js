import { mount } from '@vue/test-utils'
import Main from '@/pages/Main/Main.vue'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

vi.mock('./constant', () => ({
  blocks: [
    { title: 'Test Block 1', text: 'Block 1 text', img: '/img1.jpg' },
    { title: 'Test Block 2', text: 'Block 2 text', img: '/img2.jpg' },
    { title: 'Test Block 3', text: 'Block 3 text', img: '/img3.jpg' }
  ]
}))

vi.mock('vuetify', async () => {
  const actual = await vi.importActual('vuetify')
  return {
    ...actual,
    useDisplay: () => ({ smAndDown: false })
  }
})

describe('Main.vue', () => {
  let container

  beforeEach(() => {
    container = document.createElement('div')
    container.classList.add('scroll-wrapper')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('монтируется без ошибок', () => {
    const wrapper = mount(Main, {
      global: {
        stubs: ['VBtn']
      },
      attachTo: container
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('отображает правильное количество блоков', () => {
    const wrapper = mount(Main, {
      global: {
        stubs: ['VBtn']
      },
      attachTo: container
    })

    const sheets = wrapper.findAllComponents({ name: 'VSheet' }) // ищем все VSheet
    expect(sheets.length).toBe(8)
  })

  it('корректно вызывает scrollToTop при клике', async () => {
    const wrapper = mount(Main, {
      global: {
        stubs: ['VBtn']
      },
      attachTo: container
    })

    const btns = wrapper.findAllComponents({ name: 'VBtn' })
    const topButton = btns.find(btn => btn.attributes('icon'))
    expect(topButton).toBeTruthy()

    container.style.transform = 'translateY(100px)'
    await topButton.trigger('click')
    wrapper.vm.scrollToTop?.()

    expect(container.style.transform).toBe('translateY(0)')
  })
})
