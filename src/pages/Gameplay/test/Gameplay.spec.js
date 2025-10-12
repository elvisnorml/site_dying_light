import { mount, config } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Gameplay from '../Gameplay.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({ components, directives })
config.global.plugins = [vuetify]

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe('Gameplay.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Gameplay, {
      global: {
        plugins: [vuetify],
        stubs: {
          VTimeline: true,
          VTimelineItem: true
        }
      }
    })
  })

  it('по умолчанию выбрана вкладка "daynight"', () => {
    expect(wrapper.vm.selectedAspect).toBe('daynight')
    expect(wrapper.html()).toContain('Смена дня и ночи — основа атмосферы Dying Light')
  })

  it('переключение на другую вкладку меняет текст', async () => {
    wrapper.vm.selectedAspect = 'parkour'
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toContain('Паркур делает передвижение по Харрану динамичным и захватывающим')

    wrapper.vm.selectedAspect = 'combat'
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toContain('Боевая система строится на ближнем бое и реалистичной физике ударов')

    wrapper.vm.selectedAspect = 'craft'
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toContain('Крафт — важная часть выживания')

    wrapper.vm.selectedAspect = 'coop'
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toContain('Dying Light поддерживает кооперативный режим до четырёх игроков')
  })
})
