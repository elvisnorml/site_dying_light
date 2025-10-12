import { mount } from '@vue/test-utils'
import News from '@/pages/News/News.vue'
import { news } from '../constant'

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe('News.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(News, {
      global: {
        stubs: {}
      }
    })
  })

  it('рендерит заголовок страницы', () => {
    const firstCard = wrapper.findComponent({ name: 'VCard' })
    expect(firstCard.text()).toContain('Новости — Dying Light')
    expect(firstCard.text()).toContain(
      'Здесь вы найдете последние новости о нашем проекте, обновления сайта и полезные материалы по Dying Light'
    )
  })

  it('рендерит все новости из массива', () => {
    const cards = wrapper.findAllComponents({ name: 'VCard' })
    expect(cards.length).toBe(news.length + 1)
  })

  it('отображает текст, дату и заголовок каждой новости', () => {
    const cards = wrapper.findAllComponents({ name: 'VCard' })
    news.forEach((item, i) => {
      const card = cards[i + 1]
      expect(card.text()).toContain(item.title)
      expect(card.text()).toContain(item.text)
      if (item.date) {
        expect(card.text()).toContain(item.date)
      }
    })
  })
})
