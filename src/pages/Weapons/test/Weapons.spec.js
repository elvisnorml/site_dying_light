import { mount } from '@vue/test-utils'
import Weapons from '../Weapons.vue'
import { blocks } from '../constant'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({ components, directives })

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe('Weapons.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Weapons, {
      global: {
        plugins: [vuetify],
        stubs: {}
      }
    })
  })

  it('рендерит заголовок страницы', () => {
    const firstCard = wrapper.findComponent({ name: 'VCard' })
    expect(firstCard.text()).toContain('Оружие и инвентарь — Dying Light')
    expect(firstCard.text()).toContain('В Харране каждый предмет имеет значение')
  })

  it('рендерит все блоки из constant', () => {
    const cards = wrapper.findAllComponents({ name: 'VCard' })
    expect(cards.length).toBe(blocks.length + 1)
  })

  it('отображает текст каждого блока', () => {
    const cards = wrapper.findAllComponents({ name: 'VCard' })
    blocks.forEach((block, i) => {
      const card = cards[i + 1]
      expect(card.text()).toContain(block.title)
      expect(card.text()).toContain(block.text)
    })
  })
})
