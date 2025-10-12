import { mount } from '@vue/test-utils'
import Story from '@/pages/Story/Story.vue'
import { describe, it, expect, vi, beforeEach } from 'vitest'

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserver

if (!global.visualViewport) {
  global.visualViewport = {
    addEventListener: () => {},
    removeEventListener: () => {},
    width: 1920,
    height: 1080,
    scale: 1,
    offsetTop: 0,
    offsetLeft: 0
  }
}

vi.mock('@mdi/js', () => ({ mdiClose: 'mdi-close' }))

vi.mock('vuetify', async () => {
  const actual = await vi.importActual('vuetify')
  return {
    ...actual,
    useDisplay: () => ({ smAndDown: false })
  }
})

describe('Story.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Story, {
      global: {
        stubs: {
          VTimeline: true,
          VTimelineItem: true
        }
      }
    })
  })

  it('монтируется без ошибок', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('отображает карточки с изображениями', () => {
    const cards = wrapper.findAll('.v-card')
    expect(cards.length).toBeGreaterThan(0)
  })

  it('открывает модалку при клике на изображение', async () => {
    const firstImg = wrapper.find('.v-img')
    expect(firstImg.exists()).toBe(true)
    await firstImg.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.dialog).toBe(true)
  })

  it('меняет фракцию при клике на чип', async () => {
    const chips = wrapper.findAll('.v-chip')
    expect(chips.length).toBeGreaterThan(0)
    await chips[1].trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.selectedFaction).not.toBe('tower')
  })

  it('открывает и закрывает диалог при клике', async () => {
    const wrapper = mount(Story)

    expect(wrapper.vm.dialog).toBe(false)

    const img = wrapper.find('img')
    await img.trigger('click')
    expect(wrapper.vm.dialog).toBe(true)

    const closeBtn = wrapper.findComponent({ name: 'VBtn' })
    await closeBtn.trigger('click')
    expect(wrapper.vm.dialog).toBe(false)
  })
})
