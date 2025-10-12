import { mount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Gallery from '@/pages/Gallery/Gallery.vue'
import { slides } from '@/pages/Gallery/constant'

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
}

const vuetify = createVuetify({ components, directives })

describe('Gallery.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Gallery, { global: { plugins: [vuetify] } })
  })

  it('рендерит заголовок и описание', () => {
    expect(wrapper.text()).toContain('Галерея — Dying Light')
    expect(wrapper.text()).toContain('Откройте для себя атмосферу Харрана через наши кадры.')
  })

  it('рендерит все слайды', () => {
    const items = wrapper.findAllComponents({ name: 'VCarouselItem' })
    expect(items.length).toBe(slides.length)
  })
})
